function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];

    Student.prototype.addMarks = function(...marksToAdd) {
        if (this.marks) {
            this.marks.push(...marksToAdd);
        } else {
            console.log("Student is excluded and cannot add marks.");
        }
    };

    Student.prototype.getAverage = function() {
        if (!this.marks || this.marks.length === 0) {
            return 0;
        }
        const sum = this.marks.reduce((total, mark) => total + mark, 0);
        return sum / this.marks.length;
    };
}

function createStudent() {
    let name = document.getElementById("name").value;
    let gender = document.getElementById("gender").value;
    let age = parseInt(document.getElementById("age").value);
    window.student = new Student(name, gender, age);
    document.getElementById("output").innerHTML = `<p>Student ${name} created.</p>`;
}

function addMarks() {
    if (!window.student) {
        document.getElementById("output").innerHTML = "<p>Create a student first.</p>";
        return;
    }

    let marksInput = document.getElementById("marks").value;
    let marksToAdd = marksInput.split(",").map(mark => parseInt(mark));
    window.student.addMarks(...marksToAdd);
    document.getElementById("output").innerHTML = `<p>Marks ${marksToAdd} added.</p>`;
}

function calculateAverage() {
    if (!window.student) {
        document.getElementById("output").innerHTML = "<p>Create a student first.</p>";
        return;
    }

    let average = window.student.getAverage();
    document.getElementById("output").innerHTML = `<p>Average marks: ${average}</p>`;
}
