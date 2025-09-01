import React, { useState } from "react";

// Dynamically import all images from the imgs folder
const importAll = (requireContext) => requireContext.keys().map(requireContext);
const images = importAll(require.context("../imgs", false, /\.(png|jpe?g|gif)$/));

// Define a more sophisticated pattern with various aspect ratios
const sizePattern = [
  { type: "square", ratio: "1:1", spans: { gridColumn: "span 1", gridRow: "span 1" } },
  { type: "horizontal", ratio: "16:9", spans: { gridColumn: "span 2", gridRow: "span 1" } },
  { type: "vertical", ratio: "4:3", spans: { gridColumn: "span 1", gridRow: "span 2" } },
  { type: "large", ratio: "2:2", spans: { gridColumn: "span 2", gridRow: "span 2" } },
  { type: "square", ratio: "1:1", spans: { gridColumn: "span 1", gridRow: "span 1" } },
  { type: "horizontal", ratio: "16:9", spans: { gridColumn: "span 2", gridRow: "span 1" } },
  { type: "vertical", ratio: "4:3", spans: { gridColumn: "span 1", gridRow: "span 2" } },
  { type: "large", ratio: "2:2", spans: { gridColumn: "span 2", gridRow: "span 2" } },
  { type: "square", ratio: "1:1", spans: { gridColumn: "span 1", gridRow: "span 1" } },
  { type: "wide", ratio: "21:9", spans: { gridColumn: "span 3", gridRow: "span 1" } },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
        gridAutoRows: "180px",
        gap: "24px",
        padding: "40px",
        background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
        minHeight: "100vh",
        boxSizing: "border-box",
      }}
    >
      {images.map((src, i) => {
        const size = sizePattern[i % sizePattern.length];
        
        // Add slight randomization to rotation
        const rotation = i % 7 === 0 ? -2 : i % 5 === 0 ? 2 : i % 3 === 0 ? -1 : 0;

        return (
          <div
            key={i}
            style={{
              ...size.spans,
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1), 0 2px 8px rgba(0,0,0,0.05)",
              background: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              transform: `rotate(${rotation}deg)`,
              cursor: "pointer",
              position: "relative",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = `rotate(0deg) scale(1.03)`;
              e.currentTarget.style.boxShadow = "0 15px 40px rgba(0,0,0,0.15), 0 5px 15px rgba(0,0,0,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = `rotate(${rotation}deg) scale(1)`;
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1), 0 2px 8px rgba(0,0,0,0.05)";
            }}
            onClick={() => handleImageClick(i)}
          >
            <div
              style={{
                position: "absolute",
                top: "12px",
                right: "12px",
                background: "rgba(0,0,0,0.7)",
                color: "white",
                fontSize: "10px",
                padding: "4px 8px",
                borderRadius: "12px",
                zIndex: 2,
                fontWeight: 600,
              }}
            >
              {size.ratio}
            </div>
            <img
              src={src}
              alt={`Gallery ${i + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                transition: "transform 0.3s ease",
              }}
            />
          </div>
        );
      })}
      
      {/* Modal for enlarged image view */}
      {selectedImage !== null && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "40px",
          }}
          onClick={closeModal}
        >
          <div
            style={{
              position: "relative",
              maxWidth: "90%",
              maxHeight: "90%",
              overflow: "hidden",
              borderRadius: "8px",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[selectedImage]}
              alt={`Enlarged view ${selectedImage + 1}`}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
                display: "block",
              }}
            />
            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                background: "rgba(0,0,0,0.7)",
                color: "white",
                border: "none",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                fontSize: "20px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}