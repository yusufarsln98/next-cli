export const helpTexts = {
  main: `
Usage:
  $ nextcli <command> [options]

Commands:
  generate, g    Generate Next.js components

Options:
  -V, --version    Output the version number
  -h, --help       Display help for command

Examples:
  $ nextcli g page home
  $ nextcli generate component button --typescript
  $ nextcli g layout main --css --server`,
  generate: `
Usage:
  $ nextcli generate <type> <name> [options]
  $ nextcli g <type> <name> [options]

Arguments:
  type    Component type (page, layout, template, component)
  name    Component name (will be formatted to PascalCase)

Options:
  -ts, --typescript   Generate TypeScript files (.tsx)
  --css               Generate CSS module file (.module.css)
  --client            Add 'use client' directive
  --server            Add 'use server' directive
  -h, --help          Display help for command

Examples:
  $ nextcli g page home --ts --client
  $ nextcli generate component button --css`,
}

export function showSuccessMessage(type, name, options) {
  console.log("\n\x1b[36mComponent Details:\x1b[0m")
  console.log("• Type:", type)
  console.log("• Name:", name)
  console.log("• Language:", options.typescript ? "TypeScript" : "JavaScript")
  if (options.client) console.log("• Client-side component")
  if (options.server) console.log("• Server-side component")
  if (options.css) console.log("• CSS module included")
}
