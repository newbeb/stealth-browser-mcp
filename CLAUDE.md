# stealth-browser-mcp Guidelines

## Workflow
- Use a git feature based workflow and always work in a feature and make sure we commit things along the way.
- Don't mix features in a single branch. If we need to work on multiple features, create separate branches.
- If we learn something along the way about how to work better please share it with me and if I agree you can add it to this file. Don't ever add anything here with my specific approval.
- You've got tools, use them!

## Commands
- **Run**: `bun run index.ts` - Run the main application
- **Dev**: `bun --watch index.ts` - Run with live reloading

## Code Style
- **Imports**: Use named imports, sort alphabetically, group by type
- **Formatting**: 2-space indentation, trailing semicolons
- **Types**: Prefer explicit typing with interfaces over types when possible
- **Naming**: camelCase for variables/functions, PascalCase for classes/types
- **Error Handling**: Use try/catch with specific error types, avoid generic catches
- **Comments**: JSDoc for public APIs, inline for complex logic
- **Async**: Prefer async/await over raw Promises
- **Stealth Browser**: Follow puppeteer-extra plugin patterns for stealth features

## Project Structure
- `index.ts`: Main application entry point

This project uses Bun and TypeScript with ESM modules.
