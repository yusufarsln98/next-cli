# Next CLI Tool Installation Guide

This guide will help you clone the Next CLI Tool from GitHub and use it to generate Next.js components quickly and efficiently.

## Prerequisites

Before using the Next CLI Tool, ensure that you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (version 12 or higher)
- npm (Node Package Manager, included with Node.js)

## Installation

1. **Clone the Repository**  
   First, open your terminal and run the following command to clone the Next CLI Tool repository:

   ```sh
   git clone https://github.com/yusufarsln98/nextcli.git
   ```

2. **Change into the Project Directory**  
   Navigate to the cloned project directory:

   ```sh
   cd nextcli
   ```

3. **Install Required Packages**  
   Before using the project, install the necessary npm packages:

   ```sh
   npm install
   ```

4. **Create an NPM Link**  
   To make the CLI tool available globally, run the following command:

   ```sh
   npm link
   ```

## Usage

### Generating Components

You can create a new component using the `generate` command (or its alias `g`). The syntax is as follows:

```sh
nextcli g <type> <name> [options]
```

### Component Types

You can generate different types of Next.js components:

- **component**: A generic component.
- **page**: A Next.js page component.
- **layout**: A layout component.
- **template**: A template component.

### Example Commands

Here are a few examples of how to generate components:

1. **Generate a Generic Component**  
   To create a `button` component with TypeScript and CSS module support:

   ```sh
   nextcli generate component button --typescript --css
   ```

2. **Generate a Page Component**  
   To create a `home` page with TypeScript support:

   ```sh
   nextcli generate page home --typescript
   ```

3. **Generate a Layout Component**  
   To create a `main` layout with CSS module support:

   ```sh
   nextcli generate layout main --css
   ```

## Options

You can use the following options when generating components:

- `--typescript`: Include TypeScript support in the generated component.
- `--css`: Include CSS module support in the generated component.
- `--client`: Include client-side code in the generated component.
- `--server`: Include server-side code in the generated component.

## License

This project is licensed under the MIT License. For more details, please refer to the [LICENSE](LICENSE) file.

## Contributing

Contributions are welcome! If you have suggestions or improvements, please open an issue or submit a pull request on [GitHub](https://github.com/yusufarsln98/nextcli).

## Author

Yusuf Arslan - [GitHub](https://github.com/yusufarsln98)

---

## Using NPM Link on Windows

1. **Open Windows Terminal**  
   Search for "cmd" or "PowerShell" in the Start menu to open a terminal.

2. **Navigate to the Project Directory**  
   Use the following command to navigate to the cloned project:

   ```sh
   cd C:\path\to\nextcli
   ```

3. **Create an NPM Link**  
   While in the project directory, run:

   ```sh
   npm link
   ```

4. **Using the CLI Tool**  
   You can now use the `nextcli` command from any directory:

   ```sh
   nextcli generate component myComponent
   ```

---

## Using NPM Link on Ubuntu

1. **Open the Terminal**  
   Open the terminal from the applications menu or use the shortcut `Ctrl + Alt + T`.

2. **Navigate to the Project Directory**  
   Use the following command to navigate to the cloned project:

   ```sh
   cd /path/to/nextcli
   ```

3. **Create an NPM Link**  
   While in the project directory, run:

   ```sh
   npm link
   ```

4. **Using the CLI Tool**  
   You can now use the `nextcli` command from any directory:

   ```sh
   nextcli --help
   ```

   ```sh
   nextcli generate component myComponent
   ```

---
