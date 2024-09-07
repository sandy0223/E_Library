// src/pages/MyLibrary.jsx
import React, { useState, useEffect } from 'react';

const MyLibrary = () => {
  // Sample data for the user's library (can be replaced with fetched data from backend)
  const [libraryItems, setLibraryItems] = useState([]);

  useEffect(() => {
    // Fetch the user's library items from the backend (e.g., books, articles, multimedia)
    // Example API call (replace with your actual API):
    // fetch('/api/my-library')
    //   .then(response => response.json())
    //   .then(data => setLibraryItems(data));
    
    // Sample library items (replace with fetched data)
    setLibraryItems([
      {
        id: 1,
        title: "Introduction to React",
        type: "e-book",
        format: "PDF",
        description: "A comprehensive guide to building modern web apps with React.",
        thumbnail: "path-to-thumbnail-image.jpg",
      },
      {
        id: 2,
        title: "Advanced JavaScript Techniques",
        type: "e-book",
        format: "EPUB",
        description: "Explore advanced concepts and patterns in JavaScript programming.",
        thumbnail: "path-to-thumbnail-image.jpg",
      },
      {
        id: 3,
        title: "AI and Machine Learning Podcast",
        type: "multimedia",
        format: "MP3",
        description: "A podcast discussing the latest trends in AI and machine learning.",
        thumbnail: "path-to-thumbnail-image.jpg",
      },
      {
        id: 4,
        title: "Scientific Research Methods",
        type: "journal",
        format: "PDF",
        description: "A journal on research methods used in scientific inquiry.",
        thumbnail: "path-to-thumbnail-image.jpg",
      }
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">My Library</h1>
      {libraryItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {libraryItems.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-700 mb-4">{item.description}</p>
              <p className="text-gray-500 mb-2">
                <strong>Type:</strong> {item.type}
              </p>
              <p className="text-gray-500 mb-2">
                <strong>Format:</strong> {item.format}
              </p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
                Open {item.format}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-lg text-gray-700">
          Your library is empty. Start adding content to see it here!
        </p>
      )}
    </div>
  );
};

export default MyLibrary;
