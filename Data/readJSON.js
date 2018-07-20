//https://github.com/douglascrockford/JSON-js
#include "/Users/chrisdavis/Documents/Projects/PhotoshopWithJavascript/Documents/json2.js"

const jsonFile = File("/Users/chrisdavis/Documents/Projects/PhotoshopWithJavascript/Documents/users.json");
jsonFile.open ('r');
const users = JSON.parse(jsonFile.read());
jsonFile.close();

alert(users['users'][0].name);
