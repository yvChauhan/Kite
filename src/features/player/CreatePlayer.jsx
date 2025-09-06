import React, { useState } from "react";
import MediaUpload from "../../shared/component/MediaUpload";

// Mock data for club names
const clubNames = [
  "Sky Flyers",
  "Wind Riders",
  "Cloud Chasers",
  "Storm Breakers",
  "Breeze Masters",
];


const CreatePlayer = () => {
  const [form, setForm] = useState({
    name: "",
    dob: "",
    club: "",
    profileImage: null,
  });
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleProfileImageChange = (file) => {
    setForm((prev) => ({ ...prev, profileImage: file }));
    if (file) {
      const reader = new window.FileReader();
      reader.onload = (ev) => setPreview(ev.target.result);
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert(JSON.stringify(form, null, 2));
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Create Player</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 space-y-5">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={form.dob}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Club Name</label>
              <select
                name="club"
                value={form.club}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              >
                <option value="" disabled>
                  Select a club
                </option>
                {clubNames.map((club) => (
                  <option key={club} value={club}>
                    {club}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <MediaUpload
            label="Profile Image"
            preview={preview}
            onChange={handleProfileImageChange}
            inputId="profileImageInput"
            placeholder="No Image"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePlayer;
