'use client';

import { useState } from 'react';
import type { DashboardData } from '@/lib/types';
import styles from './Dashboard.module.css';

type TabId = 'overview' | 'goals' | 'crons' | 'memory' | 'system';

interface Props {
  data: DashboardData;
}

const tabLabels: Record<TabId, string> = {
  overview: 'Overview',
  goals: 'Goals',
  crons: 'Cron Jobs',
  memory: 'Memory Wiki',
  system: 'System',
};

export function Dashboard({ data }: Props) {
  const [tab, setTab] = useState<TabId>('overview');

  const statusDot = (color: string) => {
    const cls = {
      green: styles.dotGreen,
      amber: styles.dotAmber,
      red: styles.dotRed,
    }[color] || styles.dotGreen;
    return <span className={`${styles.dot} ${cls}`} />;
  };

  return (
    <div className={styles.wrapper}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <div className={styles.logoMark}>H</div>
          <div>
            <div className={styles.logoText}>Hermy HQ</div>
            <div className={styles.logoSub}>Mission Control · Austin Howell</div>
          </div>
        </div>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          System online · Perth (AWST)
        </div>
      </header>

      {/* Alert banner */}
      {data.alerts.length > 0 && (
        <div className={styles.alert}>
          <span className={styles.alertIcon}>⚠</span>
          <span className={styles.alertText}>
            <strong>{data.alerts.length} job{data.alerts.length > 1 ? 's' : ''} need attention:</strong>{' '}
            {data.alerts.map((a, i) => (
              <span key={i}>{a}{i < data.alerts.length - 1 ? ' · ' : ''}</span>
            ))}
          </span>
        </div>
      )}

      {/* Tab nav */}
      <nav className={styles.tabNav}>
        {(Object.keys(tabLabels) as TabId[]).map((t) => (
          <button
            key={t}
            className={`${styles.tab} ${tab === t ? styles.tabActive : ''}`}
            onClick={() => setTab(t)}
          >
            {tabLabels[t]}
          </button>
        ))}
      </nav>

      {/* Tab content */}
      <main className={styles.main}>
        {tab === 'overview' && (
          <div className={styles.grid}>
            {/* Goals overview */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Active Goals</h2>
              <div className={styles.grid3}>
                {data.goals.map((g) => (
                  <div key={g.id} className={styles.card}>
                    <div className={styles.cardHead}>
                      <span className={styles.cardTitle}>{g.title}</span>
                      <span className={styles.cardIcon}>{g.icon}</span>
                    </div>
                    <div className={styles.statusRow}>
                      {statusDot(g.statusColor)}
                      <span className={styles.statusLabel}>
                        <strong>{g.phase}</strong>
                      </span>
                    </div>
                    <div className={styles.statusMeta}>{g.meta}</div>
                    <div className={styles.goalPhase}>{g.detail}</div>
                    <div className={styles.progressTrack}>
                      <div
                        className={styles.progressBar}
                        style={{ width: `${g.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Cron jobs */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Cron Jobs</h2>
              <div className={styles.card}>
                {data.cronJobs.map((j, i) => (
                  <div key={i} className={styles.jobRow}>
                    <div>
                      <div className={styles.jobName}>{j.name}</div>
                      <div className={styles.jobSchedule}>
                        {j.schedule} · next: {j.nextRun}
                      </div>
                    </div>
                    {statusDot(j.status === 'ok' ? 'green' : j.status === 'error' ? 'red' : 'amber')}
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {tab === 'goals' && (
          <div className={styles.grid}>
            {data.goals.map((g) => (
              <div key={g.id} className={styles.card}>
                <div className={styles.cardHead}>
                  <span className={styles.cardTitle}>{g.title}</span>
                  <span className={styles.cardIcon}>{g.icon}</span>
                </div>
                <div className={styles.statusRow}>
                  {statusDot(g.statusColor)}
                  <span className={styles.statusLabel}>
                    <strong>{g.phase}</strong>
                  </span>
                </div>
                <div className={styles.statusMeta}>{g.meta}</div>
                <div className={styles.goalPhase}>{g.detail}</div>
                <div className={styles.progressTrack}>
                  <div
                    className={styles.progressBar}
                    style={{ width: `${g.progress}%` }}
                  />
                </div>
                <div className={styles.progressLabel}>{g.progress}%</div>
              </div>
            ))}
          </div>
        )}

        {tab === 'crons' && (
          <div className={styles.grid}>
            <div className={styles.card}>
              <h2 className={styles.sectionTitle}>Scheduled Jobs</h2>
              {data.cronJobs.map((j, i) => (
                <div key={i} className={styles.jobRow}>
                  <div>
                    <div className={styles.jobName}>{j.name}</div>
                    <div className={styles.jobSchedule}>
                      {j.schedule}
                      {j.lastRun ? ` · last: ${j.lastRun}` : ''}
                      {j.status === 'paused' ? ' · <strong>paused</strong>' : ''}
                    </div>
                  </div>
                  <div>
                    {statusDot(j.status === 'ok' ? 'green' : j.status === 'error' ? 'red' : 'amber')}
                    <span className={styles.jobStatus}>
                      {j.status === 'ok' ? 'ok' : j.status === 'error' ? 'error' : 'paused'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === 'memory' && (
          <div className={styles.card}>
            <h2 className={styles.sectionTitle}>Memory Wiki — Recent Entries</h2>
            <p className={styles.wipe}>Searchable continuity · {data.memory.length} entries</p>
            {data.memory.map((m, i) => (
              <div key={i} className={styles.memEntry}>
                <span className={styles.memTag}>{m.tag}</span>
                <span className={styles.memText}>{m.text}</span>
                <span className={styles.memDate}>{m.date}</span>
              </div>
            ))}
            <p className={styles.wipe} style={{ marginTop: 12 }}>
              ↓ Stored in supermemory — search by topic to retrieve
            </p>
          </div>
        )}

        {tab === 'system' && (
          <div className={styles.grid}>
            <div className={styles.card}>
              <h2 className={styles.sectionTitle}>Platform</h2>
              <div className={styles.sysGrid}>
                {data.system.platform.map((s, i) => (
                  <div
                    key={i}
                    className={`${styles.sysItem} ${s.ok ? '' : styles.sysOff}`}
                  >
                    <div className={styles.sysLabel}>{s.label}</div>
                    <div className={styles.sysValue}>{s.value}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.card}>
              <h2 className={styles.sectionTitle}>Backend (LiAIzon)</h2>
              <div className={styles.sysGrid}>
                {data.system.backend.map((s, i) => (
                  <div
                    key={i}
                    className={`${styles.sysItem} ${s.ok ? '' : styles.sysOff}`}
                  >
                    <div className={styles.sysLabel}>{s.label}</div>
                    <div className={styles.sysValue}>{s.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className={styles.footer}>
        Hermy HQ · Mission Control for Hermes Agent · Safe, gated, anywhere-access ·
        Not exposing secrets · Risky actions require approval
      </footer>
    </div>
  );
}
