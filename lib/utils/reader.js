const fs = require("fs");

class reader {
    static readJsonFile(path) {
        const rawdata = fs.readFileSync(path);
        const visualpartners = JSON.parse(rawdata);
        return visualpartners;
    }
}

module.exports = reader;
