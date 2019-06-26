const championsArray = Object.values(LOL.data);

const showAll = () => {
  let showNames = championsArray.forEach(champion => {
    let x = document.createElement("IMG");
    x.setAttribute("src", champion.img);
    x.setAttribute("width", "60");
    x.setAttribute("height", "60");
    document.getElementById("champText").appendChild(x);
    document.getElementById("champText").innerHTML += " " + champion.name + ", " + champion.title + ". " + champion.tags + ".<br>";
  });
  console.log(showNames);
};
document.getElementById("allChampButton").addEventListener("click", showAll);
document.getElementById("tanksButton").addEventListener("click", window.dataManager.sort);
document.getElementById("magesButton").addEventListener("click", window.dataManager.sort);
document.getElementById("assassinsButton").addEventListener("click", window.dataManager.sort);
document.getElementById("marksmenButton").addEventListener("click", window.dataManager.sort);
document.getElementById("supportButton").addEventListener("click", window.dataManager.sort);
document.getElementById("statButton").addEventListener("click", window.dataManager.sort);
