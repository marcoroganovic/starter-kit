/* eslint-disable no-console */
import webpack from "webpack";
import wbpConfig from "../webpack.config";
import chalk from "chalk";

process.env.NODE_ENV = "production";
console.log(chalk.blue("Bundling for production. Please wait..."));

webpack(wbpConfig).run((err, stats) => {
  if(err) {
    console.log(chalk.red(err));
    return 1;
  }

  stats = stats.toJson();

  if(stats.hasErrors) {
    return stats.errors.map(error => console.log(chalk.red(error)));
  }

  console.log(chalk.green("Bundling finished, ready to deploy!"));
  return 0;
});
