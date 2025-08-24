1. <b>Setup</b>
```
- npx create-next-app@latest
```
```
    - name?  ./
    - TypeScript?  Y
    - ESLint?  Y
    - Tailwind CSS?  Y
    - src/directory?  N
    - App Router?  Y
    - Turbopack?  Y
    - import alias?  N
```

2. <b>Add ```tailwind.config.ts```</b>
```
import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: { 
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)'
            },
        },
    },
    plugins: [],
};

export default config;
```
3. ```postcss.config.mjs```
```
const config = {
  plugins: {
      tailwindcss: {},
      autoprefixer: {},
  },
};

export default config;

```

4. Inside ```globals.css```
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### Run & Deploy
- Run: 
```
npm run dev
```


#### Info
- public: all static assets
- In nextjs: all components are server component. But u can make it client component by adding ```use client```
- for client-side interaction make it client component. Otherwise keep it as server component.
- for client components: React Strict Mode verify component's purity. So, its appear double times.
- Server-side pre-rendering: HTML for a page is generated before it reaches the browser.