import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  { name: 'Aditi Sharma', role: 'Perception Lead' },
  { name: 'Rahul Verma', role: 'Planning Engineer' },
  { name: 'Sneha Patel', role: 'Simulation Architect' },
  { name: 'Karan Singh', role: 'ML Engineer' },
  { name: 'Priya Desai', role: 'Systems Integrator' },
  { name: 'Vikram Rao', role: 'UI/Documentation' }
];

const Team = () => {
  return (
    <section className="section" style={{ background: 'var(--color-bg-base)', position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>The NavDrishti Team</h2>
          <p style={{ color: 'var(--color-text-muted)' }}>SIH 2026 - Innovating for Indian Roads</p>
        </div>

        {/* Honeycomb Grid Layout */}
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(124, 77, 255, 0.3)' }}
              className="team-member-card"
            >
              <div className="team-member-bg" />
              
              {/* Avatar Placeholder */}
              <div className="team-avatar">
                {member.name.charAt(0)}
              </div>
              
              <div>
                <h4 style={{ margin: '0 0 0.25rem 0', color: 'white' }}>{member.name}</h4>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{member.role}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <p style={{ fontStyle: 'italic', color: 'var(--color-text-muted)' }}>
            "Building technology that adapts to the environment, not the other way around."
          </p>
          <div style={{ marginTop: '1rem', fontWeight: '600', color: 'var(--color-primary)' }}>Indian Institute of Technology, Bombay</div>
        </div>
      </div>
    </section>
  );
};

export default Team;
