var a = [];
function add() {
  var productid = document.getElementById("pid").value;
  var productname = document.getElementById("pname").value;
  var productprice = document.getElementById("pprice").value;
  var obj = { id: productid, name: productname, price: productprice };

  if (productid != "" && productname != "" && productprice != "") {
    if (check(productid)) {
      a.push(obj);
      display();
    } else {
      alert("Cant Insert!! (ID Must be Unique!!)");
    }
  } else {
    alert("Fill All Fields!!");
  }
}

function check(b) {
  for (var i = 0; i < a.length; i++) {
    if (a[i].id == b) {
      return false;
    }
  }
  return true;
}
function display() {
    var temp="";
  for (var i = 0; i < a.length; i++) {
    temp +=
      "<tr><td>" +
      a[i].id +
      "</td><td>" +
      a[i].name +
      "</td><td>" +
      a[i].price +
      "</td></tr>";
  }
document.getElementById("check").innerHTML =temp;
}

