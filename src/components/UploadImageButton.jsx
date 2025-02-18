import React, { useState } from 'react';

const UploadImageButton = ({ onImageUpload }) => {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        if (onImageUpload) {
          onImageUpload(file);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: 'none' }}
        id="upload-image-input"
      />
      <label htmlFor="upload-image-input">
        <button type="button">Upload Custom Image</button>
      </label>
      {image && <img src={image} alt="Custom" style={{ marginTop: '10px', maxHeight: '200px' }} />}
    </div>
  );
};

export default UploadImageButton;