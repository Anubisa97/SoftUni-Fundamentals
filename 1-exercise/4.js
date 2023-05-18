function vacation(people, type, day) {
  let total = 0;

  switch (type) {
    case "Students":
      if (day === "Friday") {
        total = people * 8.45;
      } else if (day === "Saturday") {
        total = people * 9.8;
      } else if (day === "Sunday") {
        total = people * 10.46;
      }

      if (people >= 30) {
        total = total * 0.85;
      }
      break;

    case "Business":
      if (people >= 100) {
        people = people - 10;
      }

      if (day === "Friday") {
        total = people * 10.9;
      } else if (day === "Saturday") {
        total = people * 15.6;
      } else if (day === "Sunday") {
        total = people * 16;
      }
      break;

    case "Regular":
      if (day === "Friday") {
        total = people * 15;
      } else if (day === "Saturday") {
        total = people * 20;
      } else if (day === "Sunday") {
        total = people * 22.25;
      }

      if (people >= 10 && people <= 20) {
        total = total * 0.95;
      }
      break;
  }
  console.log(`Total price: ${total.toFixed(2)}`);
}
vacation(30, "Students", "Sunday");
