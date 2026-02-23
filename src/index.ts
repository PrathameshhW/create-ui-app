#!/usr/bin/env node

import chalk from "chalk";
import { boilerplates } from "./boilerplates";
import { cloneRepo } from "./clone";
import { askUser } from "./prompts";

async function main() {
  console.log(chalk.cyan("\n🚀 Create UI App\n"));

  const { framework, projectName } = await askUser();

  const repo = boilerplates[framework].repo;

  await cloneRepo(repo, projectName);
}

main();
