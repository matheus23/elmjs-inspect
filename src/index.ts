#!/usr/bin/env node

import { program } from "commander";
import { analyse } from "./analyse.js";

program
  .name("elmjs-inspector")
  .description("Analyse your elm.js file size with this tool.")
  .version("1.0.0");

program
  .command("analyze")
  .argument("<filename>", "The file to analyze")
  .action((filename) => {
    analyse(filename);
  });

program.parse();
