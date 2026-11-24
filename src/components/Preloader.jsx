import React, { useEffect, useMemo, useState } from 'react';

const TITLE_TEXT = 'SARAJ EXIM';
const SUBTITLE_TEXT = 'Pure Herbs • Indian Spices • Natural Wellness';

function randomStartOffset(minDist = 140, maxDist = 340) {
  const angle = Math.random() * Math.PI * 2;
  const dist = minDist + Math.random() * (maxDist - minDist);
  const x = Math.round(Math.cos(angle) * dist);
  const y = Math.round(Math.sin(angle) * dist);
  const rot = Math.round((Math.random() - 0.5) * 90);
  const delay = (Math.random() * 0.35).toFixed(2);
  return { x, y, rot, delay };
}

export default function Preloader({ onFinish }) {
  const [isFading, setIsFading] = useState(false);

  const logoOffset = useMemo(() => randomStartOffset(180, 320), []);
  const letterOffsets = useMemo(
    () =>
      TITLE_TEXT.split('').map(() => randomStartOffset(130, 360)),
    []
  );
  const subtitleOffset = useMemo(() => randomStartOffset(140, 260), []);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 2000);

    const doneTimer = setTimeout(() => {
      if (onFinish) onFinish();
    }, 2550);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [onFinish]);

  return (
    <div
      className={`saraj-preloader ${isFading ? 'preloader-fade-out' : ''}`}
      role="status"
      aria-label="Loading Saraj Exim"
    >
      <div className="preloader-inner">
        {/* Logo flying in from a random direction */}
        <div
          className="preloader-logo-wrap preloader-fly-item"
          style={{
            '--start-x': `${logoOffset.x}px`,
            '--start-y': `${logoOffset.y}px`,
            '--start-rot': `${logoOffset.rot}deg`,
            '--fly-delay': '0.05s'
          }}
        >
          <img
            src="/images/saraj/saraj_logo.png"
            alt="SARAJ EXIM"
            className="preloader-logo-img"
          />
        </div>

        {/* "SARAJ EXIM" letters flying in from random places */}
        <h1 className="preloader-title serif-heading" aria-label={TITLE_TEXT}>
          {TITLE_TEXT.split('').map((char, idx) => {
            const offset = letterOffsets[idx];
            return (
              <span
                key={idx}
                className={`preloader-letter preloader-fly-item ${char === ' ' ? 'preloader-space' : ''}`}
                style={{
                  '--start-x': `${offset.x}px`,
                  '--start-y': `${offset.y}px`,
                  '--start-rot': `${offset.rot}deg`,
                  '--fly-delay': `${offset.delay}s`
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            );
          })}
        </h1>

        {/* Tagline flying in from a random place */}
        <p
          className="preloader-subtitle preloader-fly-item"
          style={{
            '--start-x': `${subtitleOffset.x}px`,
            '--start-y': `${subtitleOffset.y}px`,
            '--start-rot': `${subtitleOffset.rot}deg`,
            '--fly-delay': '0.28s'
          }}
        >
          {SUBTITLE_TEXT}
        </p>

        {/* Botanical Progress Bar */}
        <div className="preloader-progress-track">
          <div className="preloader-progress-fill" />
        </div>
      </div>
    </div>
  );
}

