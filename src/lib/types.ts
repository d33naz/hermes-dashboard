// Types for the dashboard data snapshot
// This is what Hermes populates via cron into public/data.json
// Types are permissive to match JSON (which has no discriminated unions)

export interface Goal {
  id: string;
  title: string;
  icon: string;
  phase: string;
  status: string;
  statusColor: string;
  meta: string;
  detail: string;
  progress: number;
}

export interface CronJob {
  name: string;
  schedule: string;
  nextRun: string;
  status: string;
  lastRun?: string;
  lastStatus?: string;
}

export interface MemoryEntry {
  tag: string;
  tagType: string;
  text: string;
  date: string;
}

export interface SystemInfo {
  label: string;
  value: string;
  ok: boolean;
}

export interface SystemGroup {
  platform: SystemInfo[];
  backend: SystemInfo[];
}

export interface DashboardData {
  updatedAt: string;
  goals: Goal[];
  cronJobs: CronJob[];
  memory: MemoryEntry[];
  system: SystemGroup;
  alerts: string[];
}
