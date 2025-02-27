import fs from "fs";
import path from "path";

export function generateIndex() {
    const srcDir = path.resolve("src");
    const indexFile = path.join(srcDir, "index.ts");

    const files = fs.readdirSync(srcDir)
        .filter(file => file.endsWith(".ts") && file !== "index.ts")
        .map(file => `export * from "./${file.replace(".ts", "")}";`);

    fs.writeFileSync(indexFile, files.join("\n"), "utf8");

    console.log("Generated indexes in src/index.ts");
}


