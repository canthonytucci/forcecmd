#! /usr/bin/env node
switch (process.argv[2]) {
  case "retrieve":
    require("./retrieve").retrieve();
    break;
  case "deploy":
    require("./deploy").deploy(process.argv.slice(3));
    break;
  default:
    console.error("unknown command: " + process.argv[2]);
}