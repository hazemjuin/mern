import React, { useState } from 'react';
// import './Tabs.css'; // Import your CSS file

function Tabs({ items }) {
const [activeTab, setActiveTab] = useState(0);

const handleTabClick = (index, callback) => {
    setActiveTab(index);
    if (callback && typeof callback === 'function') {
    callback();
    }
};

return (
    <div className="tabs">
    <div className="tab-headers">
        {items.map((item, index) => (
        <div
            key={index}
            className={`tab-header ${index === activeTab ? 'active' : ''}`}
            onClick={() => handleTabClick(index, item.callback)}
        >
            {item.label}
        </div>
        ))}
    </div>
    <div className="tab-content">
        {items.map((item, index) => (
        <div
            key={index}
            className={`tab-item ${index === activeTab ? 'active' : ''}`}
        >
            {item.content}
        </div>
        ))}
    </div>
    </div>
);
}

export default Tabs;
