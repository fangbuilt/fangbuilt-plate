import { exec } from "child_process"
import { join } from "path"
import { existsSync, mkdirSync, rmSync } from "fs"
import { promisify } from "util"

const repo = 'https://github.com/fangbuilt/fangbuilt-plate'
const projectName = process.argv[2] || 'fangbuilt-project'
const targetDir = join(process.cwd(), projectName)

if (existsSync(targetDir)) {
  console.error(`❌ Directory ${projectName} already exists.`)
  process.exit(1)
}

console.log(`🚀 Creating ${projectName}...`)
mkdirSync(targetDir)

const execPromise = promisify(exec)
await execPromise(`git clone --depth=1 ${repo} ${targetDir}`)
rmSync(join(targetDir, '.git'), { recursive: true, force: true })
// await execPromise(`rm -rf ${join(targetDir, '.git')}`)
await execPromise(`bun install --cwd ${targetDir}`)

console.log(`✅ Done! cd ${projectName} && bun run dev || code .`)
