# Game based Learning Platform

## Description

Develop a proof-of-concept for a gamified learning platform that combines educational
content with game-like elements to enhance user engagement and learning outcomes.

## Features

- NextJS App Router
- Supabase as BaaS (Backend as a Service)
- Zustand for state management
- React Context API for state management
- Nuqs for query management

## Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Zustand
- Framer Motion
- Radix UI
- Supabase

## Setup

0. First of all, you need to have installed [Node.js](https://nodejs.org/en/) and [pnpm](https://pnpm.io/) and forked the repository.

1. Clone the repository:

   ```
   git clone https://github.com/tu-usuario/gblp.git
   ```

2. Then, install the dependencies:

   ```
   cd gblp
   pnpm install
   ```

3. Setting up the environment variables by creating a `.env.local` file in the root of the project and adding the necessary variables (check `.env.example` if available).

4. Run the development server:

   ```
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── feature
│   │   ├── feature.component.tsx
│   │   └── index.ts
│   └── ui/
├── hooks/
│   ├── index.ts
│   ├── my-hook.ts
│   └── another-hook.ts
├── lib/
│   ├── supabase/
│   │   ├── client.ts
│   │   ├── server.ts
│   │   └── middleware.ts
│   ├── config.ts
│   └── utils.ts
├── stores/
│   └── my.store.ts
└── provider/
    └── theme-provider.tsx
```
