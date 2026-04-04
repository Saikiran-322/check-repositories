import React, { useState, useMemo } from "react";
import { Modal } from "react-responsive-modal";
import { AgGridReact } from "ag-grid-react";

import "react-responsive-modal/styles.css";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const ModalWithGrid = () => {
  const [open, setOpen] = useState(false);

  // 🔥 Sample Data
const rowData = useMemo(() => [
  { id: 1, name: "Sai", age: 25, city: "Hyderabad" },
  { id: 2, name: "Kiran", age: 28, city: "Bangalore" },
  { id: 3, name: "John", age: 30, city: "Chennai" },
  { id: 4, name: "Amit", age: 27, city: "Delhi" },
  { id: 5, name: "Ravi", age: 26, city: "Mumbai" },
  { id: 6, name: "Priya", age: 24, city: "Pune" },
  { id: 7, name: "Anil", age: 29, city: "Kolkata" },
  { id: 8, name: "Sneha", age: 23, city: "Ahmedabad" },
  { id: 9, name: "Rahul", age: 31, city: "Jaipur" },
  { id: 10, name: "Divya", age: 26, city: "Lucknow" },
  { id: 11, name: "Arjun", age: 28, city: "Chandigarh" },
  { id: 12, name: "Meena", age: 25, city: "Coimbatore" },
  { id: 13, name: "Vikram", age: 32, city: "Indore" },
  { id: 14, name: "Pooja", age: 27, city: "Bhopal" },
  { id: 15, name: "Karthik", age: 29, city: "Visakhapatnam" },
  { id: 16, name: "Neha", age: 24, city: "Nagpur" },
  { id: 17, name: "Suresh", age: 35, city: "Surat" },
  { id: 18, name: "Lavanya", age: 22, city: "Mysore" },
  { id: 19, name: "Manoj", age: 33, city: "Patna" },
  { id: 20, name: "Keerthi", age: 26, city: "Trivandrum" },
  { id: 21, name: "Ramesh", age: 34, city: "Vijayawada" },
  { id: 22, name: "Ananya", age: 23, city: "Guwahati" },
  { id: 23, name: "Harish", age: 31, city: "Ranchi" },
  { id: 24, name: "Swathi", age: 25, city: "Madurai" },
  { id: 25, name: "Deepak", age: 30, city: "Noida" },
  { id: 26, name: "Nikhil", age: 28, city: "Gurgaon" },
  { id: 27, name: "Asha", age: 24, city: "Udaipur" },
  { id: 28, name: "Varun", age: 29, city: "Dehradun" },
  { id: 29, name: "Tejas", age: 27, city: "Hubli" },
  { id: 30, name: "Shreya", age: 26, city: "Shimla" },
], []);

  // 🔥 Column Definitions
  const columnDefs = useMemo(() => [
    { field: "id", headerName: "ID", minWidth: 90 },
    { field: "name", headerName: "Name", minWidth:700 },
    { field: "age", headerName: "Age", minwidth: 700 },
    { field: "city", headerName: "City", minWidth:700 },
  ], []);

  return (
    <div>
      <button onClick={() => setOpen(true)}>Open Grid Modal</button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        center
        classNames={{
          modal: "custom-modal",
        }}
      >
        <h2>User Data</h2>

        {/* 🔥 AG Grid */}
        <div className="ag-theme-alpine grid-container" style={{ height: 200     }}>
          <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}
            pagination={true}
            paginationPageSize={15}
          />
        </div>
      </Modal>
    </div>
  );
};

export default ModalWithGrid;