import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const CertificatePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { imageUrl, title } = location.state || {};

  if (!imageUrl) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-neutral1 dark:bg-primary dark:text-neutral1 p-6">
        <h2 className="text-2xl font-bold mb-4">Certificate not found</h2>
        <button
          onClick={() => navigate(-1)}
          className="bg-secondary text-white px-4 py-2 rounded hover:bg-accent transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral1 dark:bg-primary dark:text-neutral1 p-6">
      <h2 className="text-3xl font-bold mb-6">{title} - Certificate</h2>
      <div className="max-w-4xl w-full rounded-lg shadow-lg overflow-hidden border-4 border-gradient-to-r border-pink-400/50">
        <img
          src={imageUrl}
          alt={`Certificate for ${title}`}
          className="w-full object-contain"
        />
      </div>
      <button
        onClick={() => navigate(-1)}
        className="mt-6 bg-secondary text-white px-6 py-3 rounded-lg hover:bg-accent transition"
      >
        Back to Portfolio
      </button>
    </div>
  );
};

export default CertificatePage;
