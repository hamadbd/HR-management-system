
let allEmployee=[];
//
function Employee(employeeID,fullName,department,level,imageURL,salary){
    this.employeeID=employeeID;
    this.fullName=fullName;
    this.department=department;
    this.level=level;
    this.imageURL=imageURL;
    allEmployee.push(this);
}
//function to make a random number
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
//function to find the salary after deducting the tax fee
Employee.prototype.salaryFind=function(){
 if(this.level=="Senior"){
 this.salary=getRndInteger(1500,2000);
 this['netSalary']=(this.salary-(this.salary*7.5));}
 else if(this.level=="Mid-Senior"){
    this.salary=getRndInteger(1000,1500);
    this['netSalary']=(this.salary-(this.salary*7.5));}
    else if(this.level=="Junior"){
        this.salary=getRndInteger(500,1000);
        this['netSalary']=(this.salary-(this.salary*7.5));}
}
//function to render employees names and salaries
Employee.prototype.render=function(){
    document.write(`<h2>Name: ${this.fullName} ,Salary: ${this.salary}</h2>`)
}
//data to use 
let Ghazi = new  Employee(1000, "Ghazi Samer", "Administration","Senior");
let Lana  = new  Employee(1001, "Lana Ali", "Finance","Senior");
let Tamara  = new  Employee(1002, "Tamara Ayoub", "Marketing","Senior");
let Safi  = new  Employee(1003, "Safi Walid", "Administration","Mid-Senior");
let Omar  = new Employee(1004, "Omar Zaid", "Development","Senior");
let Rana = new Employee(1005, "Rana Saleh", "Development","Junior");
let Hadi  = new Employee(1006, "Hadi Ahmad", "Finance","Mid-Senior");

for (let i=0;i<allEmployee.length;i++){
    allEmployee[i].salaryFind();
    allEmployee[i].render();
}