export const meta = {
  title: "Building a Vaporwave UI in React",
  date: "2026-03-15",
  tags: ["react", "css", "design"],
  readTime: "5 min",
}

export const content = `
Creating a vaporwave-inspired UI is all about combining retro aesthetics with modern web technologies. In this post, we'll explore how to build stunning visual effects using React and CSS.

## The Aesthetic

Vaporwave draws inspiration from 80s and 90s visual culture — think neon colors, grid patterns, and chrome text effects. The key elements are:

- **Gradient meshes** with pink, cyan, and purple
- **Pixel fonts** like Press Start 2P
- **CRT scanline overlays**
- **Neon glow effects** on interactive elements

## Implementation

### Chrome Text Effect

The chrome/metallic text effect uses CSS \`background-clip: text\`:

\`\`\`css
.chrome-text {
  background: linear-gradient(180deg, #fff 0%, #00ffff 40%, #ff6ec7 60%, #fff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
\`\`\`

### CRT Overlay

A subtle scanline effect can be achieved with a repeating gradient:

\`\`\`css
.crt-overlay::before {
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0, 0, 0, 0.03) 2px,
    rgba(0, 0, 0, 0.03) 4px
  );
}
\`\`\`

## Conclusion

The vaporwave aesthetic is more than just nostalgia — it's a celebration of digital culture and a reminder that beautiful code creates beautiful experiences.
`
