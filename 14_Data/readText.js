var users = []
var datFile = File("/Users/chrisdavis/Documents/Projects/PhotoshopWithJavascript/Documents/users.dat");
datFile.open ('r');
while (!datFile.eof) {
	var line = datFile.readln();
	users.push(line)
}
datFile.close();

alert(users);