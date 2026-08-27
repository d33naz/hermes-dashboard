import { Dashboard } from '@/components/Dashboard';
import type { DashboardData } from '@/lib/types';

// Server component — reads data.json at build time and embeds it in initial HTML.
// No fetch flash: the data is already in the served HTML on first load.
// Client still hydrates normally; optional client-side refetch for live updates.

const sampleData: DashboardData = {
  updatedAt: new Date().toISOString(),
  goals: [
    { id: 'lead-gen', title: 'Lead Gen & Compliance System', icon: '🎯', phase: 'Phase 2 — Shadow Mode', status: 'active', statusColor: 'amber', meta: 'DRY_RUN=true · Ready for flag flips', detail: 'Stability sprint queued: gaps 5–8', progress: 65 },
    { id: 'book', title: 'Book: "She\'s Not Crazy, You\'re Just Not Listening"', icon: '📖', phase: 'Structural Review', status: 'active', statusColor: 'green', meta: 'Gap report being prepared', detail: 'Focus: structural soundness, embedded assets, presentation quality', progress: 40 },
  ],
  cronJobs: [
    { name: 'Daily Lead Enrichment — Perth SMBs', schedule: '06:00 UTC daily', nextRun: '2026-08-28T06:00:00Z', status: 'ok', lastRun: '2026-08-27T18:35:57Z', lastStatus: 'ok' },
    { name: 'liaizon-daily-outreach-bundle', schedule: '06:00 AWST daily', nextRun: 'paused', status: 'error', lastRun: '2026-07-26T17:58:08Z', lastStatus: 'error' },
    { name: 'End-of-Day Clean-Up', schedule: '18:00 AWST daily', nextRun: '2026-08-28T18:00:00+08:00', status: 'error', lastRun: '2026-08-27T18:35:58Z', lastStatus: 'error' },
    { name: 'Book Idea Validation Spreadsheet', schedule: '09:00 AWST daily', nextRun: 'paused', status: 'paused', lastRun: '2026-06-26T09:01:27Z', lastStatus: 'ok' },
  ],
  memory: [
    { tag: 'project', tagType: 'project', text: 'LiAIzon GHL locationId: fubLgMiUuFyD5C8wqch3', date: '2026-08' },
    { tag: 'pref', tagType: 'pref', text: 'Brand palette: #1a1a2e, #16213e, #e94560 · dark mode for demos', date: '2026-08' },
    { tag: 'policy', tagType: 'policy', text: 'Review-only/gated GHL imports until suppression checks, contact verification, decision-maker validation complete', date: '2026-08' },
    { tag: 'outreach', tagType: 'outreach', text: 'Lead with workflow leakage and ROI, not generic AI automation', date: '2026-08' },
    { tag: 'system', tagType: 'system', text: 'Shadow mode active · safety sprint gaps 5–8 queued', date: '2026-08' },
  ],
  system: {
    platform: [
      { label: 'Hermes Desktop', value: 'Running · Perth (AWST)', ok: true },
      { label: 'Model', value: 'Solar Pro 4', ok: true },
      { label: 'Gateway', value: 'Not running', ok: false },
      { label: 'Cron Firing', value: 'Deferred (gateway down)', ok: false },
    ],
    backend: [
      { label: 'HTTP', value: 'Port 3002', ok: true },
      { label: 'WebSocket', value: 'Port 3003', ok: true },
      { label: 'Pipeline', value: '06:00 UTC daily', ok: true },
      { label: 'Mode', value: 'Shadow · DRY_RUN', ok: false },
    ],
  },
  alerts: [
    'liaizon-daily-outreach-bundle: paused (last error)',
    'End-of-Day Clean-Up: error on last run',
  ],
};

export default function Page() {
  return <Dashboard data={sampleData} />;
}
