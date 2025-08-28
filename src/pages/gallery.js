import React from 'react';  

const images = [
    { src: "/images/photo1.jpg", alt: "Photo 1" },
    { src: "/images/photo2.jpg", alt: "Photo 2" },
    { src: "/images/photo3.jpg", alt: "Photo 3" },
    { src: "/images/photo4.jpg", alt: "Photo 4" },
    { src: "/images/photo5.jpg", alt: "Photo 5" },
    { src: "/images/photo6.jpg", alt: "Photo 6" },
];

export default function Gallery() {
    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridAutoRows: "200px",
            gap: "16px",
            padding: "32px",
            background: "#fafafa"
        }}>
            {images.map((img, i) => (
                <div
                    key={img.src}
                    style={{
                        gridColumn: i % 4 === 0 ? "span 2" : "span 1",
                        gridRow: i % 3 === 0 ? "span 2" : "span 1",
                        overflow: "hidden",
                        borderRadius: "16px",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                        background: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <img
                        src={img.src}
                        alt={img.alt}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover"
                        }}
                    />
                </div>
            ))}
        </div>
    );
}