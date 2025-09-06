import React from "react";

const MediaUpload = ({
  label = "Upload Image",
  preview,
  onChange,
  inputId = "iconInput",
  placeholder = "No Image",
}) => {
  const handleFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    onChange(file || null);
  };

  return (
    <div className="flex flex-col items-center gap-3 w-full md:w-48">
      <label className="block mb-1 font-medium">{label}</label>
      <div className="relative mt-2 group">
        <label htmlFor={inputId} className="cursor-pointer">
          <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden border border-dashed border-blue-400 group-hover:border-blue-600 transition-all">
            {preview ? (
              <img src={preview} alt="Preview" className="object-cover w-full h-full" />
            ) : (
              <span className="text-gray-400 text-sm">{placeholder}</span>
            )}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center rounded-full transition-all pointer-events-none">
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-xs">Click to Upload</span>
            </div>
          </div>
          <input
            id={inputId}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer pointer-events-auto"
            style={{ zIndex: 2 }}
          />
        </label>
      </div>
    </div>
  );
};

export default MediaUpload;
