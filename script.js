let button = document.querySelector("button");
let textdiv = document.getElementById("text");

button.addEventListener("click", function () {
  let awakeinput = document.querySelector(".awakeSel");
  let sleepinput = document.querySelector(".sleepSel");

  let delaytimeearly = array[parseInt(awakeinput.value) + 3];
  let delaytimelate = array[parseInt(awakeinput.value) + 4];
  let latesttimeearly = sleeparr[parseInt(sleepinput.value) - 18];
  let latesttimelate = sleeparr[parseInt(sleepinput.value) - 22];

  textdiv.textContent = "";
  let node = document.createElement("p");
  let nodetwo = document.createElement("p");
  let textnode = document.createTextNode(
    "Your safer window is between " +
      delaytimelate +
      " and " +
      latesttimelate +
      "."
  );
  let textnodetwo = document.createTextNode(
    "Your riskier window is between " +
      delaytimeearly +
      " and " +
      latesttimeearly +
      "."
  );
  node.appendChild(textnode);
  nodetwo.appendChild(textnodetwo);
  textdiv.appendChild(node);
  textdiv.appendChild(nodetwo);
});

let array = [
  "04:30am",
  "05:00am",
  "05:30am",
  "06:00am",
  "06:30am",
  "07:00am",
  "07:30am",
  "08:00am",
  "08:30am",
  "09:00am",
  "09:30am",
  "10:00am",
  "10:30am",
  "11:00am",
  "11:30am",
  "12:00pm",
  "12:30pm",
  "1:00pm",
  "1:30pm",
  "2:00pm",
  "2:30pm",
  "3:00pm",
];

let sleeparr = [
  "00:00am",
  "00:30am",
  "01:00am",
  "01:30am",
  "02:00am",
  "02:30am",
  "03:00am",
  "03:30am",
  "04:00am",
  "04:30am",
  "05:00am",
  "05:30am",
  "06:00am",
  "06:30am",
  "07:00am",
  "07:30am",
  "08:00am",
  "08:30am",
  "09:00am",
  "09:30am",
  "10:00am",
  "10:30am",
  "11:00am",
  "11:30am",
  "12:00pm",
  "12:30pm",
  "1:00pm",
  "1:30pm",
  "2:00pm",
  "2:30pm",
  "3:00pm",
  "3:30pm",
  "4:00pm",
  "4:30pm",
  "5:00pm",
  "5:30pm",
  "6:00pm",
  "6:30pm",
  "7:00pm",
  "7:30pm",
  "8:00pm",
  "8:30pm",
  "9:00pm",
  "9:30pm",
  "10:00pm",
  "10:30pm",
  "11:00pm",
  "11:30pm",
  "00:00am",
  "00:30am",
  "01:00am",
  "01:30am",
  "02:00am",
  "02:30am",
  "03:00am",
  "03:30am",
  "04:00am",
];
