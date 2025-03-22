import React from "react";
import { metaData } from "../data";
export const Footer = () => (
    <footer className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
            &copy; {new Date().getFullYear()} {metaData.title}. All rights reserved.
        </div>
    </footer>
);