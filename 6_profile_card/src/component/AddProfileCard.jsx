import { useState } from "react";

export function AddProfileCard({ onAddProfile }) {

  const [isAdding, setIsAdding] = useState(false);

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [city, setCity] = useState("");
  
  const borderStyle = {
    border: isAdding ? "2px solid #333333" : "2px dashed #333333",
  };

  function handleAddProfile() {
    if (!isAdding) {
      setIsAdding(true);
      return;
    }
  }

  function handleCancel() {
    setIsAdding(false);
    return;
  }

  function handleAddClick() {
    const newProfile = { name, role, city };

    if (!name.trim() || !role.trim() || !city.trim()) {
      alert("Fields cannot be empty!");
      return;
    }

    onAddProfile(newProfile);
    setIsAdding(false);

    setName("");
    setRole("");
    setCity("");
  }

  return (
    <>
      {isAdding ? (
        <div style={borderStyle} className="card-inputs add-profile-card">
          <div className="pp-placeholder"></div>
          <div className="input-container">
            <input
              type="text"
              name="username"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              name="username"
              placeholder="Enter Role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
            <input
              type="text"
              name="username"
              placeholder="Enter City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="new-profile-btns">
            <button className="btn secondaryBtn" onClick={handleCancel}>
              Cancel
            </button>
            <button className="btn primaryBtn" onClick={handleAddClick}>
              Add
            </button>
          </div>
        </div>
      ) : (
        <div
          style={borderStyle}
          className="add-profile-card"
          onClick={handleAddProfile}
        >
          <div className="add-icon">+</div>
          <p className="add-text">Add New Profile</p>
        </div>
      )}
    </>
  );
}
