# Fangbuilt Boilerplate

> **[Bun](https://bun.sh/) is required to be installed locally in your device**

Recommended IDE: Visual Studio Code <br>
Recommended IDE extensions:
 - [Tailwiind CSS Intellisense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
 - [Biome](https://marketplace.visualstudio.com/items?itemName=biomejs.biome)
 - [HTML CSS Support](https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css)
 - [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
 

This **web front-end boilerplate** provides a minimal setup to get React working with:
 - [Tanstack Router](https://tanstack.com/router/latest)
 - [Tanstack Query](https://tanstack.com/query/latest)
 - [Biome](https://biomejs.dev/) (linter and formatter)
 - [TailwindCSS](https://tailwindcss.com/) v4
 - [Bun](https://bun.sh/) (runtime and package manager)

> Please change your default formatter (e.g. Prettier) to Biome, usually by `ctrl + shift + p: Format Document` in Visual Studio Code`

Execute `bun run dev` to generate the `routeTree.gen.ts` file inside the `/src` directory