const reader = require("./../utils/reader");
const fs = require("fs");

class ExplorerController {
  static getPartners() {
    const Partners = reader.readJsonFile("visualpartners.json");

    return Partners;
  }

  static ConCertification() {
    const explorers = reader.readJsonFile("visualpartners.json");
    const StackExplorers = function (explorer) {
      if (explorer.haveCertification) {
        return explorer;
      } else {
        return {};
      }
    };
    const explorersInMission = explorers.map((explorer) =>
      StackExplorers(explorer)
    );

    return explorersInMission;
  }

  static mayor() {
    const explorers = reader.readJsonFile("visualpartners.json");
    const MayorExplorers = function (explorer) {
      if (explorer.credits > 500) {
        return explorer;
      } else {
        return {};
      }
    };

    const explorersMayor = explorers.map((explorer) =>
      MayorExplorers(explorer)
    );

    return explorersMayor;
  }
}

module.exports = ExplorerController;
