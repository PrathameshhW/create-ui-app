# create-ui-app

A CLI to bootstrap UI starter projects in seconds.

`create-ui-app` lets you pick a framework, choose a project name, clone the matching boilerplate, and install dependencies automatically.

## Features

- Simple interactive CLI flow
- Framework picker with `Coming soon` visibility
- Prevents selecting unavailable templates
- Clones boilerplates using `degit`
- Installs dependencies automatically with `npm install`

## Available Boilerplates

| Framework | Status | Notes |
| --- | --- | --- |
| MUI + Vite | Available | React + MUI + Vite setup |
| Shadcn + Vite | Coming soon | React + Shadcn + Tailwind |
| Ant Design | Coming soon | React + Antd + Vite |

## Requirements

- Node.js 18+
- npm

## Quick Start

### Run locally (from this repo)

```bash
npm install
npm run build
node dist/index.js
```

### Use as a linked global CLI (local development)

```bash
npm install
npm run build
npm link
create-ui-app
```

### After publishing to npm

```bash
npx create-ui-app
```

## Demo Video

<!-- Add your demo video here later -->
<!-- Example: [Watch Demo](https://your-video-link) -->


https://github.com/user-attachments/assets/272da21b-fa00-49d6-8ecc-a42422f66852




## How It Works

1. Prompts you to select a framework.
2. Shows coming-soon frameworks but blocks selection.
3. Prompts for project name (default: `my-app`).
4. Clones the selected boilerplate.
5. Installs dependencies inside the new project.

## Development

```bash
# Install dependencies
npm install

# Build once
npm run build

# Watch mode during development
npm run dev
```

## Project Structure

```text
src/
  index.ts         # CLI entrypoint
  prompts.ts       # Framework + project name prompts
  boilerplates.ts  # Boilerplate metadata and availability
  clone.ts         # Clone + dependency install logic
```

## Roadmap

- Add more framework templates
- Add package manager selection (`npm`, `pnpm`, `yarn`)
- Add optional post-setup steps (git init, first commit)

## License

ISC
