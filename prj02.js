class Contact {
    constructor(name, phone, email){
        this.name = name;
        this.phone = phone;
        this.email = email;
    }
    
    display(){
        console.log("Name: " + this.name);
        console.log("Phone: " + this.phone);
        console.log("Email: " + this.email);
    }
}

class Instructor extends Contact{
    constructor(name, phone, email, department, course){
        super(name, phone, email);
        this.department = department;
        this.course = course;
    }
    display(){
        console.log("Name:" + this.name);
        console.log("Phone: " + this.phone);
        console.log("Email: " + this.email);
        console.log("Department: " + this.department);
        console.log("Course: " + this.course);
        document.getElementById("iResponse").innerHTML = "Check Console!";
    }
}

class Student extends Contact{
    constructor(name, phone, email, gpa, major){
        super(name, phone, email);
        this.gpa = gpa;
        this.major = major;
        if (gpa >= 2.0){
            this.academicStanding = "Good";
        } 
        else {
            this.academicStanding = "Inelligable";
        }
    }
    display(){
        console.log("Name:" + this.name);
        console.log("Phone: " + this.phone);
        console.log("Email: " + this.email);
        console.log("GPA: " + this.gpa);
        console.log("Major: " + this.major);
        console.log("Academic Standing: " + this.academicStanding);
        document.getElementById("sResponse").innerHTML = "Check Console!";
    }
}

function createStudent(){
    var sName = document.getElementById("studentName").value;
    var sPhone = document.getElementById("studentPhone").value;
    var sEmail = document.getElementById("studentEmail").value;
    var sGPA = document.getElementById("studentGPA").value;
    var sMajor = document.getElementById("studentMajor").value;
    
    let newStudent = new Student(sName, sPhone, sEmail, sGPA, sMajor);
    newStudent.display();
}

function createInstructor(){
    var iName = document.getElementById("instName").value;
    var iPhone = document.getElementById("instPhone").value;
    var iEmail = document.getElementById("instEmail").value;
    var iDept = document.getElementById("instDepartment").value;
    var iCourse = document.getElementById("instCourse").value;
    
    let newInstructor = new Instructor(iName, iPhone, iEmail, iDept, iCourse);
    newInstructor.display();
}