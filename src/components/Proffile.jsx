// src/components/Profiles.jsx
import React, { useState } from 'react';
import './Profile.css';
import ProfileDashboard from './ProfileDashboard';

export default function Profiles() {
  const sampleProfiles = [
    {
      name: "Juan Dela Cruz",
      age: 22,
      gender: "Male",
      height: "172 cm",
      weight: "68 kg",
      email: "juancruz@email.com",
      measurementHistory: [
        { date: "2025-05-01", chest: "92 cm", waist: "78 cm", hips: "94 cm" },
        { date: "2025-04-20", chest: "91 cm", waist: "77 cm", hips: "93 cm" },
      ],
    },
    {
      name: "Maria Santos",
      age: 24,
      gender: "Female",
      height: "160 cm",
      weight: "55 kg",
      email: "maria@email.com",
      measurementHistory: [
        { date: "2025-05-02", chest: "88 cm", waist: "70 cm", hips: "90 cm" },
      ],
    },
    // …more
  ];

  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="profiles-tab">
      <h2>All Profiles</h2>
      <div className="profiles-list">
        {sampleProfiles.map((u, idx) => (
          <div
            key={idx}
            className="profile-item"
            onClick={() => setSelectedUser(u)}
          >
            {u.name}
          </div>
        ))}
      </div>

      {selectedUser && (
        <div className="modal-overlay" onClick={() => setSelectedUser(null)}>
          <div 
            className="modal-content" 
            onClick={e => e.stopPropagation()}
          >
            <button 
              className="close-button" 
              onClick={() => setSelectedUser(null)}
            >
              &times;
            </button>
            <ProfileDashboard user={selectedUser} />
          </div>
        </div>
      )}
    </div>
  );
}
