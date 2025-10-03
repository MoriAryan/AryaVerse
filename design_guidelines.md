# AryaVerse Design Guidelines

## Design Approach
**Reference-Based Design** inspired by Todoist's task management clarity and Notion's organized workspace aesthetics. The design emphasizes productivity through clean organization, intuitive categorization, and visual hierarchy that guides users naturally through their academic tasks.

## Core Design Elements

### A. Color Palette

**Primary Colors:**
- Primary: 244 64% 64% (Indigo #6366F1) - Main actions, active states, primary buttons
- Secondary: 258 90% 66% (Purple #8B5CF6) - Accents, secondary actions, category highlights
- Success: 160 84% 39% (Emerald #10B981) - Completed tasks, success states
- Warning: 38 92% 50% (Amber #F59E0B) - Overdue tasks, urgent indicators
- Background: 210 40% 98% (Slate #F8FAFC) - Main background
- Surface: 0 0% 100% (White #FFFFFF) - Cards, modals, elevated surfaces
- Text Primary: 215 25% 27% (Dark Slate #1E293B) - Main text
- Text Secondary: 215 16% 47% - Secondary text, metadata

**Dark Mode (Comprehensive):**
- Background: 222 47% 11% - Main dark background
- Surface: 217 33% 17% - Cards, elevated surfaces
- Text Primary: 210 40% 98% - Main text (inverted)
- Text Secondary: 215 20% 65% - Secondary text
- Borders: 217 33% 23% - Subtle dividers

### B. Typography

**Font Stack:**
- Primary: 'Inter', system-ui, -apple-system, sans-serif
- Display: 'SF Pro Display', 'Inter', sans-serif (for headings)

**Type Scale:**
- Display (Page Titles): text-4xl (36px) / font-bold
- Heading 1 (Section): text-2xl (24px) / font-semibold
- Heading 2 (Cards): text-xl (20px) / font-semibold
- Body: text-base (16px) / font-normal
- Small: text-sm (14px) / font-medium
- Caption: text-xs (12px) / font-normal

### C. Layout System

**Spacing Primitives:** Tailwind units of 2, 4, 6, 8, 12, 16
- Component padding: p-4 to p-6
- Section spacing: py-8 to py-12
- Gap between elements: gap-4 to gap-6
- Card spacing: p-6 for content areas

**Grid System:**
- Dashboard stats: grid-cols-1 md:grid-cols-3 gap-6
- Task lists: Single column with max-w-4xl
- Category cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6

### D. Component Library

**Navigation:**
- Desktop Sidebar: w-64, fixed left, full-height with category links and user profile at bottom
- Mobile Bottom Navbar: Fixed bottom bar with 5 icon links for main categories
- Active state: Indigo background with white text and subtle left border accent

**Task Cards:**
- White/dark surface with 8px rounded corners
- Checkbox (20px) + Task title + Deadline badge + Action buttons (edit/delete)
- Hover: Subtle shadow elevation (shadow-md)
- Completed: Text-decoration line-through with reduced opacity (60%)
- Overdue: Amber left border (border-l-4) with warning badge

**Dashboard Stats Cards:**
- Icon (24px) + Metric value (text-3xl) + Label (text-sm)
- Gradient backgrounds: Indigo-to-purple for total, emerald for completed, amber for overdue
- White text overlay with semi-transparent background blur

**Progress Indicators:**
- Circular progress (80px diameter) showing completion percentage
- Linear progress bars (h-2 rounded-full) for category progress
- Color-coded: Emerald for progress, slate for remaining

**Input Components:**
- Task input: White card with border-2 border-indigo on focus
- Date picker: Integrated calendar dropdown with indigo accents
- Buttons: Primary (indigo filled), Secondary (purple outline), Danger (red outline)

**Add Task Button:**
- Floating action button (FAB): Fixed bottom-right on mobile, inline on desktop
- Indigo background, white plus icon (24px), shadow-lg with hover lift

### E. Animations & Interactions

**Micro-interactions (Subtle):**
- Checkbox toggle: Scale transform (1 → 1.1 → 1) with 200ms duration
- Card hover: Translate-y (-2px) with shadow transition
- Task completion: Fade-out animation (300ms) with slide-left
- Page transitions: Fade-in with slight slide-up (150ms ease-out)

**Critical States:**
- Loading: Skeleton screens with pulse animation
- Empty state: Illustration + encouraging message in slate-400
- Error: Toast notification with red accent sliding from top-right

## Page-Specific Guidelines

### Dashboard (Homepage)
- Hero Section: Gradient header (indigo-to-purple, h-48) with greeting "Welcome back, [User]" and date
- Stats Row: 3-column grid showing Total Tasks, Completed, Overdue with icon + number
- Unified Task List: All tasks merged, sorted by deadline ascending
- Section headers: "Today" / "Upcoming" / "Overdue" with task count badges
- Quick filters: Chip-style buttons for All/Tutorials/Labs/Projects/Semester/Learning

### Category Pages (5 Pages)
- Page header: Category icon + title + progress circle
- Add task button: Top-right primary button with plus icon
- Task checklist: Vertical list with alternating subtle background (slate-50/slate-100)
- Empty state: Centered illustration with "No [category] tasks yet" + CTA button
- Stats summary: Mini cards showing total, completed, pending for this category

### Responsive Behavior
- Sidebar collapses to hamburger menu at md breakpoint (768px)
- Bottom navbar appears only on mobile (<768px)
- Dashboard stats stack vertically on mobile
- Task cards maintain full width, reduce padding on mobile (p-4 → p-3)
- Floating action button moves to fixed bottom-center on mobile

## Images & Visuals

**No Large Hero Images** - This is a utility-focused productivity app. Visual interest comes from:
- Category icons (24-32px) using outlined style (Heroicons recommended)
- Progress visualization through charts and indicators
- Subtle gradient backgrounds for stats cards
- Empty state illustrations (simple line art, 200x200px centered)

**Icon Usage:**
- Navigation icons: 24px, consistent outline style
- Task type indicators: 20px, category-specific colors
- Action buttons: 16px icons within 32px buttons
- Status badges: 12px icons for completed/overdue

## Accessibility & Polish

- Focus states: 2px indigo ring offset by 2px on all interactive elements
- Keyboard navigation: Full support with visible focus indicators
- Color contrast: WCAG AA compliant (4.5:1 for text)
- Dark mode: Complete implementation across all components and inputs
- Error states: Red accent with descriptive messaging
- Touch targets: Minimum 44x44px for mobile interactions