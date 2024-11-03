import React from 'react';
import './sidebar.css'; // Optional: create a CSS file for custom styles

function Sidebar() {
    return (
        <div className="sidebar">
            <h2>Menu</h2>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                {/* Add more menu items as needed */}
            </ul>
        </div>
    );
}

export default Sidebar;