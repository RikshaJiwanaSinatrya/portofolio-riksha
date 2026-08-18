export const meta = {
  title: "React Performance Tips You Should Know",
  date: "2026-04-10",
  tags: ["react", "performance", "javascript"],
  readTime: "8 min",
}

export const content = `
React is powerful, but without proper optimization, your apps can quickly become sluggish. Here are essential performance tips every React developer should know.

## 1. Use React.memo Wisely

Not every component needs \`React.memo\`. Only wrap components that:

- Render frequently with the same props
- Are computationally expensive to render
- Receive primitive props (not objects/functions)

\`\`\`jsx
const ExpensiveList = React.memo(({ items }) => {
  return items.map(item => <ListItem key={item.id} {...item} />);
});
\`\`\`

## 2. Lazy Loading with Suspense

Split your bundle and load components on demand:

\`\`\`jsx
const Dashboard = lazy(() => import('./Dashboard'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Dashboard />
    </Suspense>
  );
}
\`\`\`

## 3. Virtualization for Long Lists

When rendering hundreds or thousands of items, use windowing:

- **react-window** for simple lists
- **react-virtuoso** for complex layouts

This renders only the visible items, dramatically reducing DOM nodes.

## 4. Avoid Unnecessary Re-renders

- Move expensive calculations to \`useMemo\`
- Stabilize callback references with \`useCallback\`
- Keep state as close to where it's used as possible

## 5. Image Optimization

- Use modern formats (WebP, AVIF)
- Implement lazy loading with \`loading="lazy"\`
- Provide proper \`width\` and \`height\` attributes

## Conclusion

Performance optimization is an ongoing process. Profile first, optimize second, and always measure the impact of your changes.
`
