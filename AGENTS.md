cat > AGENTS.md <<'EOF'

# AGENTS.md

## Purpose

This file defines the mandatory engineering, architecture, UI, styling, accessibility, and component standards for this project.

All contributors and coding agents must follow these rules when creating, modifying, or reviewing code.

The project must remain:

- predictable;
- strongly typed;
- mobile-first;
- accessible;
- visually consistent;
- based on reusable components;
- aligned with the design system;
- free from unnecessary duplication.

---

# Tech Stack

The project uses:

- React
- TypeScript
- Tailwind CSS v4
- shadcn/ui architecture
- Radix UI primitives
- class-variance-authority (`cva`)
- `cn()` for class composition
- Lucide React for generic icons

Do not introduce another UI library, styling system, icon library, state library, or architectural pattern unless strictly necessary.

Always prefer existing project dependencies.

---

# Core Principles

## Reuse before creating

Before creating a new:

- component;
- hook;
- service;
- helper;
- utility;
- type;
- primitive;

search the codebase first.

Prefer extending existing implementations instead of creating duplicates.

---

## Keep components focused

Components should primarily describe UI.

Business logic should live in:

- hooks;
- services;
- feature logic;
- schemas;
- utilities.

Avoid components with excessive responsibilities.

---

## Prefer composition

Prefer:

```tsx
<Card>
  <CardHeader>
    <CardTitle>Profile</CardTitle>
  </CardHeader>

  <CardContent>...</CardContent>
</Card>
```
