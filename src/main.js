const showImage = () => {
  let x = document.createElement("IMG");
  x.setAttribute("src", LOL.data.Aatrox.img);
  x.setAttribute("width", "48");
  x.setAttribute("height", "48");
  document.body.appendChild(x);
};
const championsArray = Object.values(LOL.data);
//let showAllArray = [];
const showAll = () => {
  let showNames = championsArray.forEach(champion => {
    let x = document.createElement("IMG");
    x.setAttribute("src", champion.img);
    x.setAttribute("width", "48");
    x.setAttribute("height", "48");
    document.body.appendChild(x);
    document.getElementById("champText").innerHTML += champion.name + " " + champion.title + " " + champion.tags;
  });
  console.log(showNames);
  //document.getElementById("champText").innerHTML = showNames;
};
document.getElementById("allChampButton").addEventListener("click", showAll);
document
  .getElementById("tanksButton")
  .addEventListener("click", window.dataManager.filter);
document
  .getElementById("magesButton")
  .addEventListener("click", window.dataManager.computeStats);
document
  .getElementById("assassinsButton")
  .addEventListener("click", window.dataManager.sort);
document
  .getElementById("marksmenButton")
  .addEventListener("click", window.dataManager.sort);
document
  .getElementById("supportButton")
  .addEventListener("click", window.dataManager.sort);
