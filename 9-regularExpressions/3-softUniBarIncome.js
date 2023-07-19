function softUniBarIncome(input) {
  let pattern =
    /%(?<customer>[A-Z][a-z]+)%[^|$%.]*\<(?<product>\w+)\>[^|$%.]*\|(?<count>\d+)\|[^|$%.0-9]*(?<price>[\d]+.?\d+)\$/g;
  let i = 0;

  let totalIncome = 0;
  while (input[i] !== "end of shift") {
    let currentLine = input[i];
    let match = [...currentLine.matchAll(pattern)];

    for (const line of match) {
      let price = Number(line.groups.count) * Number(line.groups.price);

      totalIncome += price;

      console.log(
        `${line.groups.customer}: ${line.groups.product} - ${price.toFixed(2)}`
      );
    }

    i++;
  }
  console.log(`Total income: ${totalIncome.toFixed(2)}`);
}
softUniBarIncome([
  "%InvalidName%<Croissant>|2|10.3$",
  "%Peter%<Gum>1.3$",
  "%Maria%<Cola>|1|2.4",
  "%Valid%<Valid>valid|10|valid20$",
  "end of shift",
]);
