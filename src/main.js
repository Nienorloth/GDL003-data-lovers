const championsArray = Object.values(LOL.data);
document
  .getElementById("sortByAttack")
  .addEventListener("click", window.dataManager.sort);
const characterBio = () => {
  document.getElementById("champions").style.display = "none";
  document.getElementById("details").style.display = "block";
};

const showAll = () => {
  document.getElementById("sortByAttack").style.display = "block";
  championsArray.forEach(champion => {
    let championPic = document.createElement("IMG");
    championPic.setAttribute("src", champion.img);
    championPic.setAttribute("width", "60");
    championPic.setAttribute("height", "60");
    champText.appendChild(championPic);
    champText.innerHTML +=
      " " +
      champion.name +
      ", " +
      champion.title +
      ". " +
      champion.tags +
      ".  ";
    let bioButton = document.createElement("button");
    bioButton.innerHTML = "Biography";
    bioButton.className = "Bio";
    champText.appendChild(bioButton);
    //document.getElementsByClassName("Bio").addEventListener("click", characterBio);
    let statsButton = document.createElement("button");
    statsButton.innerHTML = "Stats";
    statsButton.className = "Bio";
    champText.appendChild(statsButton);
    champText.innerHTML += "<br>";
  });
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
