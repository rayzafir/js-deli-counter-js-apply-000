function takeANumber(line) {
  var katzDeli= []
  for (let n=1; n<katzDeli.length; n++)
  var n=1
  if (n=1, n++)
  var length= line.length; 
 return (`Welcome, ${name}. You are number ${length} in line.`);
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length>0){
  var line= katzDeliLine.shift();
    return `Currently serving ${line}.`;
  }
  else{
   return "There is nobody waiting to be served!";
  }
}
function currentLine (line) {
 if (line.length>0) {
    var statement="The line is currently:";
    for (var i=0; i<line.length ; i++) {
  statement += ` ${i+1}. ${line[i]}`;
  if (i<line.length -1) {
    statement += ",";
  }
    }
   return statement;
 }else{
     return "The line is currently empty.";
 }
}