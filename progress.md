📌 Project Overview
Vaani is an AI-powered healthcare management platform designed to streamline patient care, appointment scheduling, and medical record management for clinics and hospitals.

Team: Poorna D Shetty
Hackathon: HackTimaTim
Repo: https://github.com/Poornadshetty/HackTimaTim_Vaani


🚀 Deployment History
✅ Deployment 4 — Final Submission (Current)
Date: April 29, 2026
What was completed:

Fixed broken lib/index.ts export (v0 had left it as GENERATING)
Built full working UI: login screen + dashboard with tabs (Dashboard, Patients, Appointments)
Added secure authentication API route (/api/auth/login) with bcrypt password hashing
Added user registration API route (/api/auth/register) with bcrypt
Added patient management API routes (GET /api/patients, POST /api/patients)
Integrated Supabase setup: client, server, and full PostgreSQL schema with Row Level Security
Updated package.json with production dependencies (bcryptjs, @supabase/supabase-js, @supabase/ssr)
Added .env.example for easy environment setup
Fixed .gitignore to exclude .env.local and secrets
Added comprehensive README.md with setup and deploy instructions
Successfully pushed to GitHub and deployed to Vercel

Status: 🟢 Live & Deployed

🔄 Deployment 3
What was done:

Initial Next.js 15 scaffold from v0.dev
Added shadcn/ui component library (40+ components)
Set up Tailwind CSS 4, Radix UI primitives
Added Vercel Analytics
Basic project structure established

Status: ⚠️ Incomplete — lib/index.ts was not generated

🔄 Deployment 2
What was done:

Project scaffolding and dependency setup
Configured TypeScript, PostCSS, next.config
Added fonts (Geist, Geist Mono)

Status: ⚠️ UI not functional

🔄 Deployment 1
What was done:

Repository created
Initial commit with base Next.js structure

Status: ⚠️ Placeholder only

🏗️ Tech Stack
LayerTechnologyFrameworkNext.js 15 (App Router)LanguageTypeScriptUIshadcn/ui + Tailwind CSS 4DatabaseSupabase (PostgreSQL)Authbcryptjs (password hashing)DeploymentVercelAnalyticsVercel Analytics

🔐 Security Features

Passwords hashed with bcrypt (salt rounds: 10) — never stored in plain text
Environment variables kept out of Git via .gitignore
Supabase Row Level Security (RLS) on all tables
API routes validate all inputs before processing


🗄️ Database Schema

profiles — user accounts with roles (admin, doctor, nurse, staff)
patients — patient records with medical history
appointments — scheduling with status tracking (scheduled / completed / cancelled)


📋 API Endpoints
MethodEndpointDescriptionPOST/api/auth/loginLogin with bcrypt verificationPOST/api/auth/registerRegister with bcrypt hashingGET/api/patientsFetch all patientsPOST/api/patientsCreate a new patient

🔮 What's Next (Post-Hackathon)

 Connect Supabase auth for production-grade session management
 Build full patient CRUD UI
 Add appointment booking calendar
 AI-powered symptom checker (voice input — "Vaani" means voice in Sanskrit)
 Role-based access control (doctor vs nurse vs admin views)
 Export patient reports as PDF
 Mobile app with React Native


🏃 How to Run Locally
bashgit clone https://github.com/Poornadshetty/HackTimaTim_Vaani
cd HackTimaTim_Vaani
pnpm install
cp .env.example .env.local
# Fill in your Supabase keys in .env.local
pnpm dev
Open http://localhost:3000 — demo login: any email + password demo1234
