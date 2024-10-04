var students = JSON.parse(localStorage.getItem('students')) || [];
function fetchStudents() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "./real.json", true); 

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
function displayStudents() {
    var studentBody = document.getElementById("student-body");
    studentBody.innerHTML = ""; 
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
function sortTable(columnIndex) {
    var studentBody = document.getElementById('student-body');
    var rows = studentBody.getElementsByTagName('tr');
    var rowsArray = [];
    for (var i = 0; i < rows.length; i++) {
        rowsArray.push(rows[i]);
    }
    var isAscending = true;
    if (rowsArray.length > 1) {
        var firstValue = rowsArray[1].cells[columnIndex].textContent.trim();
        var secondValue = rowsArray[2].cells[columnIndex].textContent.trim();
        isAscending = isNaN(firstValue) || isNaN(secondValue) ?
                      (firstValue < secondValue) : 
                      (parseInt(firstValue, 10) < parseInt(secondValue, 10));
    }
    for (var i = 0; i < rowsArray.length - 1; i++) {
        for (var j = 0; j < rowsArray.length - i - 1; j++) {
            var cellA = rowsArray[j].cells[columnIndex].textContent.trim();
            var cellB = rowsArray[j + 1].cells[columnIndex].textContent.trim();
            
            var swapCondition = isAscending ?
                (isNaN(cellA) || isNaN(cellB) ? (cellA > cellB) : (parseInt(cellA, 10) > parseInt(cellB, 10))) :
                (isNaN(cellA) || isNaN(cellB) ? (cellA < cellB) : (parseInt(cellA, 10) < parseInt(cellB, 10)));
            
            if (swapCondition) {
                var temp = rowsArray[j];
                rowsArray[j] = rowsArray[j + 1];
                rowsArray[j + 1] = temp;
            }
        }
    }
    studentBody.innerHTML = '';
    for (var i = 0; i < rowsArray.length; i++) {
        studentBody.appendChild(rowsArray[i]);
    }
}
 function searchByDepartment() {
    var departmentDropdown = document.getElementById('departmentSearch');
    var selectedDepartment = departmentDropdown.value;
    var rows = document.querySelectorAll('#student-body tr');

    for (var i = 0; i < rows.length; i++) {
        var departmentCell = rows[i].getElementsByTagName('td')[5];
        rows[i].style.display = selectedDepartment ? departmentCell.textContent === selectedDepartment ? '' : 'none' : '';
    }
}
        function searchOverall() {
            var input = document.getElementById('overallSearch');
            var filter = input.value.toLowerCase();
            var rows = document.querySelectorAll('#student-body tr');

            for (var i = 0; i < rows.length; i++) {
                var cells = rows[i].getElementsByTagName('td');
                var match = false;
                for (var j = 0; j < cells.length; j++) {
                    if (cells[j].textContent.toLowerCase().includes(filter)) {
                        match = true;
                        break;
                    }
                }
                rows[i].style.display = match ? '' : 'none';
            }
        }
fetchStudents();
