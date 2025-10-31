// src/components/screens/MedicationScreen.jsx

import React from 'react';
import { useSelector } from 'react-redux';

const MedicationScreen = () => {
    const dataShowValue = useSelector(state => state.dataShowValue);
    
    return (
        <div className="p-4 bg-white rounded shadow-sm">
            <h2>💊 Medication Analyst (Home Screen)</h2>
            <p className="lead">This is the main dashboard for Medication. This screen is mapped to the path: <code className="text-success">/</code></p>
            <hr/>
            <blockquote className="blockquote">
                <p className="mb-0">✅ **Redux Dispatch Working:** The value set in useEffect in SidebarHomePage is: <span className="text-primary fw-bold">{dataShowValue}</span></p>
                <footer className="blockquote-footer">This confirms Redux functionality.</footer>
            </blockquote>
        </div>
    );
};

export default MedicationScreen;