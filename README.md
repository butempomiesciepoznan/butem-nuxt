# A front part of Butem po mieście project, build on [Nuxt 3](https://nuxt.com/) with:
- [Nuxt UI](https://ui.nuxt.com/),
- [Nuxt Image](https://image.nuxt.com/),
- [Nuxt TailwindCSS](https://tailwindcss.nuxtjs.org/).


## Setup

Install the dependencies:

```bash
# pnpm
pnpm install
```

**_Don't forget to adjust your .env file (use a template from .env.example from this repo and name it accordingly to files used in package.json commands)._**

## Development Server

Start the development server on `http://localhost:3000` (automatically opens a browser):

```bash
# pnpm
pnpm dev -o
```

## Staging

Build the application for stage environment:

```bash
# pnpm
pnpm run stage
```

## Production

Build the application for production:

```bash
# pnpm
pnpm run build
```

Locally preview production build:

```bash
# pnpm
pnpm run preview
```
