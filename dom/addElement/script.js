document.getElementById("root").innerHTML = '<div id="box"></div>';

function addBox() {
  document.getElementById("box").innerHTML +=
    "<button class=button><div id='count'>1</div></button>";
    document.getElementById("count").innerText++;
  // document.getElementById("count").innerText++;
  // document.getElementById("box").innerHTML =
  //   document.getElementById("box").innerHTML + "<button class=button></button>";
}
