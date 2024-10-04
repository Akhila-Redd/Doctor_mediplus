var students = JSON.parse(localStorage.getItem('students')) || [];

// Fetch students from JSON file
function fetchStudents() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "./real.json", true); // Adjust the path to your JSON file

    xhr.onload = function() {
        if (xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            for (var i = 0; i < data.length; i++) {
                students.push(data[i]);
            }
            displayStudents();
        } else {
            console.error('Error fetching the JSON file:', xhr.statusText);
        }
    };

    xhr.onerror = function() {
        console.error('Request failed');
    };

    xhr.send();
}

// Display students in the table
function displayStudents() {
    var studentBody = document.getElementById("student-body");
    studentBody.innerHTML = ""; // Clear previous entries
    for (var i = 0; i < students.length; i++) {
        var student = students[i];
        studentBody.innerHTML += "<tr>" +
            "<td>" + student.name + "</td>" +
            "<td>" + student.serial + "</td>" +
            "<td>" + student.mobile + "</td>" +
            "<td>" + student.address + "</td>" +
            "<td>" + student.date + "</td>" +
            "<td>" + student.department + "</td>" +
            "<td>" + student.email + "</td>" +
            "<td>" + student.father + "</td>" +
            "<td>" + student.mother + "</td>" +
            "</tr>";
    }
}

// Handle form submission
document.getElementById("data-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var serial = document.getElementById("serial").value;
    var mobile = document.getElementById("mobile").value;
    var address = document.getElementById("address").value;
    var date = document.getElementById("date").value;
    var department = document.getElementById("department").value;
    var email = document.getElementById("email").value;
    var father = document.getElementById("father").value;
    var mother = document.getElementById("mother").value;

    var student = {
        name: name,
        serial: parseInt(serial, 10),
        mobile: mobile,
        address: address,
        date: date,
        department: department,
        email: email,
        father: father,
        mother: mother
    };

    students.push(student);
    localStorage.setItem('students', JSON.stringify(students));
    document.getElementById("data-form").reset();
    displayStudents();
});

// Search functionality for each column
function searchColumn(columnIndex) {
    var input = document.querySelectorAll('th input')[columnIndex];
    var filter = input.value.toLowerCase();
    var rows = document.querySelectorAll('#student-body tr');

    for (var i = 0; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName('td');
        var match = true;

        if (filter) {
            match = cells[columnIndex].textContent.toLowerCase().includes(filter);
        }

        rows[i].style.display = match ? '' : 'none';
    }
}

// Sorting function
function sortTable(columnIndex) {
    var studentBody = document.getElementById('student-body');
    var rows = studentBody.getElementsByTagName('tr');
    var rowsArray = [];

    // Collect rows into an array
    for (var i = 0; i < rows.length; i++) {
        rowsArray.push(rows[i]);
    }

    // Determine if sorting in ascending order
    var isAscending = true;
    if (rowsArray.length > 1) {
        var firstValue = rowsArray[1].cells[columnIndex].textContent.trim();
        var secondValue = rowsArray[2].cells[columnIndex].textContent.trim();
        isAscending = isNaN(firstValue) || isNaN(secondValue) ?
                      (firstValue < secondValue) : 
                      (parseInt(firstValue, 10) < parseInt(secondValue, 10));
    }

    // Simple bubble sort
    for (var i = 0; i < rowsArray.length - 1; i++) {
        for (var j = 0; j < rowsArray.length - i - 1; j++) {
            var cellA = rowsArray[j].cells[columnIndex].textContent.trim();
            var cellB = rowsArray[j + 1].cells[columnIndex].textContent.trim();
            
            var swapCondition = isAscending ?
                (isNaN(cellA) || isNaN(cellB) ? (cellA > cellB) : (parseInt(cellA, 10) > parseInt(cellB, 10))) :
                (isNaN(cellA) || isNaN(cellB) ? (cellA < cellB) : (parseInt(cellA, 10) < parseInt(cellB, 10)));
            
            if (swapCondition) {
                // Swap the rows
                var temp = rowsArray[j];
                rowsArray[j] = rowsArray[j + 1];
                rowsArray[j + 1] = temp;
            }
        }
    }

    // Clear the table and re-add sorted rows
    studentBody.innerHTML = '';
    for (var i = 0; i < rowsArray.length; i++) {
        studentBody.appendChild(rowsArray[i]);
    }
}
 // Search functionality for Department dropdown
 function searchByDepartment() {
    var departmentDropdown = document.getElementById('departmentSearch');
    var selectedDepartment = departmentDropdown.value;
    var rows = document.querySelectorAll('#student-body tr');

    for (var i = 0; i < rows.length; i++) {
        var departmentCell = rows[i].getElementsByTagName('td')[5]; // Assuming department is the 6th column
        rows[i].style.display = selectedDepartment ? departmentCell.textContent === selectedDepartment ? '' : 'none' : '';
    }
}
        // Search functionality for overall search
        function searchOverall() {
            var input = document.getElementById('overallSearch');
            var filter = input.value.toLowerCase();
            var rows = document.querySelectorAll('#student-body tr');

            for (var i = 0; i < rows.length; i++) {
                var cells = rows[i].getElementsByTagName('td');
                var match = false;

                // Check each cell in the row
                for (var j = 0; j < cells.length; j++) {
                    if (cells[j].textContent.toLowerCase().includes(filter)) {
                        match = true; // At least one cell matches
                        break;
                    }
                }

                // Show or hide the row based on the match
                rows[i].style.display = match ? '' : 'none';
            }
        }

// Fetch students from JSON file when the page loads
fetchStudents();
