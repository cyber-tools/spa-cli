#!/usr/bin/env node
require("module-alias").addAlias("@", __dirname);
const { program, description } = require("commander");
const json = require("@/package.json");

process.on("uncaughtException", (error) => {
  console.log(error);
  process.exit(0);
});

process.on("unhandledRejection", (error) => {
  console.log(error);
  process.exit(0);
});

program
  .name(json.name)
  .usage("build-spa command")
  .version(json.version);

program
  .command("dev")
  .description("开发模式")
  .action(require("@/actions/development"));

program
  .command("build")
  .description("编译成生产环境")
  .action(require("@/actions/production"));

program.parse(process.argv);








