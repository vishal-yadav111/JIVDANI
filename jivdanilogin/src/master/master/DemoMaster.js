import React, { useState } from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

import {
  FaEdit,
  FaTrash,
  FaSearch,
  FaPencilAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import {
  FaHeartbeat,
  FaFlask,
  FaBriefcaseMedical,
  FaStethoscope,
  FaPlus,
} from "react-icons/fa";

// Medicines data
const initialMedicines = [
  {
    id: 1,
    name: "Aspirin",
    dosage: "500 mg",
    unit: "Tablet",
    when: "Morning",
    frequency: "Once",
    duration: "7 days",
  },
  {
    id: 2,
    name: "Paracetamol",
    dosage: "650 mg",
    unit: "Tablet",
    when: "Night",
    frequency: "Twice",
    duration: "5 days",
  },
  {
    id: 3,
    name: "Ibuprofen",
    dosage: "400 mg",
    unit: "Tablet",
    when: "Afternoon",
    frequency: "Thrice",
    duration: "10 days",
  },
  {
    id: 4,
    name: "Amoxicillin",
    dosage: "250 mg",
    unit: "Capsule",
    when: "Morning",
    frequency: "Twice",
    duration: "7 days",
  },
  {
    id: 5,
    name: "Metformin",
    dosage: "500 mg",
    unit: "Tablet",
    when: "Morning",
    frequency: "Once",
    duration: "30 days",
  },
  {
    id: 6,
    name: "Lisinopril",
    dosage: "10 mg",
    unit: "Tablet",
    when: "Morning",
    frequency: "Once",
    duration: "90 days",
  },
  {
    id: 7,
    name: "Atorvastatin",
    dosage: "40 mg",
    unit: "Tablet",
    when: "Night",
    frequency: "Once",
    duration: "30 days",
  },
  {
    id: 8,
    name: "Losartan",
    dosage: "50 mg",
    unit: "Tablet",
    when: "Morning",
    frequency: "Once",
    duration: "30 days",
  },
  {
    id: 9,
    name: "Simvastatin",
    dosage: "20 mg",
    unit: "Tablet",
    when: "Night",
    frequency: "Once",
    duration: "30 days",
  },
  {
    id: 10,
    name: "Hydrochlorothiazide",
    dosage: "25 mg",
    unit: "Tablet",
    when: "Morning",
    frequency: "Once",
    duration: "30 days",
  },
];

const MedicinePage = () => {
  const [medicines, setMedicines] = useState(initialMedicines);
  const [search, setSearch] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState("");

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleEdit = (id, name) => {
    setEditingId(id);
    setEditName(name);
  };

  const handleEditChange = (e) => {
    setEditName(e.target.value);
  };

  const saveEdit = () => {
    setMedicines(
      medicines.map((med) =>
        med.id === editingId ? { ...med, name: editName } : med
      )
    );
    setEditingId(null);
    setEditName("");
  };

  const handleDelete = (id) => {
    setDeleteId(id);
    setShowConfirm(true);
  };

  const confirmDelete = (confirmed) => {
    if (confirmed && deleteId) {
      setMedicines(medicines.filter((med) => med.id !== deleteId));
    }
    setShowConfirm(false);
    setDeleteId(null);
  };

  // Pagination calculations
  const indexOfLastMedicine = currentPage * rowsPerPage;
  const indexOfFirstMedicine = indexOfLastMedicine - rowsPerPage;

  const filteredMedicines = medicines
    .filter((med) => med.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) =>
      a.name.toLowerCase().startsWith(search.toLowerCase()) ? -1 : 1
    );

  const currentMedicines = filteredMedicines.slice(
    indexOfFirstMedicine,
    indexOfLastMedicine
  );

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to the first page on rows per page change
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="p-2 bg-gray-100 flex ">
      {/*
      {/* Vitals Diagnosis Section */}
      <div className="w-44 bg-gray-200 p-4 mr-16 pr-12 mt-20 rounded-lg">
        <div className="space-y-4 pr-2 text-center">
          <div className="flex flex-col items-center text-gray-500 p-2 rounded">
            <FaHeartbeat className="mb-2 text-xl" />
            <span>Vitals Diagnosis</span>
          </div>
          <div className="flex flex-col items-center text-gray-500 p-2 rounded">
            <FaFlask className="mb-2 text-xl" />
            <span>Vitals Diagnosis</span>
          </div>
          <div className="flex flex-col items-center text-gray-500 p-2 rounded">
            <FaBriefcaseMedical className="mb-2 text-xl" />
            <span>Vitals Diagnosis</span>
          </div>
          <div className="flex flex-col items-center text-gray-500 p-2 rounded">
            <FaStethoscope className="mb-2 text-xl" />
            <span>Vitals Diagnosis</span>
          </div>
          <div className="flex flex-col items-center text-gray-500 p-2 rounded">
            <FaPlus className="mb-2 text-xl" />
            <span>Vitals Diagnosis</span>
          </div>
        </div>
      </div>

      {/* Medicines Table */}
      <div className="flex-grow  rounded-lg mr-12 mt-6">
        <div className="flex items-center mb-4">
          <p className="font-bold">Medicine Analyst</p>
          <div className="relative flex-grow mx-4 flex justify-center items-center">
            {" "}
            {/* Adjusted flex-grow */}
            <input
              type="text"
              placeholder="Search medicines..."
              value={search}
              onChange={handleSearch}
              className="border border-gray-300 rounded-lg p-2 pl-2 w-full max-w-5xl" // Increased width
            />
            <FaSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-purple-500" />
          </div>

          <button className="bg-white text-black px-4 py-2 rounded-md ml-4 flex items-center">
            <ArrowDownTrayIcon className="w-5 h-5 mr-2" />
            Export
          </button>

          <button className="bg-purple-500 text-white px-4 py-2 rounded-md ml-4">
            Create New +
          </button>
        </div>

        {/* Applying border-spacing for row gap */}
        <div className="rounded-lg">
          <table className="min-w-full rounded-lg">
            <thead className="bg-gray-200 h-12">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sr No.
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Medicine Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Dosage
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Unit
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  When
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Frequency
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Duration
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Edit
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Delete
                </th>
              </tr>
            </thead>
          </table>

          {/* Scrollable tbody */}
          <div className="overflow-y-auto max-h-96">
            <table className="min-w-full border-separate border-spacing-y-2">
              <tbody className="bg-white">
                {currentMedicines.map((medicine, index) => (
                  <tr
                    key={medicine.id}
                    className="bg-white shadow-lg rounded-lg"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      {indexOfFirstMedicine + index + 1}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {editingId === medicine.id ? (
                        <input
                          type="text"
                          value={editName}
                          onChange={handleEditChange}
                          className="border border-gray-300 rounded p-1"
                        />
                      ) : (
                        medicine.name
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {medicine.dosage}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {medicine.unit}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {medicine.when}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {medicine.frequency}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {medicine.duration}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {editingId === medicine.id ? (
                        <button
                          className="text-green-500 hover:text-green-700"
                          onClick={saveEdit}
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          className="text-blue-500 hover:text-blue-700"
                          onClick={() => handleEdit(medicine.id, medicine.name)}
                        >
                          <FaPencilAlt style={{ color: "gray" }} />
                        </button>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => handleDelete(medicine.id)}
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex justify-between items-center mt-3 bg-white shadow rounded p-4">
          {/* Rows per Page Dropdown */}
          <div className="flex items-center">
            <label htmlFor="rowsPerPage" className="mr-2">
              Rows per page:
            </label>
            <select
              id="rowsPerPage"
              value={rowsPerPage}
              onChange={handleRowsPerPageChange}
              className="form-select"
              style={{ width: "auto" }}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={30}>30</option>
              <option value={50}>50</option>
            </select>
          </div>

          {/* Pagination Info and Buttons */}
          <div className="flex items-center">
            {/* Pagination Info */}
            <div className="mr-4">
              {medicines.length > 0 ? (
                <>
                  {indexOfFirstMedicine + 1} -{" "}
                  {Math.min(indexOfLastMedicine, filteredMedicines.length)}
                </>
              ) : (
                "0 - 0"
              )}
            </div>

            {/* Pagination Buttons */}
            <div className="flex items-center">
              <button
                className="btn me-2 no-border"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <FaChevronLeft />
              </button>

              <button
                className="btn no-border"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={indexOfLastMedicine >= filteredMedicines.length}
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      {showConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <p className="mb-4">
              Are you sure you want to delete this medicine?
            </p>
            <div className="flex justify-end">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                onClick={() => confirmDelete(true)}
              >
                Yes
              </button>
              <button
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
                onClick={() => confirmDelete(false)}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MedicinePage;
