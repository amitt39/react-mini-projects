import { useState } from "react";
import "./App.css";
import user1Image from "./assets/user1.jpg";
import user2Image from "./assets/user2.jpg";
import { AddProfileCard } from "./component/AddProfileCard";
import { ProfileCard } from "./component/ProfileCard";
import defaultAvatar from "/src/assets/default.png";

function App() {
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      name: "Sarah Anderson",
      role: "UI/UX Designer",
      city: "San Francisco, CA",
      image: user1Image,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Frontend Developer",
      city: "Seattle, WA",
      image: user2Image,
    },
  ]);

  function handleAddProfile(newProfile) {
    setProfiles((prev) => [
      ...prev,
      { id: Date.now(), ...newProfile, image: defaultAvatar },
    ]);
  }

  function handleDelte(id) {
    setProfiles((prev) => prev.filter((p) => p.id !== id));
  }

  return (
    <div className="cards-container">
      <AddProfileCard onAddProfile={handleAddProfile} />

      {profiles.map((profile) => {
        return (
          <ProfileCard key={profile.id}>
            <ProfileCard.DeleteProfileCard
              onDelete={() => handleDelte(profile.id)}
            />

            <ProfileCard.Avatar>
              <img src={profile.image} alt="User Avatar" />
            </ProfileCard.Avatar>

            <ProfileCard.Content>
              <h2 className="name">{profile.name}</h2>
              <p className="role">{profile.role}</p>
              <p className="city">{profile.city}</p>
            </ProfileCard.Content>

            <ProfileCard.Actions>
              <button className="btn primaryBtn">Follow</button>
              <button className="btn secondaryBtn">Message</button>
            </ProfileCard.Actions>
          </ProfileCard>
        );
      })}
    </div>
  );
}

export default App;
