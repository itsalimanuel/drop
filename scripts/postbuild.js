const fs = require("fs");
const path = require("path");

console.log("Running post-build script...");

const distPath = path.resolve(__dirname, "../dist");
const packagePath = path.join(distPath, "packages");
const declarePath = path.join(distPath, "drop.d.ts");

// Create 'packages' folder if not exists
if (!fs.existsSync(packagePath)) {
  fs.mkdirSync(packagePath);
}

// Move built components to 'packages' folder
fs.readdirSync(distPath).forEach((file) => {
  if (file.startsWith("drop.") && file.endsWith(".ts")) {
    fs.renameSync(path.join(distPath, file), path.join(packagePath, file));
  }
});

// Create 'drop.d.ts' file
const components = fs.readdirSync(packagePath).filter((file) => file.startsWith("drop.") && file.endsWith(".ts"));
const exportStatements = components.map((file) => `export * from "./packages/${file.replace(".ts", "")}";`).join("\n");

fs.writeFileSync(declarePath, exportStatements);
