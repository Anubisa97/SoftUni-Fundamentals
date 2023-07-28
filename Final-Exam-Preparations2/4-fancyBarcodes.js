function fancyBarcodes(input) {
  let numOfBarcodes = input.shift();
  let pattern = /@[#]{1,}([A-Z][A-Za-z0-9]{4,}[A-Z])@[#]{1,}/;

  for (const line of input) {
    let match = line.match(pattern);
    if (match) {
      let barcode = match[1];
      let productGroup = "";
      for (const char of barcode) {
        let pattern2 = /\d/g;
        match = char.match(pattern2);
        if (match) {
          productGroup += match;
        }
      }
      if (productGroup.length === 0) {
        console.log(`Product group: 00`);
      } else {
        console.log(`Product group: ${productGroup}`);
      }
    } else {
      console.log("Invalid barcode");
    }
  }
}
fancyBarcodes([
  "6",
  "@###Val1d1teM@###",
  "@#ValidIteM@#",
  "##InvaliDiteM##",
  "@InvalidIteM@",
  "@#Invalid_IteM@#",
  "@#ValiditeM@#",
]);
