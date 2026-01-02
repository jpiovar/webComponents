import { execSync } from "node:child_process"
import { copyFileSync, readFileSync, writeFileSync } from "node:fs"
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

writeFileSync(
  npmPkgPath,
  JSON.stringify(npmTemplate, null, 2)
)

// 4️⃣ publish
execSync("npm publish --access public", {
  cwd: "dist",
  stdio: "inherit",
})

