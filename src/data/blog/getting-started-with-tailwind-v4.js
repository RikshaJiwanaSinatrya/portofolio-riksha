export const meta = {
  title: "Getting Started with Tailwind CSS v4",
  date: "2026-05-20",
  tags: ["css", "tailwind", "design"],
  readTime: "4 min",
}

export const content = `
Tailwind CSS v4 brings exciting new features and improved performance. Let's explore what's new and how to get started.

## What's New in v4

### Lightning CSS Engine

Tailwind v4 uses Lightning CSS under the hood, making it significantly faster than previous versions. Build times can improve by up to 10x.

### CSS-First Configuration

No more \`tailwind.config.js\`! Configuration is now done directly in your CSS:

\`\`\`css
@import "tailwindcss";

@theme {
  --color-primary: #00ffff;
  --font-display: 'Press Start 2P', monospace;
}
\`\`\`

### Improved Dark Mode

Dark mode works out of the box with the new \`dark:\` variant — no configuration needed.

## Getting Started

Installation is straightforward:

\`\`\`bash
npm install tailwindcss @tailwindcss/vite
\`\`\`

Add the Vite plugin:

\`\`\`js
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [tailwindcss()],
})
\`\`\`

## Tips for Migration

1. Start by importing \`tailwindcss\` in your main CSS file
2. Move theme values to \`@theme\` blocks
3. Remove your old config file
4. Test thoroughly — most utilities work the same

## Conclusion

Tailwind CSS v4 represents a major leap forward in utility-first CSS. The CSS-first approach makes it more intuitive and the new engine makes it blazing fast.
`
