// generation/componentTemplates.js
import { capitalize } from "../helpers/format.js"

/**
 * Generates the content for a React component based on the specified type, name, and options.
 *
 * @param {string} type - The type of the component (e.g., "component", "page").
 * @param {string} name - The name of the component.
 * @param {Object} options - Additional options for generating the component content.
 * @param {boolean} options.typescript - Whether to generate TypeScript types.
 * @param {boolean} options.client - Whether the component is a client-side component.
 * @param {boolean} options.server - Whether the component is a server-side component.
 * @param {boolean} options.css - Whether to include a CSS module import.
 * @returns {string} The generated content for the React component.
 */
export function createComponentContent(type, name, options) {
  const propsType = options.typescript ? `${name}${capitalize(type)}Props` : ""

  let content = ""

  if (options.client) content += "'use client';\n\n"
  else if (options.server) content += "'use server';\n\n"

  content += "import React from 'react';\n"
  content += options.css
    ? `import styles from './${name}.module.css';\n\n`
    : "\n"

  if (options.typescript) {
    if (type === "component" || type === "page") {
      content += `interface ${propsType} {}\n`
    } else {
      content += `interface ${propsType} {\n  children: React.ReactNode;\n}\n`
    }
  }

  const template = getComponentTemplate(
    type,
    name,
    propsType,
    options.css,
    options.typescript
  )

  return content + template
}

/**
 * Generates a React component template based on the specified type and options.
 *
 * @param {string} type - The type of the component. Can be "page", "layout", "template", or "component".
 * @param {string} name - The name of the component.
 * @param {string} [propsType] - The TypeScript type for the component's props. Only used if hasTs is true.
 * @param {boolean} hasCss - Whether the component should include a CSS class.
 * @param {boolean} hasTs - Whether the component should be written in TypeScript.
 * @returns {string} The generated component template as a string.
 */
function getComponentTemplate(type, name, propsType, hasCss, hasTs) {
  const className = hasCss ? ` className={styles.container}` : ""

  let functionSignature = ""
  if (hasTs) {
    if (type === "component" || type === "page") {
      functionSignature = `(${propsType ? `{}` : ""}: ${propsType})`
    } else {
      functionSignature = `({ children }: ${propsType})`
    }
  } else {
    if (type === "component" || type === "page") {
      functionSignature = "()"
    } else {
      functionSignature = "({ children })"
    }
  }

  switch (type) {
    case "page":
      return `
export default function ${name}Page${functionSignature} {
  return (
    <div${className}>
      <h1>${name} Page</h1>
    </div>
  );
}
`
    case "layout":
      return `
export default function ${name}Layout${functionSignature} {
  return (
    <div${className}>
      <header>
        <h1>${name} Layout</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
`
    case "template":
      return `
export default function ${name}Template${functionSignature} {
  return (
    <div${className}>
      <h1>${name} Template</h1>
      {children}
    </div>
  );
}
`
    case "component":
      return `
export default function ${name}Component${functionSignature} {
  return (
    <div${className}>
      <h1>${name} Component</h1>
    </div>
  );
}
`
  }
}
