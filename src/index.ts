#!/usr/bin/env node

import { program } from "commander";
import { analyze } from "./analyze.js";

program
  .name("elmjs-inspect")
  .description("Analyze your elm.js file size with this tool.")
  .version("1.1.0");

program
  .option(
    "-s, --summary [value]",
    "Display summary. Possible values: module, package, project"
  )
  .argument("<filename>", "The file to analyze")
  .action((filename, opts) => {
    analyze(filename, opts);
  });

program.parse();
