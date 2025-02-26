import { FastMCP } from 'fastmcp';
import { z } from 'zod';
import { chromium } from 'playwright-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';

// Add the stealth plugin to playwright
chromium.use(StealthPlugin());

// Create a new FastMCP server
const server = new FastMCP({
  name: 'stealth-browser-mcp',
  version: '1.0.0'
});

// Add the screenshot tool
server.addTool({
  name: 'screenshot',
  description: 'Navigate to a URL and take a screenshot of the webpage',
  parameters: z.object({
    url: z.string().describe('URL to navigate to'),
    fullPage: z.boolean().default(true).describe('Whether to take a screenshot of the full page'),
    selector: z.string().optional().describe('CSS selector to screenshot a specific element')
  }),
  execute: async ({ url, fullPage = true, selector }) => {
    // Launch browser with stealth mode
    const browser = await chromium.launch({ headless: true });
    try {
      const page = await browser.newPage();
      
      // Navigate to the URL
      console.error(`Navigating to ${url}...`);
      await page.goto(url, { waitUntil: 'networkidle' });
      
      // Take the screenshot
      const screenshotOptions = { fullPage };
      let screenshot;
      
      if (selector) {
        // Screenshot specific element if selector is provided
        const element = await page.$(selector);
        if (element) {
          screenshot = await element.screenshot();
        } else {
          throw new Error(`Element with selector '${selector}' not found`);
        }
      } else {
        // Screenshot entire page
        screenshot = await page.screenshot(screenshotOptions);
      }
      
      // Return screenshot as base64 data with content type
      return {
        content: [
          {
            type: 'image',
            data: screenshot.toString('base64'),
            mimeType: 'image/png'
          }
        ]
      };
    } finally {
      await browser.close();
    }
  }
});

// Start the server with STDIO transport
server.start({ transportType: 'stdio' }).then(() => {
  console.error('MCP server started and waiting for commands...');
}).catch(error => {
  console.error('Failed to start MCP server:', error);
});