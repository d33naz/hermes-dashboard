'use client';

import styles from './SampleData.module.css';

export function SampleData() {
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
          Demo mode · Not authenticated
        </div>
      </header>

      {/* Alert */}
      <div className={styles.alert}>
        <span className={styles.alertIcon}>⚠</span>
        <span className={styles.alertText}>
          <strong>Demo data.</strong> Connect Google auth (Versel env: GOOGLE_CLIENT_ID + GOOGLE_CLIENT_SECRET) and start the Hermes gateway to see live data.
        </span>
      </div>

      {/* Sections */}
      <div className={styles.sections}>

        {/* Goals */}
        <section className={styles.section}>
          <h2 className={styles.sectionLabel}>Active Goals</h2>
          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.cardHead}>
                <span className={styles.cardTitle}>Lead Gen &amp; Compliance System</span>
                <span className={styles.cardIcon}>🎯</span>
              </div>
              <div className={styles.statusRow}>
                <span className={`${styles.dot} ${styles.dotAmber}`} />
                <span className={styles.statusLabel}><strong>Phase 2 — Shadow Mode</strong></span>
              </div>
              <div className={styles.statusMeta}>DRY_RUN=true · Ready for human-approved flag flips</div>
              <div className={styles.goalPhase}>Stability sprint queued: gaps 5–8 (model safety, rate limits, kill-switch, blocked-path observability)</div>
              <div className={styles.progressTrack}>
                <div className={styles.progressBar} style={{ width: '65%' }} />
              </div>
              <div className={styles.progressLabel}>65%</div>
            </div>

            <div className={styles.card}>
              <div className={styles.cardHead}>
                <span className={styles.cardTitle}>Book: &ldquo;She&rsquo;s Not Crazy, You&rsquo;re Just Not Listening&rdquo;</span>
                <span className={styles.cardIcon}>📖</span>
              </div>
              <div className={styles.statusRow}>
                <span className={`${styles.dot} ${styles.dotGreen}`} />
                <span className={styles.statusLabel}><strong>Structural Review</strong></span>
              </div>
              <div className={styles.statusMeta}>Gap report being prepared · Assets/QR codes pending</div>
              <div className={styles.goalPhase}>Focus: structural soundness, embedded assets, presentation quality</div>
              <div className={styles.progressTrack}>
                <div className={styles.progressBar} style={{ width: '40%' }} />
              </div>
              <div className={styles.progressLabel}>40%</div>
            </div>
          </div>
        </section>

        {/* Cron Jobs */}
        <section className={styles.section}>
          <h2 className={styles.sectionLabel}>Cron Jobs</h2>
          <div className={styles.card}>
            {[
              { name: 'Daily Lead Enrichment — Perth SMBs', schedule: '06:00 UTC daily', next: '2026-08-28T06:00:00Z', status: 'ok' },
              { name: 'liaizon-daily-outreach-bundle', schedule: '06:00 AWST daily', next: 'paused', status: 'error' },
              { name: 'End-of-Day Clean-Up', schedule: '18:00 AWST daily', next: '2026-08-28T18:00:00+08:00', status: 'error' },
              { name: 'Book Idea Validation Spreadsheet', schedule: '09:00 AWST daily', next: 'paused', status: 'paused' },
            ].map((j, i) => (
              <div key={i} className={styles.jobRow}>
                <div>
                  <div className={styles.jobName}>{j.name}</div>
                  <div className={styles.jobSchedule}>
                    {j.schedule} · next: {j.next}
                    {j.status === 'paused' ? ' · <em>paused</em>' : ''}
                  </div>
                </div>
                <span className={`${styles.dot} ${j.status === 'ok' ? styles.dotGreen : j.status === 'error' ? styles.dotRed : styles.dotAmber}`} />
              </div>
            ))}
          </div>
        </section>

        {/* Memory */}
        <section className={styles.section}>
          <h2 className={styles.sectionLabel}>Memory Wiki</h2>
          <div className={styles.card}>
            {[
              { tag: 'project', text: 'LiAIzon GHL locationId: fubLgMiUuFyD5C8wqch3', date: '2026-08' },
              { tag: 'pref', text: 'Brand palette: #1a1a2e, #16213e, #e94560 · dark mode for demos', date: '2026-08' },
              { tag: 'policy', text: 'Review-only/gated GHL imports until suppression checks, contact verification, decision-maker validation complete', date: '2026-08' },
              { tag: 'outreach', text: 'Lead with workflow leakage and ROI, not generic AI automation', date: '2026-08' },
              { tag: 'system', text: 'Shadow mode active · safety sprint gaps 5–8 queued', date: '2026-08' },
            ].map((m, i) => (
              <div key={i} className={styles.memEntry}>
                <span className={styles.memTag}>{m.tag}</span>
                <span className={styles.memText}>{m.text}</span>
                <span className={styles.memDate}>{m.date}</span>
              </div>
            ))}
            <p className={styles.wipe} style={{ marginTop: 10 }}>
              ↓ Stored in supermemory — searchable across sessions
            </p>
          </div>
        </section>

        {/* System */}
        <section className={styles.section}>
          <h2 className={styles.sectionLabel}>System Health</h2>
          <div className={styles.cards}>
            <div className={styles.card}>
              <h3 className={styles.sysTitle}>Platform</h3>
              {[
                { label: 'Hermes Desktop', value: 'Running · Perth', ok: true },
                { label: 'Model', value: 'Solar Pro 4', ok: true },
                { label: 'Gateway', value: 'Not running', ok: false },
                { label: 'Cron Firing', value: 'Deferred', ok: false },
              ].map((s, i) => (
                <div key={i} className={`${styles.sysItem} ${s.ok ? '' : styles.sysOff}`}>
                  <div className={styles.sysLabel}>{s.label}</div>
                  <div className={styles.sysValue}>{s.value}</div>
                </div>
              ))}
            </div>
            <div className={styles.card}>
              <h3 className={styles.sysTitle}>Backend (LiAIzon)</h3>
              {[
                { label: 'HTTP', value: 'Port 3002', ok: true },
                { label: 'WebSocket', value: 'Port 3003', ok: true },
                { label: 'Pipeline', value: '06:00 UTC daily', ok: true },
                { label: 'Mode', value: 'Shadow · DRY_RUN', ok: false },
              ].map((s, i) => (
                <div key={i} className={`${styles.sysItem} ${s.ok ? '' : styles.sysOff}`}>
                  <div className={styles.sysLabel}>{s.label}</div>
                  <div className={styles.sysValue}>{s.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>

      <footer className={styles.footer}>
        Hermy HQ · Mission Control for Hermes Agent · Safe, gated, anywhere-access ·
        <br />
        Not exposing secrets · Risky actions require approval ·
        <a href="https://vercel.com" target="_blank" rel="noopener" className={styles.footerLink}>Deploy on Versel</a>
      </footer>
    </div>
  );
}
