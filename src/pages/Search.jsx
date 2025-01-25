// src/About.js
import React from 'react';

function About() {
    return (
        <div className="container mx-auto py-10">
            <h2 className="text-3xl font-bold mb-4 text-green-700">About Us</h2>
            <p className="text-lg text-gray-800 mb-4">
                Welcome to the personal website of Abbas Lewa, a passionate developer dedicated to creating innovative web applications.
            </p>
            <h3 className="text-2xl font-semibold mb-2 text-green-700">About Me</h3>
            <p className="text-gray-800 mb-4">
                I specialize in building responsive and user-friendly web applications using modern technologies like React, Tailwind CSS, and more. 
                My goal is to create seamless experiences for users while continuously learning and adapting in the ever-evolving tech landscape.
            </p>
            <h3 className="text-xl font-semibold mb-2 text-green-700">Skills</h3>
            <ul className="list-disc list-inside text-gray-800 mb-4">
                <li>JavaScript / TypeScript</li>
                <li>React / Redux</li>
                <li>Node.js / Express</li>
                <li>HTML / CSS / Tailwind CSS</li>
                <li>Git / GitHub</li>
            </ul>
            <h3 className="text-xl font-semibold mb-2 text-green-700">Contact</h3>
            <p className="text-gray-800">Feel free to reach out via email: <a href="mailto:abbas.lewa@example.com" className="text-green-600 hover:underline">abbas.lewa@example.com</a></p>
        </div>
    );
}

export default About;
