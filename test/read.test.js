const Reader = require("./../lib/utils/reader");

describe("Tests for reader", () => {
    test("1. Hacer un reader del visualpartners.json", () => {
        const explorers = Reader.readJsonFile("visualpartners.json");
        expect(explorers).not.toBeUndefined();
    });
});
