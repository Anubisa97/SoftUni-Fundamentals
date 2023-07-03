function oddOccurrences(input) {
  let occurrences = input.toLowerCase().split(` `);
  let object = {};
  for (const iterator of occurrences) {
    if (!object.hasOwnProperty(iterator)) {
      object[iterator] = 0;
    }
    object[iterator] += 1;
  }

  let result = {};
  for (const key in object) {
    if (object[key] % 2 !== 0) {
      result[key] = object[key];
    }
  }
  let final = "";
  let resultSorted = Object.entries(result).sort((a, b) => b[1] - a[1]);
  resultSorted.forEach((element) => {
    final += `${element[0]} `;
  });

  //   let result = Object.entries(object)
  //     .filter((a) => a[1] % 2 !== 0)
  //     .sort((a, b) => b[1] - a[1]);
  //   let final = "";
  //   result.forEach((element) => {
  //     final += `${element[0]} `;
  //   });

  console.log(final);
}
oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
