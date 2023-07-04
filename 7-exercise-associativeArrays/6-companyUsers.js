function companyUsers(input) {
  let companies = {};
  for (const iterator of input) {
    let [company, id] = iterator.split(` -> `);
    if (!companies.hasOwnProperty(company)) {
      companies[company] = [];
    }
    if (!companies[company].includes(id)) {
      companies[company].push(id);
    }
  }
  let result = Object.entries(companies).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  for (const key of result) {
    let name = key[0];
    console.log(name);
    for (const iterator of key[1]) {
      console.log(`-- ${iterator}`);
    }
  }
}
companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> CC12344",
  "Lenovo ->  XX23456",
  "SoftUni -> AA12345",
  "Movement -> DD11111",
]);
