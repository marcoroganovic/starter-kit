import fs from "fs";
import cheerio from "cheerio";
import chalk from "chalk";

/* eslint-disable no-console */

fs.readFile("src/index.html", "utf8", (err, markup) => {
  if(err) return err;

  const $ = cheerio.load(markup);

  $("head").prepend('<link rel="stylesheet" href="styles.css">`);

  fs.writeFile("dist/index.html", $.html(), "utf8", (err) => {
    if(err) return err;
    console.log(chalk.green("index.html written to /dist"));
  });
});
