// helpers/format.js
export function formatComponentName(name) {
  return name
    .split(/[-_\s]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("")
    .replace(/(Page|Layout|Template)$/i, "")
}

export function formatDirectoryName(name) {
  return name
    .split(/(?=[A-Z])/)
    .join("-")
    .toLowerCase()
}

export function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1)
}
