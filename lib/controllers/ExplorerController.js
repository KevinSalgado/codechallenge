const reader = require("./../utils/reader");

class ExplorerController {
  static getPartners() {
    const Partners = reader.readJsonFile("visualpartners.json");

    return Partners;
  }
}

module.exports = ExplorerController;
