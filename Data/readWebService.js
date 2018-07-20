#include "/Users/chrisdavis/Documents/Projects/PhotoshopWithJavascript/Documents/json2.js"

function callWebservice(host, endpoint, port) {
	data = "none";
	conn = new Socket();
	conn.open (host + ":" + port.toString(), "binary")  
	conn.write ("GET " + endpoint + " HTTP/1.0\r\nHost:" + host + "\r\nConnection: close\r\n\r\n");    
	data = conn.read();  
	conn.close();

	
	return data.substr(data.indexOf("\r\n\r\n")+4);
}

const jsonStr = callWebservice("api.berrysadventures.com", "http://api.berrysadventures.com/", 80);
const json = JSON.parse(jsonStr)
alert(json);


