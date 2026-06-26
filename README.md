# Config-Driven UI Engine

A reusable React rendering engine that generates dashboards from declarative JSON schemas instead of hardcoded UI.

Rather than building a separate dashboard for every business domain, this project demonstrates how a single rendering engine can dynamically construct tables, cards, charts, and filters using configuration.

---

## Why this project?

Most frontend applications duplicate UI across different business domains.

For example:
- Student Management System
- Government Service Portal
- E-commerce Admin Panel
- Hospital Dashboard

Although the data is different, the underlying UI patterns are often identical.

Instead of building a new React page for each domain, this project explores a **Config-Driven UI** approach where the frontend behavior is controlled through JSON schemas.

The goal is to build **software that builds software**, not just another dashboard.

---

# Architecture

```
                    JSON Schema
                         │
                         ▼
               Rendering Engine
                         │
         ┌───────────────┼───────────────┐
         ▼               ▼               ▼
     Component       Data Pipeline     Registry
      Renderer      Filter/Search/Sort
         │
         ▼
    React Components
         │
         ▼
     Generated UI
```

---

# Rendering Flow

```
Schema ➔ Renderer ➔ Component Registry ➔ React Components ➔ Rendered Dashboard
```

The engine never hardcodes business-specific UI.

Instead, it reads a schema and decides:
- what to render
- how to render
- which data to display
- which filters to enable

---

# Core Concepts

## Config-Driven Rendering
UI behavior is defined through configuration instead of imperative React code.

## Declarative Design
Instead of writing:
```jsx
if (type === 'table') {
  return <Table />
}
```
the schema declares:
```json
{
  "type": "table"
}
```
The engine decides what to render.

## Pure Data Pipeline
The application follows a predictable transformation pipeline:
```
Raw Data ➔ Filter ➔ Search ➔ Sort ➔ Pagination ➔ Render
```
Each stage:
- receives data
- returns new data
- has no side effects

## Component Registry
Instead of hardcoding components, the renderer maps schema types to reusable React components.

Example:
- `table` ➔ Table Component
- `card` ➔ Stats Card

New components can be added dynamically to the registry without modifying the rendering engine itself.

---

# Design Principles
- Config over hardcoded UI
- Separation of concerns
- Functional programming
- Pure helper functions
- Reusable rendering pipeline
- Single source of truth

---

# Roadmap

## Version 1 (Current)
- Dynamic table rendering
- Component Registry
- Pure transformation data pipeline (Filter ➔ Search ➔ Sort)
- Multi-domain showcases (Student & Government)

## Version 2
- Statistics Cards
- Dynamic badges and progress indicators
- Charts (Bar / Line / Pie integration)

## Version 3
- Backend Schema API (Server-Driven UI)
- Dynamic widget registration via plugins
- Role-based layouts and layouts authorization

---

# Example Use Cases
The same rendering engine can power:
- Student Analytics Dashboard
- Government Service Portal
- Hospital Management Dashboard
- CRM Systems
- Internal Enterprise Tools
- Admin Panels
- E-commerce Analytics

---

# Project Structure

```
src/
├── engine/              # Reusable rendering library
│   ├── Renderer.jsx     # Dynamic component compiler
│   ├── Registry.js      # Decoupled component registry
│   └── pipeline.js      # Pure transformations (filter/search/sort)
├── components/          # Reusable dumb UI components
│   ├── Table.jsx
│   └── StatsCard.jsx
├── schemas/             # JSON schemas and mock data
│   ├── student.json
│   └── government.json
└── App.jsx              # Demo controller & switcher
```

---

# Running the Project

Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/config-driven-ui-engine.git
```

Install dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```
