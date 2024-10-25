// cli.js
import { program } from "commander"
import generateComponent from "./generation/componentGenerator.js"
import { helpTexts } from "./helpers/messageUtils.js"

program
  .name("next-cli")
  .description("CLI tool for generating Next.js components")
  .version("1.0.0")
  .addHelpText("after", helpTexts.main)

program
  .command("generate")
  .alias("g")
  .description("Generate Next.js components")
  .argument("<type>", "type of component to generate")
  .argument("<name>", "name of the component")
  .option("-ts, --typescript", "generate TypeScript files")
  .option("--css", "generate CSS files")
  .option("--client", "generate client-side component")
  .option("--server", "generate server-side component")
  .addHelpText("after", helpTexts.generate)
  .action((type, name, options) => {
    const validTypes = ["page", "layout", "template", "component"]
    if (!validTypes.includes(type)) {
      console.error("\x1b[31mError:\x1b[0m Invalid component type:", type)
      process.exit(1)
    }
    generateComponent(type, name, options)
  })

program.parse(process.argv)
