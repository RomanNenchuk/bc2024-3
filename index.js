const { program } = require("commander");
const fs = require("fs");

program
    .requiredOption("-i, --input <path>", "path to data.json")
    .option("-o, --output <path>", "path to output file")
    .option("-d, --display", "display results in console");

program.parse(process.argv);
const options = program.opts();
const input = options.input;
const output = options.output;
const display = options.display;

if (!input) console.error("Please, specify input file");

if (!fs.existsSync(input)) console.error("Cannot find input file");

if (!(output || display)) return;

if (output && display) {
    // ...
}
