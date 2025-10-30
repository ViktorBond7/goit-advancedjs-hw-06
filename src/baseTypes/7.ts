/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Day {
  mon,
  tue,
  wed,
  thu,
  fri,
  sat,
  sun,
}

const isWeekend = (day: Day): boolean => day === Day.sat || day === Day.sun;
console.log(isWeekend(Day.mon));
