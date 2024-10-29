function manageStudents() {
    let students = ["Alice", "Bob", "Charlie"];
    
    function addStudent(name, index) {
        students.splice(index, 0, name);
        return students;
    }

    function hasStudent(name) {
        return students.includes(name);
    }

    function getStudentsList() {
        return students.join(",");
    }

    // Test Cases
    function runTests() {
        console.log("Test 1: Add 'David' at index 1");
        addStudent("David", 1);
        console.log(students); 

        console.log("Test 2: Check if 'Eve' is in the list");
        console.log(hasStudent("Eve")); 

        console.log("Test 3: Check if 'David' is in the list");
        console.log(hasStudent("David")); 

        console.log("Test 4: Get comma-separated list of students");
        console.log(getStudentsList()); 

        console.log("Additional Tests:");

        addStudent("Eve", 0); 
        console.log("Add 'Eve' at the beginning:", students);

        addStudent("Frank", students.length); 
        console.log("Add 'Frank' at the end:", students);

        console.log("Check if 'Alice' is in the list:", hasStudent("Alice")); 
        console.log("Check if 'Zara' is in the list:", hasStudent("Zara")); 

        console.log("Final comma-separated list:", getStudentsList());
    }

    runTests();
}

manageStudents();
