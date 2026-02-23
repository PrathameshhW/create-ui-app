import inquirer from "inquirer";
import { boilerplates, Framework } from "./boilerplates";

export interface UserAnswers {
  framework: Framework;
  projectName: string;
}

export async function askUser(): Promise<UserAnswers> {
  let framework: Framework;

  while (true) {
    const answer = await inquirer.prompt<{ framework: Framework }>([
      {
        type: "rawlist",
        name: "framework",
        message: "Select a framework:",
        choices: Object.entries(boilerplates).map(([key, value]) => ({
          name: `${value.name} - ${value.description}${
            value.comingSoon ? " (Coming soon)" : ""
          }`,
          value: key,
        })),
      },
    ]);

    if (!boilerplates[answer.framework].comingSoon) {
      framework = answer.framework;
      break;
    }

    console.log("This boilerplate is coming soon and cannot be selected yet.");
  }

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
