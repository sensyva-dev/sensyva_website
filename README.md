# Sensyva AI – Industrial Edge Intelligence

A marketing site and interactive data audit tool for Sensyva AI, built with Vite, React, TypeScript, and Tailwind CSS. It includes:

- Landing content covering the problem space, approach, industries, and case studies.
- A **Case Study Pack** lead form with optional Supabase capture and gated PDF download.
- A **95% Data Gap Audit** calculator that quantifies maintenance and downtime savings per industry.
- Optional integrations for Supabase (lead storage) and Google Analytics.

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

Vite will serve the site at the URL shown in the terminal (defaults to http://localhost:5173).

### Build for Production

```bash
npm run build
```

The optimized output lives in `dist/`. You can preview it locally with:

```bash
npm run preview
```

## Environment Variables

Create a `.env` (or `.env.local`) file in the project root when you want to enable integrations:

```
VITE_SUPABASE_URL="https://<your-project>.supabase.co"
VITE_SUPABASE_ANON_KEY="<public-anon-key>"
VITE_GA_MEASUREMENT_ID="G-XXXXXXXXXX"
```

Without Supabase credentials the forms will still work visually and display fallback messages, but no data is stored.

### Supabase Tables

Create the following tables in Supabase if you want to capture leads directly:

#### `data_gap_leads`

| Column                         | Type    | Notes                                      |
|--------------------------------|---------|--------------------------------------------|
| `id`                           | UUID    | Primary key (default)                      |
| `created_at`                   | timestamptz | Default `now()`                         |
| `name`                         | text    | Required                                   |
| `email`                        | text    | Required                                   |
| `company`                      | text    | Required                                   |
| `phone`                        | text    | Optional                                   |
| `region`                       | text    | Optional                                   |
| `budget_crores`                | numeric | Calculated input                           |
| `downtime_hours`               | numeric | Calculated input                           |
| `loss_per_hour_lakhs`         | numeric | Calculated input                           |
| `maintenance_savings_crores`   | numeric | Calculated value                           |
| `downtime_savings_crores`      | numeric | Calculated value                           |
| `total_savings_crores`         | numeric | Calculated value                           |
| `industry`                     | text    | Selected industry                          |

#### `case_study_requests`

| Column          | Type        | Notes                                 |
|-----------------|-------------|---------------------------------------|
| `id`            | UUID        | Primary key                           |
| `created_at`    | timestamptz | Default `now()`                       |
| `name`          | text        | Required                              |
| `email`         | text        | Required                              |
| `company`       | text        | Required                              |
| `focus_area`    | text        | Dropdown selection                    |
| `notes`         | text        | Optional lead context                 |

Assign Row Level Security policies as needed for your workflows.

## Replace the Case Study PDF

A placeholder lives at `public/resources/sensyva-case-study-pack.pdf`. Swap it for your final gated asset before launch.

## Deploying to GitHub Pages

1. Push the project to a GitHub repository (see commands below).
2. In the repo, go to **Settings → Pages**, choose **GitHub Actions** as the source, and use the suggested Vite workflow.
3. Edit the generated workflow to run `npm run build` (instead of `npm run build --if-present` or similar defaults).
4. Commit the workflow file—GitHub will build the site and publish `dist/` on the `gh-pages` branch automatically.
5. The hosted URL appears back in **Settings → Pages** once the workflow succeeds.

## Pushing the Project to GitHub

```bash
git init
git branch -m main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git add .
git commit -m "Initial Sensyva site import"
git push -u origin main
```

## License

Proprietary — all rights reserved unless explicitly licensed by Sensyva AI.
