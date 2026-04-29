# 🩺 Vaani Healthcare Platform

A modern healthcare management platform built with Next.js 15, Supabase, and Tailwind CSS.

## Features

- 🔐 Secure authentication with bcrypt password hashing
- 🗄️ PostgreSQL database via Supabase
- 🩺 Patient management
- 📅 Appointment scheduling
- 📊 Dashboard analytics
- 🚀 Deploy-ready for Vercel

---

## Quick Start

### 1. Clone & Install

```bash
git clone https://github.com/YOUR_USERNAME/vaani-healthcare-platform
cd vaani-healthcare-platform
pnpm install
```

### 2. Set Up Supabase

1. Go to [supabase.com](https://supabase.com) and create a free project
2. In the SQL Editor, run the contents of `lib/supabase/schema.sql`
3. Go to **Settings → API** and copy your Project URL and anon key

### 3. Configure Environment Variables

```bash
cp .env.example .env.local
```

Edit `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
NEXTAUTH_SECRET=run-openssl-rand-base64-32
```

### 4. Run Locally

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000)

**Demo login:** any email + password `demo1234`

---

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project** → Import your repo
3. Add the environment variables from `.env.local` in Vercel's dashboard
4. Click **Deploy** ✅

---

## API Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/login` | Login with email + password |
| POST | `/api/auth/register` | Register new user |
| GET | `/api/patients` | List all patients |
| POST | `/api/patients` | Create a patient |

---

## Project Structure

```
vaani-healthcare-platform/
├── app/
│   ├── api/
│   │   ├── auth/login/route.ts      # Login endpoint (bcrypt)
│   │   ├── auth/register/route.ts   # Register endpoint
│   │   └── patients/route.ts        # Patient CRUD
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/ui/                   # shadcn/ui components
├── lib/
│   ├── supabase/
│   │   ├── client.ts                # Browser Supabase client
│   │   ├── server.ts                # Server Supabase client
│   │   └── schema.sql               # Database schema
│   ├── vaani-app.tsx                # Main app component
│   └── utils.ts
├── .env.example                     # Environment variable template
└── README.md
```

---

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Database:** Supabase (PostgreSQL)
- **Auth:** bcryptjs for password hashing
- **UI:** shadcn/ui + Tailwind CSS 4
- **Deployment:** Vercel
