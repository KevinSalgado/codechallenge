const Reader = require("./lib/utils/reader");

const visualpartners = Reader.readJsonFile("visualpartners.json");

console.log(visualpartners);
