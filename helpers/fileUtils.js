// helpers/fileUtils.js
import { existsSync, mkdirSync } from "fs"

export function checkExistingFiles(componentPath, cssPath, hasCss) {
  const errors = []
  if (existsSync(componentPath)) {
    errors.push(
      `\x1b[31mComponent file already exists:\x1b[0m ${componentPath}`
    )
  }
  if (hasCss && existsSync(cssPath)) {
    errors.push(`\x1b[31mCSS file already exists:\x1b[0m ${cssPath}`)
  }
  return errors
}

export function ensureDirectoryExists(directory) {
  if (!existsSync(directory)) {
    mkdirSync(directory, { recursive: true })
  }
}
