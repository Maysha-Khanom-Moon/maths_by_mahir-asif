### Setup
1. <b>create project</b>
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

#### Routing
1. route will be ```/directory/...``` and it follows ```page.tsx```
2. Nested routing allowed
3. Dynamic routing by: ```[repo]``` and follows ```page.tsx```. To detect page based on link, use params. And it is async operator.
    ```
    import React from 'react'

    const page = async ({ params }: {params: Promise<{id: string}> }) => {

        const { id } = await params;

        return (
            <div>
            <h3>USER DETAILS PAGE: {id}</h3>
            </div>
        )
    }

    export default page

    ```

#### Layouts
- ```layout.tsx``` works as parent of all the routes
- we can add more layout in the other repos as its parent component
    ```
    import React from 'react'

    const Layout = ({ children }: {children: React.ReactNode}) => {
    return (
        <div>
        <h1 className='text-3xl'>Dashboard Layout</h1>
        { children }
        </div>
    )
    }

    export default Layout
    ```

#### Route Groups
- It organize routes without affecting the URL structure.
- ```(repo)```: it will be not included in url
- so its possible to add different layout for each repo without effecting the url


#### Error Handling
- ```error.js``` in repo. it can be specific too.
- for further details follow nextjs document for error handling
- error is unlike layout, it will just appear the closest one.


#### Loading UIs
- nextjs will show ```loading.tsx``` until the page is ready
- the nearest one will be used.


#### Run & Deploy
- Run: 
```
npm run dev
```


#### Info
- public: all static assets
- In nextjs: file-based routing system.
- In nextjs: all components are server component. But u can make it client component by adding ```use client```
- for client-side interaction make it client component. Otherwise keep it as server component.
- for client components: React Strict Mode verify component's purity. So, its appear double times.
- Server-side pre-rendering: HTML for a page is generated before it reaches the browser.