const cheerio = require("cheerio");
const axios = require("axios");
const colors = require("colors");

const fetched = () => {
  axios.get("https://arstechnica.com/").then(urlResponse => {
  const $ = cheerio.load(urlResponse.data);
  //console.log($("meta").attr("content"));
  $("meta").each((i,element) => {
    const name_prop = $(element).attr("name") || $(element).attr("property");
    const content = $(element).attr("content");
    console.log(name_prop+" -> "+content.cyan);
  });
  }).catch(error => {
      return error;
  });
}
fetched();