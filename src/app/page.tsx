'use client';

import { useState, useEffect } from 'react';
import { Dashboard } from '@/components/Dashboard';
import type { DashboardData } from '@/lib/types';

export default function Page() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/data.json')
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then(setData)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="rounded-full h-12 w-12 border-4 border-accent border-t-transparent animate-spin" />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="max-w-md text-center">
          <div className="text-red-400 text-4xl mb-4">⚠</div>
          <h1 className="text-xl font-semibold text-foreground mb-2">Dashboard Unavailable</h1>
          <p className="text-muted mb-4">{error ?? 'No data found.'}</p>
          <p className="text-sm text-muted">
            Make sure <code className="bg-card px-2 py-0.5 rounded border border-border">public/data.json</code> exists.
            Hermes overwrites it via cron to keep the dashboard live.
          </p>
        </div>
      </div>
    );
  }

  return <Dashboard data={data} />;
}
