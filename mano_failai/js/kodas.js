
//// 1, 2 užduotis
//let students = [
//  {
//    name: "Jonas",
//    surname: "Jonaitis",
//    university: "VDU",
//    course: 4,
//    marks: [2, 5, 7, 9]
//  },
//  {
//    name: "Petras",
//    surname: "Petraitis",
//    university: "KTU",
//    course: 3,
//    marks: [10, 5, 7, 8]
//  },
//  {
//    name: "Antanas",
//    surname: "Antanaitis",
//    university: "VIKO",
//    course: 1,
//    marks: [10, 9, 4, 5]
//  },
//  {
//    name: "Jurga",
//    surname: "Jurgaite",
//    university: "VU",
//    course: 4,
//    marks: [4, 7, 5, 10]
//  },
//  {
//    name: "Ana",
//    surname: "Anaite",
//    university: "LSMU",
//    course: 1,
//    marks: [8, 9, 10, 5]
//  },
//];
//
//// 3 užduotis
//console.log("Fifth student:" + " " + students[4].name + " " + students[4].surname);
//
//// 4 užduotis
//console.log("Name: " + students[3].name + "; " + "Marks: " + students[3]["marks"]);
//
//// 5 užduotis
//console.log("Marks:");
//for (let i = 0; i < students.length; i++) {
//  console.log("Students: " + students[i].name + " " + students[i].surname);
//  console.log("Marks:");
//  for (let j = 0; j < students[i].marks.length; j++) {
//    console.log(students[i].marks[j]);
//  }
//  console.log(" ");
//}
//
//// 6 užduotis
//let index0 = 0; // Pavyzdžiui, norime pakeisti antro studento pažymius
//let index1 = 1;
//let index2 = 2;
//let index3 = 3;
//let index4 = 4;
//
//console.log(students[index4].marks);
//
//for (let i = 0; i < students[index4].marks.length; i++) {
//    if (students[index4].marks[i] < 10) {
//    students[index4].marks[i]++;
//  }
//}
//
//console.log(
//    students[index4].marks[0],
//    students[index4].marks[1],
//    students[index4].marks[3]);
//
//// 7 užduotis
//
//console.log(
//    students[index4].marks[0] +
//    students[index4].marks[1] +
//    students[index4].marks[3]);
//
//// 8 užduotis
//console.log(
//    students[index4].marks[0] *
//    students[index4].marks[3]);
//
//// 9 užduotis
//if (typeof students[index0].course === 'number') {
//  console.log('The value is a number');
//}  else if (typeof value !== 'number') {
//  console.log('The value is not a number');
//}
//
//// 10 užduotis
//if (students[index0].course === 4) {
//  console.log('course is 4');
//}  else if (typeof value !== 4) {
//  console.log('course is not 4');
//}


//// Generuojamas atsitiktinis skaicius nuo 0 iki 1 neimtinai
//let atsitiktinisSkaicius = Math.random();
//
//// atsitiktinis skaicius dauginamas iš 10
//atsitiktinisSkaicius *= 10;
//
//// Suapvalinsiu atsitiktini skaiciu iki sveiko skaiciaus
//atsitiktinisSkaicius = Math.floor(atsitiktinisSkaicius);
//
//// ir t.t.
//console.log(atsitiktinisSkaicius)
//
//
//random = Math.random() * 10 + 1
//let randomNumb = Math.ceil(random);
//console.log(randomNumb);