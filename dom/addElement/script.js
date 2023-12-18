document.getElementById("myid").innerHTML = '<div id="box"></div>';

function addBox() {
  //   document.getElementById("box").innerHTML += "<button class=button></button>";
  document.getElementById("box").innerHTML =
    document.getElementById("box").innerHTML + "<button class=button></button>";
}
