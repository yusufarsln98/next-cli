````markdown
# Next CLI Tool

A CLI tool for generating Next.js components quickly and efficiently.

## Features

- Generate various types of Next.js components: pages, layouts, templates, and generic components.
- Optional TypeScript and CSS module support.
- Easy-to-use command line interface.

## Installation

To install the CLI tool globally, run:

```sh
npm install -g next-cli-tool
```
````

## Usage

### Generate a Component

To generate a new component, use the `generate` command (or its alias `g`):

```sh
next-cli generate <type> <name> [options]
```

#### Example

Generate a `button` component with TypeScript and CSS module support:

```sh
next-cli generate component button --typescript --css
```

### Options

- `--typescript`: Include TypeScript support.
- `--css`: Include CSS module support.

### Component Types

- `component`: A generic component.
- `page`: A Next.js page component.
- `layout`: A layout component.
- `template`: A template component.

## Commands

### `generate` (alias: `g`)

Generate a new component.

```sh
next-cli generate <type> <name> [options]
```

#### Arguments

- `<type>`: The type of component to generate (e.g., `component`, `page`, `layout`, `template`).
- `<name>`: The name of the component.

#### Options

- `--typescript`: Include TypeScript support.
- `--css`: Include CSS module support.

## Examples

Generate a `header` component:

```sh
next-cli generate component header
```

Generate a `home` page with TypeScript support:

```sh
next-cli generate page home --typescript
```

Generate a `main` layout with CSS module support:

```sh
next-cli generate layout main --css
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## Author

Yusuf Arslan - [GitHub](https://github.com/yusufarsln98)

```

This `README.md` file provides an overview of your CLI tool, installation instructions, usage examples, and other relevant information. Make sure to replace placeholders like "Your Name" and "Your GitHub Profile" with your actual details.
```
