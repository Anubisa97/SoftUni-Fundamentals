function loadingBar(input) {
  if (input === 100) {
    console.log(`100% Complete!`);
    console.log(`[%%%%%%%%%%]`);
    return;
  }
  let percent = input / 10;
  let remaining = 10 - percent;

  console.log(`${input}% [${"%".repeat(percent)}${".".repeat(remaining)}]`);
  console.log(`Still loading...`);
}
loadingBar(100);
