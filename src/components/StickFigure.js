import React, { useEffect, useState } from "react";

const StickFigure = () => {
    return (
        <svg
            width="200"
            height="400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 200"
        >
            {/* <!-- Head --> */}
            <circle cx="50" cy="30" r="20" fill="#FFD1A4" />

            {/* <!-- Body --> */}
            <rect x="35" y="60" width="30" height="60" fill="#6A9FB5" />

            {/* <!-- Arms --> */}
            <rect x="15" y="60" width="20" height="10" fill="#FFD1A4" />
            <rect x="65" y="60" width="20" height="10" fill="#FFD1A4" />

            {/* <!-- Legs --> */}
            <rect x="35" y="120" width="10" height="50" fill="#4A6A92" />
            <rect x="55" y="120" width="10" height="50" fill="#4A6A92" />
        </svg>
    );
};

export default StickFigure;
