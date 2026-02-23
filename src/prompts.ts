import inquirer from "inquirer";
import { boilerplates, Framework } from "./boilerplates";

export interface UserAnswers {
  framework: Framework;
  projectName: string;
}

export async function askUser(): Promise<UserAnswers> {
  const supportsInteractiveList =
    Boolean(process.stdin.isTTY) &&
    Boolean(process.stdout.isTTY) &&
    process.env.TERM !== "dumb";

  const { framework } = await inquirer.prompt<{ framework: Framework }>([
    {
      type: supportsInteractiveList ? "list" : "rawlist",
      name: "framework",
      message: "Select a framework:",
      choices: Object.entries(boilerplates).map(([key, value]) => ({
        name: `${value.name} - ${value.description}`,
        value: key,
      })),
    },
  ]);

  const { projectName } = await inquirer.prompt<{ projectName: string }>([
    {
      type: "input",
      name: "projectName",
      message: "Project name:",
      default: "my-app",
    },
  ]);

  return { framework, projectName };
}
