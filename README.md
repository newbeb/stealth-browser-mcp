# Stealth Browser MCP Server

<details>
<summary>Badges</summary>

<span style="display:inline-block;vertical-align:middle;">
  <a href="https://mseep.ai/app/newbeb-stealth-browser-mcp">
    <img width="120" height="32" src="https://mseep.net/pr/newbeb-stealth-browser-mcp-badge.png" alt="MseeP.ai Security Assessment Badge" />
  </a>
</span>

<span style="display:inline-block;vertical-align:middle;">
  <a href="https://glama.ai/mcp/servers/efxcqjoq01">
    <img width="120" height="32" src="https://glama.ai/mcp/servers/efxcqjoq01/badge" alt="Stealth Browser Server MCP server" />
  </a>
</span>

</details>

An [MCP (Model Context Protocol)](https://modelcontextprotocol.ai) server that provides stealth browser capabilities using Playwright with anti-detection techniques. This server allows MCP clients to navigate to websites and take screenshots while evading common bot detection systems.

## Features

- **Stealth Mode**: Uses [puppeteer-extra-plugin-stealth](https://github.com/berstend/puppeteer-extra/tree/master/packages/puppeteer-extra-plugin-stealth) with [playwright-extra](https://github.com/berstend/puppeteer-extra/tree/master/packages/playwright-extra) to bypass bot detections
  - Modifies browser fingerprints to appear as regular user traffic
  - Handles WebGL, canvas, font, plugin and other browser fingerprinting techniques
- **Screenshot Tool**: Take full-page or element-specific screenshots of any website
  - Supports both headless (default) and visible browser modes
- **MCP Integration**: Exposes browser capabilities via Model Context Protocol

## Installation

```bash
# Install dependencies
bun install
```

## Usage

```bash
# Run the MCP server
bun start

# Development mode
bun dev

# Inspect available tools
bun inspect
```

## Available Tools

### screenshot

Takes screenshots of webpages using a stealth browser.

Parameters:
- `url` (string, required): The URL to navigate to
- `fullPage` (boolean, optional, default: true): Whether to capture the entire page
- `selector` (string, optional): CSS selector to capture only a specific element
- `headless` (boolean, optional, default: true): Whether to run in headless mode or visible browser mode

## Technical Details

This project uses:
- [FastMCP](https://github.com/punkpeye/fastmcp) for the MCP server implementation
- [Playwright](https://playwright.dev/) for browser automation
- [playwright-extra](https://github.com/berstend/puppeteer-extra/tree/master/packages/playwright-extra) for plugin support
- [puppeteer-extra-plugin-stealth](https://github.com/berstend/puppeteer-extra/tree/master/packages/puppeteer-extra-plugin-stealth) for avoiding bot detection

---

This project was built with [Bun](https://bun.sh), a fast all-in-one JavaScript runtime.