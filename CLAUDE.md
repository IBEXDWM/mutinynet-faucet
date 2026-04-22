# CLAUDE.md

## Project overview

TypeScript / Node.js project.

## Common commands

```bash
npm install        # Install dependencies
npm run build      # Build the project
npm run dev        # Run in dev mode
npm test           # Run tests
npm run lint       # Lint the code
npm run format     # Format code (prettier)
```

## Code conventions

- **TypeScript strict mode**: no implicit `any`, strict null checks
- **Formatting**: Prettier — enforced, no manual style variation
- **Linting**: ESLint — fix all errors before merging
- **Naming**: `camelCase` for variables/functions, `PascalCase` for types/classes/interfaces, `SCREAMING_SNAKE_CASE` for constants
- **Async**: prefer `async/await` over raw promises
- **Error handling**: throw `Error` subclasses with meaningful messages; always handle rejections
- **Imports**: prefer named imports; group imports (std/external/internal)

## Git conventions

- **Commit messages**: conventional commits — `feat(scope): message`, `fix(scope):`, etc.
- **Branch naming**: `<jira-ticket>-<slug>`
- **Main branch**: `master`

## What to watch out for

- Never commit `.env` or secrets — use `.env.sample` for templates
- Review `package-lock.json` changes — unexpected dependency bumps can introduce vulnerabilities
- Always handle async errors — unhandled rejections crash the process
- Use `zod` or similar for runtime validation of external inputs
