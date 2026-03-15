# AryaVerse 📚

A modern, academic task management web application designed for students to organise, track, and complete their academic workload across multiple categories — tutorials, labs, projects, semester coursework, and learning paths.

---

## Table of Contents

1. [Project Overview & Intention](#1-project-overview--intention)
2. [Tech Stack](#2-tech-stack)
3. [Repository Structure](#3-repository-structure)
4. [Architecture & How It Works](#4-architecture--how-it-works)
5. [Features & Functionality](#5-features--functionality)
6. [Pages & Routing](#6-pages--routing)
7. [Component Breakdown](#7-component-breakdown)
8. [Database Schema](#8-database-schema)
9. [Backend & API](#9-backend--api)
10. [Design System](#10-design-system)
11. [Environment Variables](#11-environment-variables)
12. [Getting Started](#12-getting-started)
13. [Available Scripts](#13-available-scripts)
14. [Current Status & Roadmap](#14-current-status--roadmap)

---

## 1. Project Overview & Intention

**AryaVerse** is a student-focused productivity application built to solve a common problem: academic task overload with no single place to manage everything.

### The Intention

Students juggle multiple types of work simultaneously — tutorial submissions, lab assignments, group projects, semester coursework, and self-directed learning. Without a dedicated tool, these tasks get lost across WhatsApp messages, sticky notes, and scattered calendar entries.

AryaVerse provides:
- **One unified view** of all pending academic work
- **Category-specific pages** so students can drill into a single domain (e.g., only Labs)
- **Deadline awareness** — tasks are visually flagged as overdue, due today, or upcoming
- **Progress tracking** — completion percentages per category give a sense of momentum
- **Light/Dark mode** — designed for long study sessions at any hour

### Inspired By
The design is inspired by **Todoist** (for clarity in task management) and **Notion** (for structured workspace aesthetics), bringing their best qualities together in a student-first context.

---

## 2. Tech Stack

### Frontend
| Technology | Version | Purpose |
|---|---|---|
| **React** | 18.3.1 | UI component library |
| **TypeScript** | 5.6.3 | Type-safe JavaScript |
| **Vite** | 5.4.20 | Build tool with HMR |
| **Wouter** | 3.3.5 | Lightweight client-side router |
| **Tailwind CSS** | 3.4.17 | Utility-first styling |
| **shadcn/ui** | — | 50+ accessible Radix UI components |
| **TanStack Query** | 5.60.5 | Server state management & caching |
| **React Hook Form** | 7.55.0 | Form handling |
| **Zod** | 3.24.2 | Schema validation (shared with backend) |
| **Framer Motion** | 11.13.1 | Animations and transitions |
| **Lucide React** | 0.453.0 | Icon library |
| **next-themes** | 0.4.6 | Light/Dark mode management |
| **date-fns** | 3.6.0 | Date formatting and calculations |

### Backend
| Technology | Version | Purpose |
|---|---|---|
| **Express.js** | 4.21.2 | HTTP server framework |
| **Node.js** | 20 | JavaScript runtime |
| **PostgreSQL** | 16 | Relational database |
| **Drizzle ORM** | 0.39.1 | Type-safe database ORM |
| **Neon Serverless** | 0.10.4 | Serverless PostgreSQL hosting |
| **express-session** | 1.18.1 | Session management |
| **Passport.js** | 0.7.0 | Authentication framework (prepared) |
| **ws** | 8.18.0 | WebSocket support |

### Development & Tooling
| Tool | Purpose |
|---|---|
| **esbuild** | Server-side TypeScript bundling |
| **tsx** | TypeScript execution for development |
| **Drizzle Kit** | Database migration management |
| **cross-env** | Cross-platform environment variables |
| **PostCSS / autoprefixer** | CSS processing pipeline |

---

## 3. Repository Structure

```
AryaVerse/
│
├── client/                          # React frontend application
│   ├── index.html                   # HTML entry point
│   └── src/
│       ├── main.tsx                 # React DOM root render
│       ├── App.tsx                  # App shell: routing, layout, global state
│       ├── index.css                # Global CSS variables and theme tokens
│       │
│       ├── pages/                   # Route-level page components
│       │   ├── Dashboard.tsx        # Homepage — all tasks, summary stats
│       │   ├── CategoryPage.tsx     # Reusable category detail view
│       │   └── not-found.tsx        # 404 fallback
│       │
│       ├── components/              # Reusable UI components
│       │   ├── AppSidebar.tsx       # Desktop left navigation sidebar
│       │   ├── MobileNav.tsx        # Mobile fixed bottom navigation bar
│       │   ├── TaskList.tsx         # Renders a list of TaskItems
│       │   ├── TaskItem.tsx         # Single task row (checkbox, title, deadline, actions)
│       │   ├── AddTaskDialog.tsx    # Modal form for creating a new task
│       │   ├── EditTaskDialog.tsx   # Modal form for editing an existing task
│       │   ├── StatCard.tsx         # Gradient stat metric card
│       │   ├── ThemeProvider.tsx    # Context provider for light/dark theme
│       │   ├── ThemeToggle.tsx      # Button to switch theme
│       │   └── ui/                  # shadcn/ui component library (50+ components)
│       │       ├── button.tsx
│       │       ├── card.tsx
│       │       ├── dialog.tsx
│       │       ├── form.tsx
│       │       ├── input.tsx
│       │       ├── select.tsx
│       │       ├── sidebar.tsx
│       │       ├── badge.tsx
│       │       ├── progress.tsx
│       │       └── ... (accordion, alert, avatar, calendar, tabs, etc.)
│       │
│       ├── hooks/                   # Custom React hooks
│       │   ├── use-mobile.tsx       # Detects mobile viewport (< 768px)
│       │   └── use-toast.ts         # Toast notification hook
│       │
│       └── lib/                     # Utilities and configuration
│           ├── queryClient.ts       # TanStack Query client setup
│           └── utils.ts             # Helper functions (cn, etc.)
│
├── server/                          # Express backend
│   ├── index.ts                     # App bootstrap, middleware setup, server start
│   ├── routes.ts                    # API route registration (placeholder)
│   ├── storage.ts                   # Storage interface + in-memory implementation
│   └── vite.ts                      # Vite dev server / static file middleware
│
├── shared/                          # Code shared between client and server
│   └── schema.ts                    # Drizzle DB schema + Zod validation types
│
├── migrations/                      # Auto-generated Drizzle ORM migrations
│
├── design_guidelines.md             # Detailed UI/UX design specification
├── components.json                  # shadcn/ui CLI configuration
├── drizzle.config.ts                # Drizzle ORM configuration
├── tailwind.config.ts               # Tailwind CSS theme configuration
├── tsconfig.json                    # TypeScript compiler options
├── vite.config.ts                   # Vite bundler configuration
├── postcss.config.js                # PostCSS configuration
├── .replit                          # Replit hosting configuration
└── package.json                     # Dependencies and npm scripts
```

---

## 4. Architecture & How It Works

AryaVerse follows a **full-stack TypeScript monorepo** architecture where the client, server, and shared code all live in one repository with a clear separation of concerns.

### Request Flow

```
Browser
  │
  ├─► [React SPA - Vite/Wouter]
  │       │  client-side routing (no page reloads)
  │       │  component state (currently mock data in App.tsx)
  │       │
  │       └─► [TanStack Query] ──► HTTP /api/* ──► [Express Server]
  │                                                      │
  │                                                 [routes.ts]
  │                                                      │
  │                                                 [storage.ts]
  │                                                      │
  │                                     ┌──── MemStorage (current)
  │                                     └──── PostgreSQL via Drizzle (prepared)
  │
  └─► [Express Static Middleware] → serves dist/public/ in production
```

### Development vs Production

**Development (`npm run dev`)**
- `tsx` runs `server/index.ts` directly
- Vite middleware integrates into Express for Hot Module Replacement (HMR)
- React updates instantly without page reloads
- Server runs on port `5000`

**Production (`npm run build && npm run start`)**
- `vite build` compiles React to `dist/public/`
- `esbuild` bundles the Express server to `dist/index.js`
- A single Node process serves both the API and static React files

### Shared Schema Pattern

The `shared/schema.ts` file is imported by **both** the client and the server. This ensures:
- The database shape (Drizzle schema) is the single source of truth
- Zod validation schemas are identical on both ends — no duplicate type definitions
- TypeScript types (`Task`, `InsertTask`) are consistent across the entire stack

---

## 5. Features & Functionality

### Core Features

| Feature | Description |
|---|---|
| **Unified Dashboard** | View all tasks from every category, sorted by deadline ascending |
| **Category Pages** | Dedicated views for Tutorials, Labs, Projects, Current Semester, Learning Paths |
| **Create Tasks** | Add tasks with title, description, category, and deadline via a modal dialog |
| **Edit Tasks** | Update any field of an existing task inline via modal |
| **Delete Tasks** | Remove tasks permanently |
| **Toggle Completion** | Mark tasks as done/undone via checkbox with visual line-through |
| **Deadline Badges** | Smart date formatting: "Today", "Tomorrow", or formatted date |
| **Overdue Indicators** | Amber left border + warning badge on tasks past their deadline |
| **Progress Tracking** | Circular and percentage completion stats per category |
| **Statistics Cards** | Total tasks, completed count, overdue count with gradient cards |
| **Light/Dark Mode** | Full theme toggle persisted to `localStorage` |
| **Responsive Design** | Desktop sidebar + mobile bottom navigation auto-switch at 768px |
| **Floating Action Button** | Mobile-optimised FAB for quick task creation |

### Task Data Model

Each task contains:
- **Title** — required, short description of the task
- **Category** — one of `tutorials`, `labs`, `projects`, `semester`, `learning`
- **Deadline** — timestamp, used for sorting and overdue detection
- **Completed** — boolean, default `false`
- **Description** — optional, additional notes

---

## 6. Pages & Routing

Routing is handled client-side by **Wouter** (a 1.5KB alternative to React Router).

| Route | Component | Purpose |
|---|---|---|
| `/` | `Dashboard.tsx` | Home — all tasks sorted by deadline with aggregate stats |
| `/tutorials` | `CategoryPage.tsx` | Tutorials category tasks and progress |
| `/labs` | `CategoryPage.tsx` | Lab assignments category |
| `/projects` | `CategoryPage.tsx` | Projects category |
| `/semester` | `CategoryPage.tsx` | Current semester coursework |
| `/learning` | `CategoryPage.tsx` | Self-directed learning paths |

**`CategoryPage.tsx`** is a single reusable component parameterised by `title`, `icon`, and `category`. It filters the global task list to show only tasks for that category and provides its own stats and add-task interface.

### Navigation

- **Desktop (≥ 768px):** `AppSidebar.tsx` — collapsible left sidebar (`w-64`) with links for all 6 destinations (Dashboard + 5 categories). Active route is highlighted with an indigo background and left border.
- **Mobile (< 768px):** `MobileNav.tsx` — fixed bottom bar with 5 icon links (Dashboard + 4 categories). Uses the `use-mobile` hook to detect viewport size.

---

## 7. Component Breakdown

### Page Components

#### `Dashboard.tsx`
- Displays a welcome header with the current date
- Shows three `StatCard` components: **Total**, **Completed**, **Overdue**
- Renders `TaskList` with all tasks sorted by deadline
- Desktop: shows "Add Task" inline button; Mobile: hidden (FAB used instead)

#### `CategoryPage.tsx`
- Accepts `title`, `icon`, `category`, `tasks`, and CRUD handler props
- Calculates category-specific stats (total, completed, pending)
- Shows a circular progress indicator (percentage complete)
- Renders a filtered `TaskList` for the given category
- Includes an `AddTaskDialog` pre-set to the current category

### Core Components

#### `TaskItem.tsx`
Renders a single task row:
- Checkbox to toggle completion (line-through on completion)
- Task title + optional description snippet
- Deadline badge with smart formatting
- Amber left border if overdue
- Edit button → opens `EditTaskDialog`
- Delete button → calls `onDeleteTask`

#### `AddTaskDialog.tsx`
Modal dialog with a React Hook Form + Zod-validated form:
- **Title** — text input (required)
- **Description** — textarea (optional)
- **Category** — dropdown select with all 5 categories
- **Deadline** — datetime-local input (required)

Supports two visual variants:
- `'default'` — a standard button trigger
- `'fab'` — a floating action button (fixed bottom-right on mobile)

#### `EditTaskDialog.tsx`
Identical form structure to `AddTaskDialog`, pre-populated with the existing task's values. Calls `onEditTask` with the changed fields on submit.

#### `StatCard.tsx`
Displays a key metric with:
- A Lucide icon
- A large numeric value
- A descriptive label
- Gradient background (configurable: indigo, emerald, amber)

#### `AppSidebar.tsx`
Desktop navigation built on shadcn/ui's `Sidebar` primitives:
- AryaVerse logo/brand at the top
- Navigation links for all 6 routes with icons
- Active route detection via Wouter's `useLocation`

#### `MobileNav.tsx`
Fixed bottom navigation for mobile:
- 5 icon links (Dashboard + 4 main categories)
- Active state with indigo highlight
- Hidden on desktop via `hidden md:hidden` class logic

#### `ThemeProvider.tsx` & `ThemeToggle.tsx`
- Provider wraps the entire app with `next-themes`
- Toggle button cycles between `light` and `dark`
- Theme preference is persisted to `localStorage` automatically

---

## 8. Database Schema

Defined in `shared/schema.ts` using Drizzle ORM:

### `tasks` Table

| Column | Type | Constraints | Description |
|---|---|---|---|
| `id` | `varchar` | PRIMARY KEY, default `gen_random_uuid()` | Unique task identifier (UUID) |
| `title` | `text` | NOT NULL | Task name |
| `category` | `text` | NOT NULL | Category slug (see below) |
| `deadline` | `timestamp` | NOT NULL | Task due date/time |
| `completed` | `boolean` | NOT NULL, default `false` | Completion status |
| `description` | `text` | nullable | Optional additional notes |

### Categories

Categories are defined as a typed constant (not a separate DB table):

| ID | Label |
|---|---|
| `tutorials` | Tutorials |
| `labs` | Labs |
| `projects` | Projects |
| `semester` | Current Sem |
| `learning` | Learning Paths |

### Zod Validation Schemas

`insertTaskSchema` — derived from the Drizzle schema via `drizzle-zod`:
- Omits the auto-generated `id`
- Enforces `title`, `category`, `deadline` as required
- Makes `description` and `completed` optional

```typescript
export const insertTaskSchema = createInsertSchema(tasks).omit({ id: true });
export type InsertTask = z.infer<typeof insertTaskSchema>;
export type Task = typeof tasks.$inferSelect;
```

---

## 9. Backend & API

### Server Setup (`server/index.ts`)

The Express server:
1. Sets up JSON body parsing and request logging middleware
2. Registers API routes via `registerRoutes()` (see below)
3. In development: attaches Vite middleware for HMR
4. In production: serves the compiled React SPA from `dist/public/`
5. Listens on `PORT` (default: `5000`)

### Storage Layer (`server/storage.ts`)

A clean interface-based storage pattern:

```typescript
interface IStorage {
  getTasks(): Promise<Task[]>;
  getTask(id: string): Promise<Task | undefined>;
  createTask(task: InsertTask): Promise<Task>;
  updateTask(id: string, task: Partial<InsertTask>): Promise<Task | undefined>;
  deleteTask(id: string): Promise<boolean>;
}
```

**Current Implementation:** `MemStorage` — an in-memory `Map`-based store using `randomUUID()` for ID generation. Data is lost on server restart. This is intentional for demo/development purposes.

**Planned Implementation:** A `DbStorage` class using Drizzle ORM queries against the PostgreSQL database (the schema is already defined and ready).

### API Routes (`server/routes.ts`)

> ⚠️ **Status: Not yet implemented.** The route file currently contains only a placeholder comment and returns the HTTP server directly.

**Planned REST API:**

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/tasks` | Fetch all tasks |
| `GET` | `/api/tasks/:id` | Fetch a single task |
| `POST` | `/api/tasks` | Create a new task |
| `PUT` | `/api/tasks/:id` | Update an existing task |
| `DELETE` | `/api/tasks/:id` | Delete a task |

All routes will be prefixed with `/api` and validated with Zod before reaching the storage layer.

### Authentication (Prepared, Not Implemented)

The following packages are installed but not yet wired up:
- `passport` + `passport-local` — local username/password auth strategy
- `express-session` + `connect-pg-simple` — server-side session with PostgreSQL persistence
- `memorystore` — in-memory session fallback for development

---

## 10. Design System

AryaVerse uses a custom design system built on top of Tailwind CSS, documented fully in [`design_guidelines.md`](./design_guidelines.md).

### Colour Palette

| Role | Light Mode | Dark Mode | Usage |
|---|---|---|---|
| **Primary** | Indigo `#6366F1` | Indigo `#6366F1` | Buttons, active nav, focus rings |
| **Secondary** | Purple `#8B5CF6` | Purple `#8B5CF6` | Accents, highlights |
| **Success** | Emerald `#10B981` | Emerald `#10B981` | Completed task indicators |
| **Warning** | Amber `#F59E0B` | Amber `#F59E0B` | Overdue task borders and badges |
| **Background** | Slate `#F8FAFC` | Dark Slate `#0F172A` | Page background |
| **Surface** | White `#FFFFFF` | Dark Blue `#1E293B` | Cards, modals |
| **Text Primary** | Dark Slate `#1E293B` | Near-white `#F8FAFC` | Main content text |

### Typography

- **Font:** `Inter`, `system-ui`, `-apple-system`, `sans-serif`
  > Inter is loaded from **Google Fonts** via `<link>` tags in `client/index.html` (weights 400, 500, 600, 700 with `display=swap`). The system font stack serves as a graceful fallback if the Google Fonts request fails or in offline environments.
- **Display (page titles):** `text-4xl` (36px) / `font-bold`
- **Heading 1 (sections):** `text-2xl` (24px) / `font-semibold`
- **Heading 2 (cards):** `text-xl` (20px) / `font-semibold`
- **Body:** `text-base` (16px) / `font-normal`
- **Small / Labels:** `text-sm` (14px) / `font-medium`
- **Captions:** `text-xs` (12px) / `font-normal`

### Responsive Breakpoints

| Viewport | Behaviour |
|---|---|
| **< 768px (Mobile)** | Bottom nav visible, sidebar hidden, single-column layouts, FAB for add task |
| **≥ 768px (Desktop)** | Left sidebar visible, bottom nav hidden, multi-column grids, inline add button |

### Animations

- **Checkbox toggle:** Scale pulse (1 → 1.1 → 1) over 200ms
- **Card hover:** `translateY(-2px)` + shadow transition
- **Task completion:** Fade-out with slide-left (300ms)
- **Page transitions:** Fade-in with slight slide-up (150ms ease-out)

### Accessibility

- Full keyboard navigation with visible focus rings (2px indigo ring)
- WCAG AA colour contrast compliance (4.5:1 for text)
- Minimum touch targets of 44×44px on mobile
- Semantic HTML throughout (labels, roles, aria attributes via Radix UI)

---

## 11. Environment Variables

| Variable | Required | Description |
|---|---|---|
| `DATABASE_URL` | Yes (for DB) | PostgreSQL connection string (Neon format: `postgresql://user:pass@host/db?sslmode=require`) |
| `NODE_ENV` | Yes | `development` or `production` |
| `PORT` | No | Server port (default: `5000`) |

Create a `.env` file at the project root for **local development**:

```env
DATABASE_URL=postgresql://your_user:your_password@your_host/your_database?sslmode=require
NODE_ENV=development
PORT=5000
```

> **Production note:** In a production deployment, set `NODE_ENV=production`. The `npm run build` + `npm run start` workflow will automatically serve optimised, minified assets.

> **Note:** The application currently uses in-memory storage (`MemStorage`) and will work without `DATABASE_URL`. The database connection is only required when running `npm run db:push` to apply schema migrations.

---

## 12. Getting Started

### Prerequisites

- **Node.js** v20 or later
- **npm** v9 or later
- **PostgreSQL** database (optional for current in-memory mode; required for persistent storage)

### Installation

```bash
# Clone the repository
git clone https://github.com/MoriAryan/AryaVerse.git
cd AryaVerse

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env   # Edit with your values
```

### Run in Development

```bash
npm run dev
```

This starts the Express server (with Vite HMR middleware) on **http://localhost:5000**.
Both the React frontend and the API are served from the same port.

### Database Setup (Optional)

If you want persistent storage, set `DATABASE_URL` in `.env`, then push the schema:

```bash
npm run db:push
```

---

## 13. Available Scripts

| Script | Command | Description |
|---|---|---|
| `npm run dev` | `cross-env NODE_ENV=development tsx server/index.ts` | Start development server with HMR |
| `npm run build` | `vite build && esbuild ...` | Build client + server for production |
| `npm run start` | `node dist/index.js` | Run the production build |
| `npm run check` | `tsc` | TypeScript type-checking (no emit) |
| `npm run db:push` | `drizzle-kit push` | Apply schema changes to the database |

---

## 14. Current Status & Roadmap

### ✅ Completed

- [x] Full responsive React UI (Dashboard + 5 Category pages)
- [x] Component library integration (shadcn/ui + Radix UI)
- [x] Task CRUD operations (client-side, mock state)
- [x] Light/Dark mode with persistence
- [x] Deadline detection and overdue indicators
- [x] Progress tracking per category
- [x] Database schema definition (Drizzle + PostgreSQL)
- [x] Storage interface abstraction (`IStorage`)
- [x] In-memory storage implementation (`MemStorage`)
- [x] Server infrastructure (Express + Vite integration)

### 🚧 In Progress / Planned

- [ ] **REST API routes** — implement CRUD endpoints in `server/routes.ts`
- [ ] **Database integration** — replace `MemStorage` with Drizzle ORM queries
- [ ] **Frontend API integration** — replace mock `useState` in `App.tsx` with TanStack Query API calls
- [ ] **Authentication** — implement Passport.js local strategy with sessions
- [ ] **User accounts** — associate tasks with individual users in the database
- [ ] **Dashboard filters** — "Today / Upcoming / Overdue" section headers
- [ ] **Quick category chips** — filter all-tasks view by category
- [ ] **Empty state illustrations** — friendly visuals when no tasks exist
- [ ] **Loading skeleton screens** — while API data fetches
- [ ] **Error handling** — toast notifications for API failures
- [ ] **Testing** — unit tests for components, integration tests for API

---

## Project Stats

| Metric | Count |
|---|---|
| Frontend pages | 6 |
| Custom components | 12 |
| shadcn/ui components | 50+ |
| Task categories | 5 |
| Database tables | 1 (`tasks`) |
| TypeScript source files | 35+ |
| Total dependencies | 65 |

---

## License

MIT — see `package.json`
