# Supra L1 Astro Documentation
Official documentation for Supra L1 on Astro.

## Quick Start

```bash
# Clone the repo
git clone https://github.com/JatinSupra/Supra-docs-astro.git
cd Supra-docs-astro

# Install dependencies
npm install

# Start dev server
npm run dev

```

## Current Documentation Sections

- **Overview** - Introduction to Supra EVM
- **Build on SupraEVM Beta** - Development guide
- **Network Information** - RPC endpoints and configuration
- **Deploy Your First Contract** - Step-by-step deployment

## Tech Stack to Download Before You Start

- **Framework**: [Astro](https://astro.build) v5
- **Styling**: [Tailwind CSS](https://tailwindcss.com) v4
- **Components**: MDX with custom components
- **Icons**: [Tabler Icons](https://tabler.io/icons)
- **Search**: Pagefind
- **Theme**: [Solstice by Cosmic Themes](https://cosmicthemes.com/themes/solstice/)

## Contribution Guide

- Fork and Clone the Repo.
- Make changes & Test locally with `npm run dev`
- Commit and push to your forked repo.
- Create a Pull Request on the Main Repo on GitHub.

## Table of Contents

- [Project Structure](#project-structure)
- [Adding/Editing Content](#addingediting-content)
- [Managing Tabs & Sidebar](#managing-tabs--sidebar)
- [Changing Theme & Colors](#changing-theme--colors)
- [Changing Icons](#changing-icons)
- [Example Edit](#example)
- [Submitting Changes](#submitting-changes)

## Project Structure

```
Main repo/
├── src/
│   ├── docs/
│   │   ├── components/          # Reusable UI components
│   │   ├── config/              # Site configuration
│   │   │   └── en/              # English config
│   │   │       ├── sidebarNavData.json.ts  # Sidebar/tabs structure
│   │   │       ├── navData.json.ts         # Top navigation
│   │   │       └── siteData.json.ts        # Site metadata
│   │   ├── data/
│   │   │   └── docs/
│   │   │       └── en/          # ALL DOCUMENTATION CONTENT HERE
│   │   │           ├── overview/
│   │   │           ├── build-on-supraev/
│   │   │           ├── network-info/
│   │   │           └── deploy-contract/
│   │   └── layouts/             # Page layouts
│   ├── styles/                  # Theme & colors
│   ├── icons/                   # Icon files
│   └── pages/                   # Page routing
├── public/                      # Static assets (images, etc.)
├── astro.config.mjs            # Astro configuration
└── tailwind.config.js          # Tailwind CSS config
```

---

## Adding/Editing Content

### Editing Existing Pages

All documentation content is in **`.mdx`** files located at:
```
src/docs/data/docs/en/[section-name]/index.mdx
```

**Example: Editing "Overview"**

1. Open `src/docs/data/docs/en/overview/index.mdx`
2. Edit the content (it's Markdown with React components)
3. Save - changes appear instantly!

### Creating a New Page

**Example: Adding "Advanced Topics" section**

#### Step 1: Create the folder and file

```bash
cd src/docs/data/docs/en/
mkdir advanced-topics
cd advanced-topics
touch index.mdx
```

#### Step 2: Add frontmatter and content

```mdx
---
title: Advanced Topics
description: Deep dive into Supra EVM
tab: advanced
sidebar:
  order: 1
  label: Advanced Topics
---

# Advanced Topics

Your content here...

## Section 1

More content...
```

#### Step 3: Add to sidebar configuration

Edit `src/docs/config/en/sidebarNavData.json.ts`:

```typescript
{
  id: "advanced",
  title: "Advanced Topics",
  description: "Deep dive into Supra EVM",
  icon: "tabler/bulb",
  sections: [
    {
      id: "advanced-topics",
      title: "Advanced Topics",
    },
  ],
},
```

**Important Notes:**
- `tab: advanced` in the .mdx file must match `id: "advanced"` in the sidebar config
- Folder name (`advanced-topics`) must match the section `id`
- The URL will be `/docs/advanced-topics`

### Content Components

You can use these special components in your `.mdx` files:

#### Aside (Callout Boxes)

```mdx
<Aside variant="tip">
  Helpful tip for users!
</Aside>

<Aside variant="caution">
  Warning: Be careful here!
</Aside>

<Aside variant="danger">
  Critical information!
</Aside>

<Aside variant="info">
  Additional information.
</Aside>
```

#### Steps

```mdx
<Steps>
1. First step
2. Second step
3. Third step
</Steps>
```

#### Tabs

```mdx
<Tabs>
  <TabsList>
    <TabsTrigger value="js">JavaScript</TabsTrigger>
    <TabsTrigger value="ts">TypeScript</TabsTrigger>
  </TabsList>
  
  <TabsContent value="js">
    ```javascript
    console.log("JavaScript code");
    ```
  </TabsContent>
  
  <TabsContent value="ts">
    ```typescript
    console.log("TypeScript code");
    ```
  </TabsContent>
</Tabs>
```

#### Code Blocks

````mdx
```solidity
// Your Solidity code
contract Example {
    // ...
}
```
````

---

## Managing Tabs & Sidebar

The sidebar with tabs is controlled by one file:
**`src/docs/config/en/sidebarNavData.json.ts`**

### Current Structure

```typescript
const sidebarNavData: DocsSidebarNavData = {
  tabs: [
    {
      id: "overview",              // Unique ID (matches 'tab' in .mdx)
      title: "Overview",            // Display name
      description: "Intro text",    // Subtitle
      icon: "tabler/file-text",     // Icon name
      sections: [                   // Pages under this tab
        {
          id: "overview",           // Matches folder name
          title: "Overview",        // Display name
        },
      ],
    },
    // ... more tabs
  ],
};
```

### Adding a New Tab

```typescript
{
  id: "tutorials",
  title: "Tutorials",
  description: "Step-by-step guides",
  icon: "tabler/school",
  sections: [
    {
      id: "tutorial-defi",
      title: "Build a DeFi App",
    },
    {
      id: "tutorial-nft",
      title: "Create NFTs",
    },
  ],
},
```

### Adding Multiple Pages to One Tab

```typescript
{
  id: "build",
  title: "Build on SupraEVM Beta",
  description: "Start developing",
  icon: "tabler/stack-2",
  sections: [
    {
      id: "build-on-supraev",
      title: "Getting Started",
    },
    {
      id: "build-advanced",      // New page!
      title: "Advanced Patterns",
    },
    {
      id: "build-examples",      // Another new page!
      title: "Code Examples",
    },
  ],
},
```

Then create:
- `src/docs/data/docs/en/build-advanced/index.mdx`
- `src/docs/data/docs/en/build-examples/index.mdx`

Both with `tab: build` in their frontmatter.

---

## Changing Theme & Colors

Edit `src/styles/tailwind-theme.css`:

```css
@theme {
  /* Primary Colors */
  --color-primary: #FF0080;        /* Supra Pink */
  --color-primary-hover: #E0006B;
  
  /* Background Colors */
  --color-base-950: #0A0A0F;      /* Dark background */
  --color-base-900: #13131A;
  --color-base-800: #1F1F29;
  
  /* Accent Colors */
  --color-accent: #8B5CF6;        /* Purple accent */
  
  /* Success/Info/Warning */
  --color-success: #10B981;
  --color-info: #3B82F6;
  --color-warning: #F59E0B;
  --color-error: #EF4444;
}
```

### Changing Background Colors

```css
/* Sidebar background */
--color-base-900: #13131A;

/* Content background */
--color-base-950: #0A0A0F;

/* Card backgrounds */
--color-base-800: #1F1F29;
```

### Changing Button Colors

Edit `src/docs/components/` button components or use Tailwind classes:

```css
/* Primary button */
.btn-primary {
  background: var(--color-primary);
  color: white;
}

/* Secondary button */
.btn-secondary {
  background: var(--color-accent);
}
```

## Changing Icons

### Available Icons

Icons are in `src/icons/tabler/`. Currently available:

```
accessible.svg
alert-triangle.svg
api-app.svg
arrow-up-right.svg
bulb.svg
file-text.svg
flame.svg
info-circle.svg
school.svg
stack-2.svg
... and more
```

### Using Icons in Tabs

In `src/docs/config/en/sidebarNavData.json.ts`:

```typescript
{
  icon: "tabler/stack-2",     // Use existing icon
  icon: "tabler/bulb",        // Or another
  icon: "tabler/school",      // Or another
}
```

### Adding New Icons

1. Download SVG from [Tabler Icons](https://tabler.io/icons)
2. Save to `src/icons/tabler/your-icon.svg`
3. Use as `icon: "tabler/your-icon"`

**Example:**

```bash
# Download an icon SVG
curl -o src/icons/tabler/rocket.svg https://...

# Use in config
icon: "tabler/rocket"
```

---

## Example

### Change Supra Logo

**File:** `public/logo.svg` or `public/images/logo.svg`

Replace the file, keep the same filename.

### Change Font

**File:** `src/styles/tailwind-theme.css`

```css
@theme {
  --font-family: 'Inter', sans-serif;
  --font-mono: 'Fira Code', monospace;
}
```

## Quick Reference Card

| Task | File Location |
|------|---------------|
| Edit content | `src/docs/data/docs/en/[section]/index.mdx` |
| Add new tab | `src/docs/config/en/sidebarNavData.json.ts` |
| Change colors | `src/styles/tailwind-theme.css` |
| Change icons | `src/docs/config/en/sidebarNavData.json.ts` |
| Add icon | `src/icons/tabler/[name].svg` |
| Top navigation | `src/docs/config/en/navData.json.ts` |
| Site metadata | `src/docs/config/en/siteData.json.ts` |

---

## Before You Submit PR

- [ ] Code runs locally without errors
- [ ] All links work
- [ ] No typos in content
- [ ] Follows existing style
- [ ] Branch name is descriptive
- [ ] Commit message is clear
- [ ] PR description is complete