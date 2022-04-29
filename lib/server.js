const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const { response } = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({ message: "codechallenge Api welcome!" });
});

app.listen(port, () => {
    console.log(`codechallenge API in localhost:${port}`);
});

app.get("/v1/visualpartners/partners", (request, response) => {
    const partners = ExplorerController.getPartners();
    console.log("Haciendo get de los visualpartners");
    response.status(200).json(partners);
});

app.get("/v1/visualpartners/certificado", (request, response) => {
    const partners = ExplorerController.ConCertification();
    console.log("Haciendo get de los sujetos certificados");
    response.status(200).json(partners);
});

app.get("/v1/visualpartners/mayor500", (request, response) => {
    const partners = ExplorerController.mayor();
    console.log("Haciendo get de los sujetos con mas de 500 creditos");
    response.status(200).json(partners);
});
