const capital = (s) => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
}

function loadFile(filePath) {
  var result = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", filePath, false);
  xmlhttp.send();
  if (xmlhttp.status == 200) {
    result = xmlhttp.responseText;
  }
  return result;
}

function swtloreCheck() {
    var cb = document.getElementById("swtrole").checked;
    if (cb == true) document.getElementById("swtlore").innerHTML = "They can randomly switch role!";
    else document.getElementById("swtlore").innerHTML = "They can't switch role...";
    return cb;
    }

function nameAnalyze() {
    var swtr = swtloreCheck();
    var p1 = document.getElementById("p1").value;
    var p2 = document.getElementById("p2").value;
    if (p1.length <= 0 || p2.length <= 0) {
        alert("Please provide a name!");
        return undefined;
    }
    if (swtr == true) {
        var rnd = Math.floor(Math.random() * 2) + 1;
        if (rnd == 2) {p2 = [p1, p1 = p2][0];}
    };
    var arr = [capital(p1), capital(p2)];
    return arr;
}

function premiseAnalyze() {
    var name = nameAnalyze();
    const totalpremise = 24;
    var rnd = Math.floor(Math.random() * totalpremise) + 1;
    var file = "premise/" + rnd;
    var premise = loadFile(file);
    premise = premise.replace(/%a/g, name[0]);
    premise = premise.replace(/%b/g, name[1]);
    return premise;
}
    
function makeAdorable() {
    // the function name is for the sake of making fluffness. real stuff check all the function above.
    document.getElementById("premise").innerHTML = premiseAnalyze();
    
}