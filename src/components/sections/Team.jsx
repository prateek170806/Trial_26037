import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  { id: 1, name: "Prateek", role: "Team Lead", color: "var(--color-primary)" },
  { id: 2, name: "Sakshi", role: "AI Engineer", color: "var(--color-accent)" },
  { id: 3, name: "Parikshit", role: "Systems Eng.", color: "var(--color-warning)" },
  { id: 4, name: "Maanas", role: "Simulation", color: "#00e676" },
  { id: 5, name: "Arpit", role: "Hardware Int.", color: "#ff5722" },
  { id: 6, name: "Shresth", role: "UI/UX & Data", color: "#e91e63" }
];

const Team = () => {
  return (
    <section className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBlockEnd: 'var(--space-8)' }}>
          <h2 className="text-h1" style={{ marginBlockEnd: 'var(--space-2)' }}>The Core Team</h2>
          <p className="text-body" style={{ color: 'var(--color-text-muted)' }}>Driving the future of autonomy in unstructured environments.</p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="team-member-card touch-target"
            >
              <div className="team-member-bg" />
              <div className="team-avatar" style={{ background: `linear-gradient(45deg, ${member.color}, var(--color-bg-base))` }}>
                {member.name.charAt(0)}
              </div>
              <div>
                <h3 className="text-h2" style={{ margin: 0, marginBlockEnd: '4px' }}>{member.name}</h3>
                <p className="text-caption" style={{ color: member.color, margin: 0 }}>{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
