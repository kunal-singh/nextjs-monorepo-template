# Next.js Starter Template

This is a comprehensive starter template for Next.js projects, designed to provide a robust foundation for scalable and maintainable web applications. It leverages modern tools and best practices to streamline development and enhance code quality.

## Features

- **Nx Monorepo**: Organized as a monorepo for better code sharing and project management.
- **Shadcn UI Library**: Integrated as an Nx library for consistent and customizable UI components.
- **Vite Bundler**: Utilizes Vite for fast builds and hot module replacement.
- **Strict ESLint Rules**: Implements opinionated, strict ESLint rules for code quality.
- **Tailwind CSS**: Employs Tailwind for utility-first styling.
- **Prettier**: Uses Prettier in conjunction with ESLint for consistent code formatting.
- **Husky and lint-staged**: Implements Git hooks for pre-commit linting and formatting.
- **pnpm**: Utilizes pnpm as the package manager for efficient dependency management.

## Key Dependencies

| Dependency | Version |
|------------|---------|
| Next.js    | 14.2.3  |
| React      | 18.3.1  |
| TypeScript | ~5.5.2  |
| Nx         | 19.6.4  |
| Vite       | ^5.0.0  |
| ESLint     | ~8.57.0 |
| Tailwind CSS | 3.4.3 |
| pnpm       | >=9.4.0 |
| Node.js    | >=18.17.0 |

## Getting Started

1. **Clone the repository**

   ```bash
   git clone [your-repo-url]
   cd [your-repo-name]
   ```

2. **Install dependencies**

   This project uses pnpm. If you don't have it installed, you can install it globally with npm:

   ```bash
   npm install -g pnpm
   ```

   Then install the project dependencies:

   ```bash
   pnpm install
   ```

3. **Run the development server**

   ```bash
   pnpm nx serve [your-app-name]
   ```

   Replace `[your-app-name]` with the name of your Next.js application within the Nx workspace.

4. **Build for production**

   ```bash
   pnpm nx build [your-app-name]
   ```

## Project Structure



## Development Workflow

- **Linting**: Run `pnpm nx lint [your-app-name]` to lint your code.
- **Formatting**: Run `pnpm nx format:write [your-app-name]` to format your code.
- **Testing**: Run `pnpm nx test [your-app-name]` to run tests.

Git hooks are set up with Husky and lint-staged to run linting and formatting checks before each commit.

## Customization

- **ESLint**: Modify `.eslintrc.json` to adjust linting rules.
- **Prettier**: Adjust `.prettierrc` for formatting preferences.
- **Tailwind**: Customize `tailwind.config.js` for styling adjustments.
- **Shadcn UI**: Modify components in the Shadcn library for UI customization.

## Contributing



## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
