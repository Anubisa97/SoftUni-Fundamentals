function bonusScoringSystem(input) {
  let array = input.map((x) => Number(x));
  let studentsNum = array.shift();
  let lecturesNum = array.shift();
  let additionalBonus = array.shift() + 5;
  let topAttendance = 0;

  for (const iterator of array) {
    if (iterator > topAttendance) {
      topAttendance = iterator;
    }
  }
  let bonus = topAttendance / lecturesNum;
  let totalBonus = bonus * additionalBonus;

  console.log(`Max Bonus: ${Math.round(totalBonus)}.`);
  console.log(`The student has attended ${topAttendance} lectures.`);
}
bonusScoringSystem([
  "10",
  "30",
  "14",
  "8",
  "23",
  "27",
  "28",
  "15",
  "17",
  "25",
  "26",
  "5",
  "18",
]);
