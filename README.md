# 📊 Config-Driven Dashboard (React)

## Overview

This project demonstrates a **config-driven, declarative data pipeline** built using **React**.

The table structure, filters, and search behavior are defined via **configuration**, rather than hardcoded UI logic.  
The focus of this project is **clean system design and data flow clarity**, not UI complexity or visual polish.

---

## 🔧 Core Concepts Demonstrated

- Config-driven UI rendering  
- Declarative state management  
- Pure functions for data transformation  
- Composable data pipelines (**filter → search → sort**)  
- Automatic re-rendering via React state (no manual DOM manipulation)

---

## 🧠 Data Flow (Pipeline)

The application follows a clear and predictable data pipeline:

Raw Data -> Filter (dropdown-based conditions) -> Search (text-based, multi-column) -> Sort (column + direction) -> Render Table

Each stage:
- Receives data
- Returns new data
- Has no side effects

---

## 🗂️ Configuration-Driven Design

All table behavior is controlled through a single configuration file: `tableConfig`.

### Configuration Controls:
- Table columns
- Enabled filters
- Searchable fields

### Benefits:
- Easy extension without UI rewrites  
- Zero hardcoded column or filter logic  
- Clear separation of concerns between **data**, **logic**, and **UI**

---

## 🧪 Key Design Decisions

### 1. No Derived Data Stored in State
Filtered and sorted results are **derived during render**, not stored in React state.  
This avoids redundancy and keeps state minimal.

### 2. Pure Helper Functions
Data transformation logic is isolated into pure functions:
- `filterData`
- `sortData`

These functions are:
- Testable
- Reusable
- Independent of React

### 3. Single Source of Truth
The original dataset (`data`) is never mutated.  
All transformations operate on copies.

---

## 🛠️ Tech Stack

- **React** (Vite)
- **JavaScript**
- Functional programming style (pure functions)

---

## 🎯 Why This Project?

This project was built to practice **frontend system thinking**, not just React syntax.

The same pipeline-based reasoning used here applies directly to:
- Backend services
- Data engineering workflows
- AI and ML pipelines

---

## 🚀 Possible Extensions (Future Work)

- Pagination
- Backend-driven configuration
- Persisted filters and search state
- Performance optimization using `useMemo`
- Role-based table views

---

## 📌 Key Takeaway

> This project emphasizes **how data flows through a system**, not just how UI components are written.
