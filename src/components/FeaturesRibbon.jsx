import React from 'react';
import { Sparkles, FlaskConical, Leaf, Award } from 'lucide-react';

export default function FeaturesRibbon() {
  const features = [
    {
      title: 'Premium Quality',
      desc: 'Finest natural ingredients',
      icon: <Sparkles size={22} />
    },
    {
      title: 'Chemical Free',
      desc: 'No harmful additives',
      icon: <FlaskConical size={22} />
    },
    {
      title: 'Rich in Nutrients',
      desc: 'Goodness of nature',
      icon: <Leaf size={22} />
    },
    {
      title: 'Trusted Brand',
      desc: 'Pure & safe products',
      icon: <Award size={22} />
    }
  ];

  return (
    <section className="feature-ribbon-section" id="benefits">
      <div className="container">
        <div className="features-grid">
          {features.map((item, idx) => (
            <div key={idx} className="feature-pill-card">
              <div className="feature-circle-icon">{item.icon}</div>
              <h3 className="feature-pill-title">{item.title}</h3>
              <p className="feature-pill-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
