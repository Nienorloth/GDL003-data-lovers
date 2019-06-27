const championsArray = Object.values(LOL.data);
document.getElementById("sortByAttack").addEventListener("click", window.dataManager.sort);
const characterBio = () => {
  document.getElementById("champions").style.display="none";
  document.getElementById("details").style.display="block";
}

const showAll = () => {
<<<<<<< HEAD
    document.getElementById("sortByAttack").style.display="block";
    championsArray.forEach(champion => {
=======
  championsArray.forEach(champion => {
>>>>>>> 7ad48145c5d891ff3badb3ec5b60130a0d4c156a
    let championPic = document.createElement("IMG");
    championPic.setAttribute("src", champion.img);
    championPic.setAttribute("width", "60");
    championPic.setAttribute("height", "60");
    champText.appendChild(championPic);
    champText.innerHTML +=
<<<<<<< HEAD
      " " + champion.name + ", " + champion.title + ". " + champion.tags + ".  ";
    let bioButton = document.createElement("button");
=======
      " " +
      champion.name +
      ", " +
      champion.title +
      ". " +
      champion.tags +
      ".  ";
>>>>>>> 7ad48145c5d891ff3badb3ec5b60130a0d4c156a
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
<<<<<<< HEAD

}


document.getElementById("allChampButton").addEventListener("click", showAll);
document.getElementById("tanksButton").addEventListener("click", window.dataManager.sort);
document.getElementById("magesButton").addEventListener("click", window.dataManager.sort);
document.getElementById("assassinsButton").addEventListener("click", window.dataManager.sort);
document.getElementById("marksmenButton").addEventListener("click", window.dataManager.sort);
document.getElementById("supportButton").addEventListener("click", window.dataManager.sort);
document.getElementById("statButton").addEventListener("click", window.dataManager.sort);
=======
  const characterBio = () => {
    alert("si");
    document.getElementById("champText").style.display = "none";
    document.getElementById("characters").style.display = "block";
  };
  document
    .getElementsbyClassName("Bio")
    .addEventListener("click", characterBio);
};
<script>
function mostrar(){
document.getElementById('nuevaimg').innerHTML = '<img src="ruta-imagen.jpg">';}
</script>
<a href="javascript:mostrar()">Mostrar</a>


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
>>>>>>> 7ad48145c5d891ff3badb3ec5b60130a0d4c156a
