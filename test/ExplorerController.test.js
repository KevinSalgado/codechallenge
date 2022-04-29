const Reader = require("./../lib/utils/reader");
const ExplorerController = require("./../lib/controllers/ExplorerController");

describe("Tests for ExplorerController", () => {
  test("1. Regresar todos los estudiantes con todos sus campos", () => {
    const Partners = ExplorerController.getPartners();
    expect(Partners).not.toBeUndefined();
  });
});
