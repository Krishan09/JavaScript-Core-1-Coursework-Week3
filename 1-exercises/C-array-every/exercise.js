/*
   This program should check if the array `group` contains only students
*/

var students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
//var students = ["Austine", "Dany", "Swathi", "Daniel"];
var group = ["Austine", "Dany", "Swathi", "Daniel"];

//var groupIsOnlyStudents; // complete this statement

function isStudents(group, index) {
  // Took me a while to figure out how to compare the group with students array until I realised
  // that .every() sends the index of the currently being processed element
  return group === students[index];
}

let groupIsOnlyStudents = group.every(isStudents);

if (groupIsOnlyStudents) {
  
  console.log("The group contains only students");
} else {
  console.log("The group does not contain only students");
}

/* EXPECTED RESULT */

// The group does not contain only students
