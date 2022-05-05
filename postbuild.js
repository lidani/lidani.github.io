const fs = require("fs");
const path = require("path");

fs.copyFileSync(
  path.resolve(process.cwd(), "./dist/spa/index.html"),
  path.resolve(process.cwd(), "./dist/spa/404.html")
);
