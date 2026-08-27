# Hermes Mission Control Dashboard

A Vercel-deployed dashboard for tracking Hermes Agent workflows, goals, cron jobs, and system state.

## Architecture

```
Hermes Agent (local) → POST /api/state → Vercel Serverless → Vercel KV → Next.js UI
```

- **Frontend**: Next.js 14 App Router, Tailwind CSS, deployed on Vercel
- **Backend**: Vercel serverless API routes with Vercel KV (Redis) for persistence
- **Data sync**: Hermes Agent pushes state updates via HTTP POST to `/api/state`
- **Auth**: Optional — can be public or gated with simple token auth

## Features

- **Mission Control Overview**: System health, active goals, recent activity
- **Goals Tracking**: Long-running goals with phases, progress, status
- **Agent Runs**: History of agent executions, status, duration
- **Cron Jobs**: Scheduled tasks with next run time, last status
- **Memory Wiki**: Browseable memory entries with tags and search
- **Check-ins**: Morning check-in history and today's priority
- **Skills**: Skill status, versions, improvement history

## Quick Start

```bash
npm install
npm run dev
```

Set environment variables:
```
VERCEL_KV_REST_API_URL=
VERCEL_KV_REST_API_TOKEN=
```

## Deployment

```bash
vercel --prod
```

Or connect the repo to Vercel and deploy automatically.
