import React from 'react';

const Footer = () => {
    return (
        <footer className="text-center py-4 bg-gray-100">
            <hr className="w-3/4 mx-auto border-gray-400 mb-4" />
            <p className="text-gray-600 text-sm mb-2">
                &copy; Copyright reserved by Foysal Ahammed
            </p>
            <p className="text-gray-600 text-sm mb-4">
                Contact: +0 177-882-1588 
            </p>
            <a
                href="https://github.com/FoysalAhammed"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
            >
                GitHub
            </a>
        </footer>
    );
};

export default Footer;
