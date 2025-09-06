import React, { useState } from "react";
import MediaUpload from "../../shared/component/MediaUpload";

const CreateClubs = () => {
  const [form, setForm] = useState({
    name: "",
    registrationDate: "",
    icon: null,
  });
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleIconChange = (file) => {
    setForm((prev) => ({ ...prev, icon: file }));
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
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Create Club</h2>
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
              <label className="block mb-1 font-medium">Date of Registration</label>
              <input
                type="date"
                name="registrationDate"
                value={form.registrationDate}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
          </div>
          <MediaUpload
            label="Club Icon"
            preview={preview}
            onChange={handleIconChange}
            inputId="iconInput"
            placeholder="No Icon"
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

export default CreateClubs;
