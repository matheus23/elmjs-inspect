#!/usr/bin/env node

import { program } from "commander";
import { analyse } from "./analyse.js";

program
  .name("elmjs-inspector")
  .description("Analyse your elm.js file size with this tool.")
  .version("1.0.0");

program
  .option(
    "-s, --summary [value]",
    "Display summary. Possible values: module, package, project"
  )
  .argument("<filename>", "The file to analyze")
  .action((filename, opts) => {
    analyse(filename, opts);
  });

program.parse();
