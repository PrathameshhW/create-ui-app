import degit from "degit";
import ora from "ora";
import { execa } from "execa";
import chalk from "chalk";

export async function cloneRepo(repo: string, projectName: string) {
  const spinner = ora("Cloning boilerplate...").start();

  try {
    const emitter = degit(repo, { cache: false, force: true });
    await emitter.clone(projectName);

    spinner.succeed("Boilerplate cloned!");

    process.chdir(projectName);

    const installSpinner = ora("Installing dependencies...").start();
    await execa("npm", ["install"]);

    installSpinner.succeed("Dependencies installed!");

    console.log(chalk.green("\nProject ready 🚀"));
  } catch (error) {
    spinner.fail("Failed to create project");
    console.error(error);
    process.exit(1);
  }
}
