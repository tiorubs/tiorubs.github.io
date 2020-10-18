const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

axios("https://www.fundamentus.com.br/resultado.php").then(({ data }) => {
  const $ = cheerio.load(data, { _useHtmlParser2: true });
  const names = [];
  $("tbody")
    .find("[ckass='res_papel']")
    .each(function () {
      names.push($(this).text());
    });
  console.log(names);
});
