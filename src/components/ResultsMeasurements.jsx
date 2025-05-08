import React, { useState, useEffect } from 'react';
import './ResultsMeasurements.css';
import characterImg from '../assets/tutorial-img/11.png'; // adjust path as needed

export default function ResultsMeasurements({ onClose }) {
  // sample measurements
  const sampleMeasurements = [
    { label: 'Chest',          value: '86 cm' },
    { label: 'Waist',          value: '72 cm' },
    { label: 'Hip',            value: '90 cm' },
    { label: 'Shoulder Width', value: '42 cm' },
    { label: 'Thigh',          value: '55 cm' },
  ];

  // sample size recommendations
  const sizeRecommendations = [
    { region: 'Asia', label: 'XL' },
    { region: 'US',   label: 'XXL' },
    { region: 'EU',   label: 'L'  },
  ];

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="rm-modal-overlay">
      <div className="rm-modal">
        <button className="rm-btn-close" onClick={onClose}>&times;</button>
        <h2 className="rm-modal__title">Measurement Results</h2>
        <div className="rm-modal__content">
          {/* Measurements List on Left */}
          <div className="rm-measurements" style={{ flex: 2, position: 'relative' }}>
            <ul className="rm-modal__list">
              {sampleMeasurements.map(({ label, value }) => (
                <li key={label} className="rm-modal__item">
                  <span className="rm-label">{label}</span>
                  <span className="rm-value">{value}</span>
                </li>
              ))}
            </ul>
            {/* Character Image at bottom-left */}
            <img
              src={characterImg}
              alt="Character"
              className="rm-character-img"
            />
          </div>

          {/* Recommendations Card on Right */}
          <div
            className="rm-recommendations-card"
            style={{
              flex: 1,
              marginLeft: '1.5rem',
              background: 'rgba(221, 200, 163, 0.2)',
              border: '2px solid var(--rm-border)',
              borderRadius: '0.8rem',
              padding: '1rem',
              textAlign: 'center'
            }}
          >
            <h3 className="rm-recommendations__title" style={{ margin: '0 0 0.5rem' }}>
              Recommended Sizes
            </h3>
            <ul className="rm-recommendations__list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {sizeRecommendations.map(({ region, label }) => (
                <li key={region} className="rm-recommendations__item" style={{ margin: '0.3rem 0' }}>
                  <strong style={{ marginRight: '0.5rem' }}>{region}:</strong>
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="rm-modal__actions">
          <button className="rm-btn" onClick={onClose}>Got it</button>
        </div>
      </div>
    </div>
  );
}
