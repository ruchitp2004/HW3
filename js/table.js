/*   Name: Ruchit Patel
        Date: 10/29/2025
        File: table.js
        HW3 Creating an Interactive Dynamic Table 
        Description: This JavaScript file handles the dynamic generation of the table based on user input.
        It also validates teh user input to ensure all fiends are filled and are within the range of -50 to 50. 
        And also checks that the inputed minimum value is less that the maximum values. After this it dynamically creates 
        the multiplication table.
*/
document.getElementById("inputform").addEventListener("submit", function(e) {
    e.preventDefault(); // stop page refresh

    // Remove any previous error messages
    const existingError = document.querySelector(".error-message");
    if (existingError) existingError.remove();

    // Get values
    const startY = parseInt(document.getElementById("startY").value);
    const endY = parseInt(document.getElementById("endY").value);
    const startX = parseInt(document.getElementById("startX").value);
    const endX = parseInt(document.getElementById("endX").value);
    const tableContainer = document.getElementById("tableContainer");

    // Clear old table
    tableContainer.innerHTML = "";

    // Validate inputs
    let errorMessage = "";
    if (isNaN(startY) || isNaN(endY) || isNaN(startX) || isNaN(endX)) {
        errorMessage = "Please fill out all fields before generating the table.";
    } else if (
        startY < -50 || startY > 50 ||
        endY < -50 || endY > 50 ||
        startX < -50 || startX > 50 ||
        endX < -50 || endX > 50
    ) {
        errorMessage = "All values must be between -50 and 50.";
    } else if (startY > endY || startX > endX) {
        errorMessage = "Minimum values must be less than or equal to maximum values.";
    }

    if (errorMessage) {
        const errorEl = document.createElement("div");
        errorEl.textContent = errorMessage;
        errorEl.classList.add("error-message"); // CSS handles styling
        this.prepend(errorEl); // Insert above the form
        return;
    }

    // Create table (same as before)
    const table = document.createElement("table");
    table.border = "1";
    table.style.borderCollapse = "collapse";
    table.style.margin = "20px auto";
    table.style.textAlign = "center";

    const headerRow = document.createElement("tr");
    const emptyCell = document.createElement("th");
    headerRow.appendChild(emptyCell);
    for (let x = startX; x <= endX; x++) {
        const th = document.createElement("th");
        th.textContent = x;
        headerRow.appendChild(th);
    }
    table.appendChild(headerRow);

    for (let y = startY; y <= endY; y++) {
        const row = document.createElement("tr");
        const th = document.createElement("th");
        th.textContent = y;
        row.appendChild(th);

        for (let x = startX; x <= endX; x++) {
            const td = document.createElement("td");
            td.textContent = x * y;
            row.appendChild(td);
        }
        table.appendChild(row);
    }

    tableContainer.appendChild(table);
});
