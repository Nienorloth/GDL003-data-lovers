const championsArray = Object.values(LOL.data);
let bioButton = document.createElement("button");

const showAll = () => {
    championsArray.forEach(champion => {
    let championPic = document.createElement("IMG");
    championPic.setAttribute("src", champion.img);
    championPic.setAttribute("width", "60");
    championPic.setAttribute("height", "60");
    champText.appendChild(championPic);
    champText.innerHTML +=
      " " + champion.name + ", " + champion.title + ". " + champion.tags + ".  ";
    bioButton.innerHTML = "Biography";
    bioButton.className = "Bio";
    champText.appendChild(bioButton);
    let statsButton = document.createElement("button");
    statsButton.innerHTML = "Stats";
    champText.appendChild(statsButton);
    champText.innerHTML += "<br>"
  });
  const characterBio = () => {
    alert("si");
  document.getElementById("champText").style.display = "none";
  document.getElementById("characters").style.display = "block";
  }
  document.getElementsbyClassName("Bio").addEventListener("click", characterBio);
};

document.getElementById("allChampButton").addEventListener("click", showAll);
document
  .getElementById("tanksButton")
  .addEventListener("click", window.dataManager.sort);
document
  .getElementById("magesButton")
  .addEventListener("click", window.dataManager.sort);
document
  .getElementById("assassinsButton")
  .addEventListener("click", window.dataManager.sort);
document
  .getElementById("marksmenButton")
  .addEventListener("click", window.dataManager.sort);
document
  .getElementById("supportButton")
  .addEventListener("click", window.dataManager.sort);
document
  .getElementById("statButton")
  .addEventListener("click", window.dataManager.sort);

