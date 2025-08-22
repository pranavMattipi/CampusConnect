// frontend/pages/PostEventPage.jsx
import React, { useState } from "react";
import axios from "axios";

const PostEventPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    date: "",
    time: "",
    location: "",
    highlights: "",
    organizerName: "",
    organizerLogo: "",
    price: "",
    castMembers: "",
    college: "", // new
    city: "",    // new
  });

  const [errors, setErrors] = useState({}); // Store validation errors

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error when typing
  };

  // Image file upload
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formDataUpload = new FormData();
    formDataUpload.append("file", file);

    try {
      const res = await axios.post("http://localhost:8000/api/upload", formDataUpload, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setFormData((prev) => ({
        ...prev,
        image: res.data.imageUrl,
      }));
      alert("Image uploaded successfully!");
    } catch (error) {
      console.error("Image upload failed", error);
      alert("Failed to upload image.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let validationErrors = {};

    // Validate title length
    if (formData.title.trim().length < 25) {
      validationErrors.title = "Title must be at least 25 characters long.";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const highlightsArray = formData.highlights
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item);

    const castMembersArray = formData.castMembers
      .split(",")
      .map((item) => {
        const [name, img] = item.split("|").map((v) => v.trim());
        return { name, img };
      })
      .filter((cm) => cm.name && cm.img);

    const eventData = {
      ...formData,
      price: Number(formData.price),
      highlights: highlightsArray,
      castMembers: castMembersArray,
    };

    try {
      const res = await axios.post("http://localhost:8000/api/events", eventData);
      alert("Event created successfully!");
      console.log(res.data);
    } catch (error) {
      console.error("Error creating event:", error.response?.data || error.message);
      alert("Failed to create event.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Post Event</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Title input with validation */}
        <div>
          <input
            type="text"
            name="title"
            placeholder="Title (min 25 characters)"
            value={formData.title}
            onChange={handleChange}
            className={`border p-2 w-full ${errors.title ? "border-red-500" : ""}`}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="border p-2 w-full"
        />

        {/* Image upload */}
        <div>
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            className="border p-2 w-full mb-2"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="border p-2 w-full"
          />
          {formData.image && (
            <img
              src={formData.image}
              alt="Preview"
              className="mt-2 w-32 h-32 object-cover rounded"
            />
          )}
        </div>

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="border p-2 w-full"
        />

        {/* New Fields */}
        <input
          type="text"
          name="college"
          placeholder="College"
          value={formData.college}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <input
          type="text"
          name="highlights"
          placeholder="Highlights (comma separated)"
          value={formData.highlights}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input
          type="text"
          name="organizerName"
          placeholder="Organizer Name"
          value={formData.organizerName}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input
          type="text"
          name="organizerLogo"
          placeholder="Organizer Logo URL"
          value={formData.organizerLogo}
          onChange={handleChange}
          className="border p-2 w-full"
        />

        {/* Price Input */}
        <input
          type="number"
          name="price"
          placeholder="Ticket Price"
          value={formData.price}
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <input
          type="text"
          name="castMembers"
          placeholder="Cast Members (name|img, name|img)"
          value={formData.castMembers}
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Create Event
        </button>
      </form>
    </div>
  );
};

export default PostEventPage;
