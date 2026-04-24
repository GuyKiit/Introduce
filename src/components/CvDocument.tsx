import { forwardRef } from 'react';

/**
 * CvDocument — a hidden, A4-friendly CV layout used exclusively by html2pdf.js.
 * This component is never visible to the user; it is rendered off-screen and
 * captured as a PDF when "Download CV" is clicked.
 *
 * Rules:
 *  - No dark-mode classes (pdf is always light)
 *  - No animations / transitions
 *  - Use only inline-compatible Tailwind or inline styles
 *  - Keep widths within ~780px so html2canvas fits A4 cleanly
 */
const CvDocument = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      ref={ref}
      style={{
        width: '794px',          // A4 @ 96 dpi
        minHeight: '1123px',
        backgroundColor: '#ffffff',
        color: '#111111',
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
        padding: '56px 64px',
        boxSizing: 'border-box',
        lineHeight: 1.6,
      }}
    >
      {/* ── Header ─────────────────────────────────────────────────── */}
      <div style={{ marginBottom: '32px', borderBottom: '2px solid #4f3cdc', paddingBottom: '24px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 700, margin: 0, color: '#111111' }}>
          Kittiwin Intanil
        </h1>
        <p style={{ fontSize: '16px', color: '#4f3cdc', fontWeight: 600, margin: '4px 0 12px' }}>
          Software Developer
        </p>
        <div style={{ display: 'flex', gap: '24px', fontSize: '13px', color: '#555555', flexWrap: 'wrap' }}>
          <span>📧 kittiwin.dev@email.com</span>
          <span>🔗 github.com/kittiwin</span>
          <span>📍 Thailand</span>
        </div>
      </div>

      {/* ── About ──────────────────────────────────────────────────── */}
      <Section title="About">
        <p style={{ fontSize: '14px', color: '#444444', margin: 0 }}>
          A recent Computer Science graduate and Software Developer who loves building things that
          just work — from clean, interactive interfaces to solid back-end logic. Passionate about
          turning rough ideas into real, well-crafted products.
        </p>
      </Section>

      {/* ── Experience ─────────────────────────────────────────────── */}
      <Section title="Experience">
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
            <div>
              <span style={{ fontWeight: 700, fontSize: '15px' }}>Software Developer Intern</span>
              <span style={{ color: '#666666', fontSize: '13px', marginLeft: '8px' }}>
                · บริษัท ไทยรุ่งเรือง เทคโนโลยี จำกัด
              </span>
            </div>
            <span style={{ fontSize: '12px', color: '#888888', whiteSpace: 'nowrap' }}>
              Jun 2025 – Mar 2026
            </span>
          </div>
          <ul style={{ margin: '8px 0 0 0', paddingLeft: '18px', fontSize: '13px', color: '#444444' }}>
            <li style={{ marginBottom: '4px' }}>
              Developed high-performance Single Page Applications (SPA) using React ecosystem,
              managing state with Redux for secure asynchronous state management.
            </li>
            <li>
              Built and maintained clean REST APIs using .NET Core; improved team efficiency and
              solution reliability through consistent coding standards.
            </li>
          </ul>
          <div style={{ display: 'flex', gap: '6px', marginTop: '10px', flexWrap: 'wrap' }}>
            {['React', '.NET Core', 'SQL', 'TypeScript', 'REST API'].map(tag => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Skills ─────────────────────────────────────────────────── */}
      <Section title="Skills">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <SkillGroup label="Frontend" items={['React', 'TypeScript', 'Tailwind CSS', 'Material-UI']} />
          <SkillGroup label="Backend" items={['.NET 8', 'C#', 'REST API', 'Microservices']} />
          <SkillGroup label="Database" items={['MS SQL Server', 'Query Optimization']} />
          <SkillGroup label="Tools & Other" items={['Git', 'Figma', 'AI-Assisted Dev', 'Prompt Engineering', 'OpenClaw']} />
        </div>
      </Section>

      {/* ── Education ──────────────────────────────────────────────── */}
      <Section title="Education">
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: '15px' }}>Bachelor of Science — Computer Science</div>
            <div style={{ fontSize: '13px', color: '#666666', marginTop: '2px' }}>
              Rajamangala University of Technology Isan
            </div>
          </div>
          <span style={{ fontSize: '12px', color: '#888888' }}>2021 – 2025</span>
        </div>
      </Section>

      {/* ── Footer ─────────────────────────────────────────────────── */}
      <div style={{ marginTop: '40px', borderTop: '1px solid #e5e7eb', paddingTop: '16px', textAlign: 'center' }}>
        <p style={{ fontSize: '11px', color: '#aaaaaa', margin: 0 }}>
          Generated from kittiwin.dev — {new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
        </p>
      </div>
    </div>
  );
});

CvDocument.displayName = 'CvDocument';
export default CvDocument;

/* ── Tiny helper sub-components ─────────────────────────────── */

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '28px' }}>
      <h2
        style={{
          fontSize: '13px',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          color: '#4f3cdc',
          marginBottom: '12px',
          paddingBottom: '4px',
          borderBottom: '1px solid #e5e7eb',
        }}
      >
        {title}
      </h2>
      {children}
    </div>
  );
}

function SkillGroup({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <div style={{ fontSize: '12px', fontWeight: 600, color: '#666666', marginBottom: '4px' }}>{label}</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
        {items.map(item => (
          <Tag key={item}>{item}</Tag>
        ))}
      </div>
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        fontSize: '11px',
        padding: '2px 8px',
        borderRadius: '99px',
        border: '1px solid #c4b5fd',
        color: '#4f3cdc',
        backgroundColor: '#f5f3ff',
      }}
    >
      {children}
    </span>
  );
}
