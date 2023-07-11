function еxtractFile(input) {
  let lastSlash = input.lastIndexOf(`\\`);
  let lastFullStop = input.lastIndexOf(`.`);
  let filename = input.substring(lastSlash + 1, lastFullStop);
  let extension = input.substring(lastFullStop + 1);
  console.log(`File name: ${filename}`);
  console.log(`File extension: ${extension}`);
}
еxtractFile("C:\\Internal\\training-internal\\Template.pptx");
