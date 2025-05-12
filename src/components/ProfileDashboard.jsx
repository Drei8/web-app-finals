// src/components/ProfileDashboard.jsx
import React from 'react';
import './ProfileDashboard.css';   // you can rename this to ProfileDashboard.css if you like

export default function ProfileDashboard() {
  const user = {
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
  };

  return (
    <div className="dashboard-main">
      <div className="profile-header">
        <h1>{user.name}'s Profile</h1>
        <p>Review and manage your personal information and measurement history.</p>
      </div>

      <div className="profile-info">
        <div className="info-item"><strong>Age:</strong> {user.age}</div>
        <div className="info-item"><strong>Gender:</strong> {user.gender}</div>
        <div className="info-item"><strong>Height:</strong> {user.height}</div>
        <div className="info-item"><strong>Weight:</strong> {user.weight}</div>
        <div className="info-item"><strong>Email:</strong> {user.email}</div>
      </div>

      <div className="measurement-history">
        <h2>Measurement History</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Chest</th>
              <th>Waist</th>
              <th>Hips</th>
            </tr>
          </thead>
          <tbody>
            {user.measurementHistory.map((m, idx) => (
              <tr key={idx}>
                <td>{m.date}</td>
                <td>{m.chest}</td>
                <td>{m.waist}</td>
                <td>{m.hips}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
