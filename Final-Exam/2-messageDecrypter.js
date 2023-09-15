function messageDecrypter(input) {
  let n = input.shift();
  let pattern =
    /^([$]|[%])(?<tag>[A-Z][a-z]{2,})\1:\s\[(\d+)\]\|\[(\d+)\]\|\[(\d+)\]\|$/m; //може g да трябва

  for (const line of input) {
    let result = line.match(pattern);
    if (result) {
      let tag = result.groups.tag;
      let message =
        String.fromCharCode(result[3]) +
        String.fromCharCode(result[4]) +
        String.fromCharCode(result[5]);
      console.log(`${tag}: ${message}`);
    } else {
      console.log("Valid message not found!");
    }
  }
}
messageDecrypter([
  "3",
  "This shouldnt be valid%Taggy%: [118]|[97]|[108]|",
  "$tAGged$: [97][97][97]|",
  "$Request$: [73]|[115]|[105]|true",
]);
