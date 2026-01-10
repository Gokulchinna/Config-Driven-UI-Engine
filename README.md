Project: Config-Driven Dashboard (React)
Overview

This project demonstrates a config-driven, declarative data pipeline built using React.
The table structure, filters, and search behavior are defined via configuration rather than hardcoded UI logic.

The goal of this project is not UI complexity, but clean system design and data flow clarity.

🔧 Core Concepts Demonstrated

Config-driven UI rendering

Declarative state management

Pure functions for data transformation

Composable data pipelines (filter → search → sort)

Automatic re-rendering via React state (no manual DOM manipulation)

🧠 Data Flow (Pipeline)
Raw Data
   ↓
Filter (dropdown-based conditions)
   ↓
Search (text-based, multi-column)
   ↓
Sort (column + direction)
   ↓
Render Table

🗂️ Configuration-Driven Design

All behavior is controlled via tableConfig:

Table columns

Enabled filters

Searchable fields

This allows:

Easy extension

Zero UI rewrites for new columns or filters

Clear separation of concerns

🧪 Key Design Decisions

No derived data stored in state
Filtered and sorted results are derived during render.

Pure helper functions (filterData, sortData)
Logic is isolated, testable, and React-independent.

Single source of truth (data)
Raw data is never mutated.

🛠️ Tech Stack

React (Vite)

JavaScript

Functional programming style (pure functions)

🎯 Why this project?

This project was built to practice frontend system thinking, not just React syntax.
The same pipeline-based reasoning applies to backend services, data engineering, and AI systems.

🚀 Possible Extensions (Future Work)

Pagination

Backend-driven configuration

Persisted filters/search

Performance optimization (useMemo)

Role-based table views