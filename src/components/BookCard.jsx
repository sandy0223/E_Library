import React, { useState } from 'react';

const BookCard = ({ book }) => {
    const [showPDF, setShowPDF] = useState(false);

    const handleViewPDF = () => {
        setShowPDF(!showPDF);
    };

    return (
        <div className="p-4 w-full md:w-1/4 bg-amber-600">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                    src={book.image}
                    alt={book.title}
                    className="w-full p-4 h-64 object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
                    onClick={handleViewPDF}
                />
                <div className="p-4">
                    <h2 className="text-l  text-center font-bold">{book.title}</h2>
                </div>
            </div>
            {showPDF && (
                <div className="mt-4">
                    <div className="mt-2">
                        <a
                            href={book.pdf}
                            download
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                        >
                            Download PDF
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BookCard;
