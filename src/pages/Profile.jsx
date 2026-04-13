import React from 'react';
import './Profile.css';

function Profile() {
  return (
    <div className="profile-bg">
      <div className="profile-container">
        <div className="profile-header">
          <img className="profile-banner" src="https://static.wikia.nocookie.net/starcraft/images/2/2e/StarCraft_II_Logo.png" alt="Banner" />
          <div className="profile-avatar-section">
            <img className="profile-avatar" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Avatar" />
            <div className="profile-name-status">
              <span className="profile-name">Scarlett</span>
              <span className="profile-status">● Currently Playing</span>
            </div>
          </div>
        </div>
        <div className="profile-info-row">
          <div className="profile-info-box">
            <div className="profile-flag">🇨🇦 Kingston, Canada</div>
            <div className="profile-rank">Country Ranking: <b>#10</b></div>
            <div className="profile-rank">World Ranking: <b>#307</b></div>
            <div className="profile-followers">Followers: <b>1,546</b></div>
          </div>
          <div className="profile-league-box">
            <div className="profile-league-title">Diamond League</div>
            <img className="profile-league-img" src="https://static.wikia.nocookie.net/starcraft/images/7/7e/League_Diamond_SC2_Icon.png" alt="League" />
          </div>
        </div>
        <div className="profile-activity">
          <div className="profile-activity-title">Recent Activity</div>
          <div className="profile-activity-list">
            <div className="profile-activity-item victory">
              <img className="profile-activity-champ" src="https://static.wikia.nocookie.net/leagueoflegends/images/6/6c/Ahri_OriginalSquare.png" alt="Champ" />
              <div className="profile-activity-details">
                <div className="profile-activity-result">Victory</div>
                <div className="profile-activity-stats">12 K / 1 D / 4,971 DMG</div>
                <div className="profile-activity-date">March 15, 2017</div>
              </div>
            </div>
            <div className="profile-activity-item defeat">
              <img className="profile-activity-champ" src="https://static.wikia.nocookie.net/leagueoflegends/images/2/28/Zed_OriginalSquare.png" alt="Champ" />
              <div className="profile-activity-details">
                <div className="profile-activity-result">Defeat</div>
                <div className="profile-activity-stats">22 K / 2 D / 31,272 DMG</div>
                <div className="profile-activity-date">March 11, 2017</div>
              </div>
            </div>
            <div className="profile-activity-item victory">
              <img className="profile-activity-champ" src="https://static.wikia.nocookie.net/leagueoflegends/images/0/02/Soraka_OriginalSquare.png" alt="Champ" />
              <div className="profile-activity-details">
                <div className="profile-activity-result">Victory</div>
                <div className="profile-activity-stats">17 K / 1 D / 50,661 DMG</div>
                <div className="profile-activity-date">March 10, 2017</div>
              </div>
            </div>
          </div>
        </div>
        <button className="profile-follow-btn">Follow</button>
      </div>
    </div>
  );
}

export default Profile;
