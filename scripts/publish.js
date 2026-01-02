import { execSync } from "node:child_process"
import { copyFileSync, readFileSync, writeFileSync, existsSync } from "node:fs"
import path from "node:path"

const releaseType = process.argv[2] || "patch" // patch | minor | major

// 1️⃣ bump version in ROOT package.json
execSync(`npm version ${releaseType} --no-git-tag-version`, {
  stdio: "inherit",
})

// 2️⃣ read new version from root package.json
const rootPkg = JSON.parse(
  readFileSync(path.resolve("package.json"), "utf-8")
)

// 3️⃣ prepare dist/package.json
const npmPkgPath = path.resolve("dist/package.json")
const npmTemplate = JSON.parse(
  readFileSync(path.resolve("package.npm.json"), "utf-8")
)

npmTemplate.version = rootPkg.version

// pridáme typy do package.json
npmTemplate.types = "./types/index.d.ts"

writeFileSync(
  npmPkgPath,
  JSON.stringify(npmTemplate, null, 2)
)

// 4️⃣ generate TypeScript declaration files using tsconfig.build.json
console.log("🔹 Generating TypeScript types...")
execSync("tsc --project tsconfig.build.json", {
  stdio: "inherit",
})

if (!existsSync("dist/types")) {
  throw new Error("TypeScript declarations not generated!")
}

// 5️⃣ publish
console.log("🔹 Publishing to npm...")
execSync("npm publish --access public", {
  cwd: "dist",
  stdio: "inherit",
})

console.log("✅ Publish complete!")
