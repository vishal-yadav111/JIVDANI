// src/components/screens/AllergiesScreen.jsx

import React from 'react';

const AllergiesScreen = () => {
    return (
        <div className="p-4 bg-white rounded shadow-sm">
            <h2>🤧 Allergies</h2>
            <p className="lead">This screen demonstrates navigation to a History sub-item. It is mapped to the path: <code className="text-success">/Allergy</code></p>
            <p>If you see the sidebar on the left and this content on the right, your **nested routing** is working correctly!</p>
        </div>
    );
};

export default AllergiesScreen;