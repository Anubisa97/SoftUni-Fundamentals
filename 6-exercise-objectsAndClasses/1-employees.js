function employees(input) {
  let employe = {};

  for (const name of input) {
    employe[name] = name.length;
  }
  for (const key in employe) {
    console.log(`Name: ${key} -- Personal Number: ${employe[key]}`);
  }
}
employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
