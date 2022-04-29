const Reader = require("./lib/utils/reader");
const ExplorerController = require("./lib/controllers/ExplorerController");

//const visualpartners = Reader.readJsonFile("visualpartners.json");

const get = ExplorerController.getPartners();
console.log(get);

//console.log(visualpartners);
