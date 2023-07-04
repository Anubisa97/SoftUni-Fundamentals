function aMinerTask(input) {
  let resource = {};
  for (let index = 0; index < input.length; index += 2) {
    let type = input[index];
    let value = input[index + 1];
    if (!resource.hasOwnProperty(type)) {
      resource[type] = 0;
    }
    resource[type] += Number(value);
  }
  for (const key in resource) {
    console.log(`${key} -> ${resource[key]}`);
  }
}
aMinerTask(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);
