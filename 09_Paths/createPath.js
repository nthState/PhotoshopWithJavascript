var document = app.documents.add(1000, 1000, 72, "My first script");

const start = [100, 100];
const finish = [500, 500];

var lineArray = new Array();	
lineArray[0] = new PathPointInfo;
lineArray[0].kind = PointKind.CORNERPOINT;
lineArray[0].anchor = start;
lineArray[0].leftDirection = start;
lineArray[0].rightDirection = start;


lineArray[1] = new PathPointInfo;
lineArray[1].kind = PointKind.CORNERPOINT;
lineArray[1].anchor = finish;
lineArray[1].leftDirection = finish;
lineArray[1].rightDirection = finish;

var lineSubPathArray = new Array();
lineSubPathArray[0] = new SubPathInfo();
lineSubPathArray[0].operation = ShapeOperation.SHAPEXOR;
lineSubPathArray[0].closed = false;
lineSubPathArray[0].entireSubPath = lineArray;

//create the path item
var linepath = document.pathItems.add("A line", lineSubPathArray);
// stroke it so we can see something
linepath.strokePath(ToolType.BRUSH);
myPathItem.strokePath(ToolType.BRUSH);