let form = document.getElementById("empForm");
let empDiv = document.getElementById("flexDiv");
let startEmpId = 1000;
let allEmployee = [];

function employee(fullName, department, level, imageUrl) {
    this.employeeID = 0;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageUrl = imageUrl;
    this.salary = 0;
    allEmployee.push(this);
};


function generateId() {
    return startEmpId++;
}
employee.prototype.getId = function () {
    this.employeeID = generateId();
}

employee.prototype.generateSalary = function () {
    let min;
    let max;

    if (this.level == "Senior") {
        min = 1500;
        max = 2000;
    } else if (this.level == "Mid-Senior") {
        min = 1000;
        max = 1500;
    } else { this.level == "Junior"
        min = 500;
        max = 1000;
    }
    let randomSalary = Math.floor((Math.random() * (max - min + 1)) + min);
    randomSalary *= 0.75;
    this.salary = randomSalary;
}


let ghaze = new employee("Ghazi Samer", "Administration", "Senior", "./assets/Ghazi.jpg");
let lana = new employee("Lana Ali", "Finance", "Senior", "./assets/Lana.jpg");
let tamara = new employee("Tamara Ayoub", "Marketing", "Senior", "./assets/Tamara.jpg");
let safi = new employee("Safi Walid", "Administration", "Mid-Senior", "./assets/Safi.jpg");
let omar = new employee("Omar Zaid", "Development", "Senior", "./assets/Omar.jpg");
let rana = new employee("Rana Saleh", "Development", "Junior", "./assets/Rana.jpg");
let hadi = new employee("Hadi Ahmad", "Finance", "Mid-Senior", "./assets/Hadi.jpg");
let rania = new employee("Lana Ali", "Finance", "Senior", "./assets/Lana.jpg");

function saveEmployees() {
    let formatedData = JSON.stringify(allEmployee);
    localStorage.setItem("Employees", formatedData);
}


function getEmployees() {
    let emp = localStorage.getItem("Employees");
    let parseEmps = JSON.parse(emp);
    if (parseEmps != null) {
        allEmployee = [];
        for (let i = 0; i < parseEmps.length; i++) {
            new employee(parseEmps[i].fullName, parseEmps[i].department, parseEmps[i].level, parseEmps[i].imageUrl);
        };
    }

    renderAll();
}

employee.prototype.render = function () {

    let div = document.createElement("div");
    div.setAttribute('class', "flexCard");
    empDiv.appendChild(div);

    let image = document.createElement("img");
    image.setAttribute("src", this.imageUrl);
    div.appendChild(image);

    let name = document.createElement("p");
    name.textContent = `Name: ${this.fullName} - ID: ${this.employeeID}`;
    div.appendChild(name);

    let dept = document.createElement("p");
    dept.textContent = `Department: ${this.department} - Level: ${this.level}`;
    div.appendChild(dept);

    let salry = document.createElement("p");
    salry.textContent = ` ${this.salary}`;
    div.appendChild(salry);
}



form.addEventListener("submit", handelSubmit);

function handelSubmit(event) {
    event.preventDefault();
    let name = event.target.fname.value;
    let dept = event.target.department.value;
    let level = event.target.level.value;
    let img = event.target.imgUrl.value;
    let newEmp = new employee(name, dept, level, img);
    newEmp.getId();
    newEmp.generateSalary();
    saveEmployees();
    renderAll();
    form.reset();
}



function renderAll() {
    empDiv.innerHTML = "";
    for (let i = 0; i < allEmployee.length; i++) {
        allEmployee[i].getId();
        allEmployee[i].generateSalary();
        allEmployee[i].render();
    }
    saveEmployees();
};

renderAll();
getEmployees();