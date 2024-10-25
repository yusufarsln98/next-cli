// generation/cssGenerator.js

/**
 * Creates a CSS content template for the given component name.
 *
 * @param {string} name - The name of the component.
 * @returns {string} The CSS content.
 */
export function createCSSContent(name) {
  return `/* Styles for ${name} component */\n.container {\n  /* Add styles here */\n}\n`
}
