import React, { useState } from 'react';
import './Closet.css'; // Make sure your Closet.css has the modal styles we discussed

const apparelData = {
  Dress: [
    'Magenta Slipdress.jpg', 'Pink Layered Dress.jpg', 'Back Tie Midi Dress.jpg',
    'Bow Accent Dress.jpg', 'Gothic Cape Dress.jpg', 'Midnight Bell Dress.jpg',
    'Ruffle Shoulder Dress.jpg', 'Silk Champagne Gown.jpg', 'White Tulle Dress.jpg',
    'Wine Flare Dress.jpg'
  ],
  Polos: [
    'Black Patterned Polo.jpg', 'Brown Patterned Polo.jpg', 'Colorblock Champion Polo.jpg',
    'Cream Polo.jpg', 'Peach Classic Polo.jpg', 'Pink Youth Polo.jpg',
    'Retro Stripe Polo.jpg', 'Soft Beige Polo.png'
  ],
  Pants: [
    'Beige Chino Pants.jpg', 'Black High Waist Pants.jpg', 'Classic Blue Jeans.jpg',
    'Black Lounge Pants.jpg', 'Olive Linen Pants.jpg', 'Navy Tapered Pants.jpg',
    'Brown Cargo Pants.jpg', 'Red Drawstring Pants.jpg', 'Olive Cargo Pants.jpg',
    'Tan Denim Pants.jpg'
  ],
  Sweater: [
    'Blue Pinstripe Knit.jpg', 'Brown Green Stripe Knit.jpg', 'Charcoal Ribbed Sweater.jpg',
    'Cream Striped Knit.jpg', 'Ivory Cable Sweater.jpg', 'Navy Dark Sweater.jpg',
    'Navy Knit Sweater.jpg', 'Nordic Holiday Sweater.jpg', 'Retro Chevron Sweater.jpg',
    'Solid Green Pullover.jpg'
  ],
  TShirt: [
    'Black Dragon Wave Tee.png', 'Bold Red Tee.jpg', 'Cobalt Blue Tee.jpg',
    'Gray Shadow Dragon Tee.jpg', 'Peak Green Graphic Tee.jpg'
  ]
};

const Closet = ({ onSelectApparel, setSelectedMenu }) => {
  const [selectedCategory, setSelectedCategory] = useState('Dress');
  const [selectedImageFilename, setSelectedImageFilename] = useState(null); // Stores only the filename e.g., "Magenta Slipdress.jpg"
  const [selectedImagePath, setSelectedImagePath] = useState(null); // Stores the full path e.g., "/src/assets/closet/dress/Magenta Slipdress.jpg"
  const [showPreviewModal, setShowPreviewModal] = useState(false);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedImageFilename(null); // Reset selection when category changes
    setSelectedImagePath(null);
    setShowPreviewModal(false);
  };

  const handleItemClick = (imgFilename) => {
    const path = `/src/assets/closet/${selectedCategory.toLowerCase().replace(/\s+/g, '')}/${imgFilename}`; // Ensure category name is path-friendly
    console.log("Item clicked:", imgFilename, "Constructed path:", path);

    setSelectedImageFilename(imgFilename);
    setSelectedImagePath(path);
    setShowPreviewModal(true);

    // Inform App.jsx about the selected apparel path for the actual try-on later
    // if (onSelectApparel) {
    //   onSelectApparel(path);
    // }
  };

  const handleTryOn = () => {
    console.log("Try-On button clicked. Navigating to Virtual Try-On.");
    setShowPreviewModal(false); // Close the modal
    if (setSelectedMenu) {
      setSelectedMenu(3); // Navigate to Virtual Try On (index 3)
    }
  };

  const handleCloseModal = () => {
    setShowPreviewModal(false);
  };

  // Optional: Close modal if user clicks on the overlay
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) { // Ensure click is on overlay itself, not children
        handleCloseModal();
    }
  }

  return (
    <div className="closet-container">
      <h2 className="closet-title">Closet</h2>
      <div className="category-tabs">
        {Object.keys(apparelData).map((category) => (
          <button
            key={category}
            className={`category-button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="closet-grid">
        {apparelData[selectedCategory] && apparelData[selectedCategory].map((imgFilename, index) => {
          const itemDisplayPath = `/src/assets/closet/${selectedCategory.toLowerCase().replace(/\s+/g, '')}/${imgFilename}`;
          const displayName = imgFilename.replace(/\.(png|jpg|jpeg)$/i, '');
          return (
            <div
              key={index}
              className={`closet-item ${selectedImageFilename === imgFilename ? 'selected' : ''}`}
              onClick={() => handleItemClick(imgFilename)}
            >
              <div className="closet-image-wrapper">
                <img src={itemDisplayPath} alt={displayName} className="closet-thumbnail" />
                <div className="closet-overlay">Select</div>
              </div>
              <div className="closet-label">{displayName}</div>
            </div>
          );
        })}
      </div>

      {showPreviewModal && selectedImagePath && selectedImageFilename && (
        
        <div className="modal-overlay" onClick={handleOverlayClick}> {/* Close on overlay click */}
          <div className="modal-content" onClick={(e) => e.stopPropagation()}> {/* Prevent close when clicking inside modal */}
            <button className="modal-close" onClick={handleCloseModal}>×</button>
            <img
              src={selectedImagePath}
              alt={selectedImageFilename.replace(/\.(png|jpe?g)$/i, '')}
              className="modal-image"
            />
            <h3 className="modal-title">{selectedImageFilename.replace(/\.(png|jpe?g)$/i, '')}</h3>
            <div className="modal-sizes">
              {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                <span key={size} className="size-badge">{size}</span>
              ))}
            </div>
            <button className="try-on-button" onClick={handleTryOn}>
              Try-On
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Closet;