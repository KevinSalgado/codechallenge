const Reader = require("./../lib/utils/reader");
const ExplorerController = require("./../lib/controllers/ExplorerController");

describe("Tests for ExplorerController", () => {
    test("1. Regresar todos los estudiantes con todos sus campos", () => {
        const Partners = ExplorerController.getPartners();
        expect(Partners).not.toBeUndefined();
    });

    test("2. Regresar los partners con certification", () => {
        const Partners = ExplorerController.ConCertification();
        expect(Partners).not.toBeUndefined();
    });

    test("3. Regresar los partners con mas de 500 creditos", () => {
        const Partners = ExplorerController.mayor();
        expect(Partners).not.toBeUndefined();
    });
});
