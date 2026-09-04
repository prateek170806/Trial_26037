import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import { ShieldAlert, Car, Map, CloudRain, Users, AlertTriangle } from 'lucide-react';

const challenges = [
  { id: 1, title: "Unstructured Traffic", icon: Car, desc: "Absence of lane discipline and predictable traffic flow." },
  { id: 2, title: "Dynamic Obstacles", icon: AlertTriangle, desc: "Stray animals, pedestrians, and erratic maneuvers." },
  { id: 3, title: "Degraded Infrastructure", icon: Map, desc: "Potholes, unmarked speed breakers, and missing signs." },
  { id: 4, title: "Extreme Weather", icon: CloudRain, desc: "Monsoon floods and heavy dust reducing sensor visibility." },
  { id: 5, title: "Dense Urban Crowds", icon: Users, desc: "Navigating through extremely tight spaces in markets." },
  { id: 6, title: "High Collision Risk", icon: ShieldAlert, desc: "Constant need for split-second emergency replanning." }
];

const ProblemStatement = () => {
  return (
    <section className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBlockEnd: 'var(--space-8)' }}>
          <h2 className="text-h1" style={{ marginBlockEnd: 'var(--space-2)' }}>The Indian Road Challenge</h2>
          <p className="text-body" style={{ color: 'var(--color-text-muted)' }}>Why standard autonomous driving models fail in chaotic environments.</p>
        </div>

        {/* Challenge Cards Grid */}
        <div className="grid-3-col" style={{ position: 'relative', zIndex: 'var(--z-content)' }}>
          {challenges.map((challenge, index) => (
            <Card key={challenge.id} delay={index * 0.1}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBlockEnd: 'var(--space-2)' }}>
                <div style={{ padding: 'var(--space-1)', background: 'rgba(255, 171, 0, 0.1)', borderRadius: '8px', color: 'var(--color-warning)' }}>
                  <challenge.icon size={24} aria-hidden="true" />
                </div>
                <h3 className="text-h2" style={{ margin: 0 }}>{challenge.title}</h3>
              </div>
              <p className="text-body" style={{ color: 'var(--color-text-muted)', margin: 0 }}>{challenge.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
