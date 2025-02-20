import React from 'react';
import '../components/Client.css';

const Client = () => {
  return (
    <div className="client-container">
      {/* Our Clients Section */}
      <div className="text-center section">
        <h2 className="section-title">Our Clients</h2>
        <p className="section-subtitle">We have been working with some Fortune 500+ clients</p>
      </div>

      <div className="client-logos">
        {[
          "59Xp6q-IJZg7Mps5JGQm3rKaPTC0s7SM8mRZPMUR8po",
          "QfQl2b_SnAldLvA_UEznq4IQXsadgHeqKuJG7egzURM",
          "0spw6Zgh40ClKOPzCYjENaeeqhYW9GRUBuk1wckwRbc",
          "XtNFXO6BmJXIqmo2hxlX0K-UQcCmSpCu5wh0DeR1iU4",
          "EF1RPMjbKamSf_mGjsTYhV7ijI9b5owpYKj9HRDUonA",
          "essf72IsooMwPR44h0eXJKwSQLi0cVOlqgiXETPEWEA"
        ].map((imgId, index) => (
          <img
            key={index}
            src={`https://storage.googleapis.com/a1aa/image/${imgId}.jpg`}
            alt={`Client logo ${index + 1}`}
            className="client-logo"
          />
        ))}
      </div>

      {/* Manage your entire community Section */}
      <div className="text-center section">
        <h2 className="section-title">Manage your entire community in a single system</h2>
        <p className="section-subtitle">Who is Nextcent suitable for?</p>
      </div>

      {/* Features Section */}
      <div className="features">
        {[
          {
            img: "Aia6gAlXN033D_rt-DHTsJ1OGgJfnIiY_Pu9v92Xig0",
            title: "Membership Organisations",
            text: "Our membership management software provides full automation of membership renewals and payments."
          },
          {
            img: "vGkJDx18e6qpKnjzyOGWmqa2zMd8kbqKhFrdAOrUXqY",
            title: "National Associations",
            text: "Our membership management software provides full automation of membership renewals and payments."
          },
          {
            img: "5_PeNzfTeZw9o2a6wQVubJuAjBB5HQvby8AoKnbtpyw",
            title: "Clubs And Groups",
            text: "Our membership management software provides full automation of membership renewals and payments."
          }
        ].map((feature, index) => (
          <div key={index} className="feature-card">
            <img
              src={`https://storage.googleapis.com/a1aa/image/${feature.img}.jpg`}
              alt={feature.title}
              className="feature-icon"
            />
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-text">{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Client;
