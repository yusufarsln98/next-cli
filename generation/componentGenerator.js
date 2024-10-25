// generation/componentGenerator.js
import { join } from "path"
import { writeFileSync } from "fs"
import {
  ensureDirectoryExists,
  checkExistingFiles,
} from "../helpers/fileUtils.js"
import { formatComponentName, formatDirectoryName } from "../helpers/format.js"
import { createComponentContent } from "./componentTemplates.js"
import { showSuccessMessage } from "../helpers/messageUtils.js"
import { createCSSContent } from "./cssGenerator.js"

/**
 * Generates a component based on the specified type, name, and options.
 *
 * @param {string} type - The type of component to generate. Can be "page", "layout", "template", or "component".
 * @param {string} name - The name of the component to generate.
 * @param {Object} options - Additional options for component generation.
 * @throws {Error} Throws an error if an invalid component type is provided.
 */
export default function generateComponent(type, name, options) {
  const baseDirectory = process.cwd()
  const formattedName = formatComponentName(name)
  const kebabCaseName = formatDirectoryName(formattedName)
  let targetDirectory = ""

  switch (type) {
    case "page":
    case "layout":
    case "template":
      targetDirectory = join(baseDirectory, "generated", kebabCaseName)
      break
    case "component":
      targetDirectory = join(baseDirectory, "generated", "components")
      break
    default:
      throw new Error(`Invalid component type: ${type}`)
  }

  ensureDirectoryExists(targetDirectory)
  createFile(targetDirectory, type, formattedName, options)
}

/**
 * Creates a new file for a component and its associated CSS module if specified.
 *
 * @param {string} directory - The directory where the component will be created.
 * @param {string} type - The type of the component (e.g., 'component', 'page').
 * @param {string} name - The name of the component.
 * @param {Object} options - Additional options for file creation.
 * @param {boolean} options.typescript - Whether to use TypeScript for the component file.
 * @param {boolean} options.css - Whether to create a CSS module for the component.
 */
function createFile(directory, type, name, options) {
  const extension = options.typescript ? "tsx" : "jsx"
  const cssPath = join(directory, `${name}.module.css`)
  const componentPath = join(directory, `${type}.${extension}`)

  const existingFileErrors = checkExistingFiles(
    componentPath,
    cssPath,
    options.css
  )
  if (existingFileErrors.length > 0) {
    console.error("\x1b[31mError:\x1b[0m", existingFileErrors.join("\n"))
    process.exit(1)
  }

  const componentContent = createComponentContent(type, name, options)
  if (options.css) {
    const cssContent = createCSSContent(name)
    writeFileSync(cssPath, cssContent)
    console.log("\x1b[32m✔ Created CSS module:\x1b[0m", cssPath)
  }
  writeFileSync(componentPath, componentContent)
  console.log("\x1b[32m✔ Created component:\x1b[0m", componentPath)
  showSuccessMessage(type, name, options)
}
