#!/usr/bin/env node

// src/index.ts
import chalk2 from "chalk";

// src/boilerplates.ts
var boilerplates = {
  mui: {
    name: "MUI + Vite",
    repo: "github:your-username/mui-boilerplate",
    description: "React + MUI + Vite setup"
  },
  shadcn: {
    name: "Shadcn + Vite",
    repo: "github:your-username/shadcn-boilerplate",
    description: "React + Shadcn + Tailwind"
  },
  antd: {
    name: "Ant Design",
    repo: "github:your-username/antd-boilerplate",
    description: "React + Antd + Vite"
  }
};

// src/clone.ts
import degit from "degit";
import ora from "ora";
import { execa } from "execa";
import chalk from "chalk";
async function cloneRepo(repo, projectName) {
  const spinner = ora("Cloning boilerplate...").start();
  try {
    const emitter = degit(repo, { cache: false, force: true });
    await emitter.clone(projectName);
    spinner.succeed("Boilerplate cloned!");
    process.chdir(projectName);
    const installSpinner = ora("Installing dependencies...").start();
    await execa("npm", ["install"]);
    installSpinner.succeed("Dependencies installed!");
    console.log(chalk.green("\nProject ready \u{1F680}"));
  } catch (error) {
    spinner.fail("Failed to create project");
    console.error(error);
    process.exit(1);
  }
}

// src/prompts.ts
import inquirer from "inquirer";
async function askUser() {
  const supportsInteractiveList = Boolean(process.stdin.isTTY) && Boolean(process.stdout.isTTY) && process.env.TERM !== "dumb";
  const { framework } = await inquirer.prompt([
    {
      type: supportsInteractiveList ? "list" : "rawlist",
      name: "framework",
      message: "Select a framework:",
      choices: Object.entries(boilerplates).map(([key, value]) => ({
        name: `${value.name} - ${value.description}`,
        value: key
      }))
    }
  ]);
  const { projectName } = await inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "Project name:",
      default: "my-app"
    }
  ]);
  return { framework, projectName };
}

// src/index.ts
async function main() {
  console.log(chalk2.cyan("\n\u{1F680} Create UI App\n"));
  const { framework, projectName } = await askUser();
  const repo = boilerplates[framework].repo;
  await cloneRepo(repo, projectName);
}
main();
