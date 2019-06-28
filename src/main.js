const championsArray = Object.values(LOL.data);

const attackSort = document.getElementById("sortByAttack");
const defenseSort = document.getElementById("sortByDefense");
const magicSort = document.getElementById("sortByMagic");
const difficultySort = document.getElementById("sortByDifficulty");
const aZ = document.getElementById("sortByAZ");
const allChamp = document.getElementById("allChampButton");

/*const characterBio = () => {
  document.getElementById("champions").style.display="none";
  document.getElementById("details").style.display="block";
}*/

let showAll = () => {
  document.getElementById("champions").style.display="block";
  champText.innerHTML = '';
  championsArray.forEach(champion => {
  let championPic = document.createElement("IMG");
  championPic.setAttribute("src", champion.img);
  championPic.setAttribute("width", "60");
  championPic.setAttribute("height", "60");
  champText.appendChild(championPic);
  champText.innerHTML +=
    " " + champion.name + ", " + champion.title + ". " + champion.tags + ".  ";
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
}

let sortByAttack = () => {
    document.getElementById("champions").style.display="block";
    championsArray.sort((championA, championB) => {
    console.log(`${championA.id} A: ${championA.info.attack}`);
    console.log(`${championB.id} B: ${championB.info.attack}`);
    return championB.info.attack - championA.info.attack});
    console.log(championsArray);
    champText.innerHTML = '';
    championsArray.forEach(champion => {
    let championPic = document.createElement("IMG");
    championPic.setAttribute("src", champion.img);
    championPic.setAttribute("width", "60");
    championPic.setAttribute("height", "60");
    champText.appendChild(championPic) 
    champText.innerHTML +=
    " Attack: "+ champion.info.attack + ". " +
    champion.name + ", " + champion.title + ". " + champion.tags + ".  ";
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
}

let sortByDefense = () => {
    document.getElementById("champions").style.display="block";
    championsArray.sort((championA, championB) => {
    console.log(`${championA.id} A: ${championA.info.defense}`);
    console.log(`${championB.id} B: ${championB.info.defense}`);
    return championB.info.defense - championA.info.defense});
    console.log(championsArray);
    champText.innerHTML = '';
    championsArray.forEach(champion => {
    let championPic = document.createElement("IMG");
    championPic.setAttribute("src", champion.img);
    championPic.setAttribute("width", "60");
    championPic.setAttribute("height", "60");
    champText.appendChild(championPic);
    champText.innerHTML +=
    " Defense: "+ champion.info.defense + ". " +
      " " + champion.name + ", " + champion.title + ". " + champion.tags + ".  ";
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

}

let sortByMagic = () => {
document.getElementById("champions").style.display="block";
    championsArray.sort((championA, championB) => {
    console.log(`${championA.id} A: ${championA.info.magic}`);
    console.log(`${championB.id} B: ${championB.info.magic}`);
    return championB.info.magic - championA.info.magic});
    console.log(championsArray);
    champText.innerHTML = '';
    championsArray.forEach(champion => {
    let championPic = document.createElement("IMG");
    championPic.setAttribute("src", champion.img);
    championPic.setAttribute("width", "60");
    championPic.setAttribute("height", "60");
    champText.appendChild(championPic);
    champText.innerHTML +=
    " Magic: "+ champion.info.magic + ". " +
      " " + champion.name + ", " + champion.title + ". " + champion.tags + ".  ";
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
}

let sortByDifficulty = () => {
  document.getElementById("champions").style.display="block";
  championsArray.sort((championA, championB) => {
  console.log(`${championA.id} A: ${championA.info.difficulty}`);
  console.log(`${championB.id} B: ${championB.info.difficulty}`);
  return championB.info.difficulty - championA.info.difficulty});
  console.log(championsArray);
  champText.innerHTML = '';
  championsArray.forEach(champion => {
  let championPic = document.createElement("IMG");
  championPic.setAttribute("src", champion.img);
  championPic.setAttribute("width", "60");
  championPic.setAttribute("height", "60");
  champText.appendChild(championPic);
  champText.innerHTML +=
  " Difficulty: "+ champion.info.difficulty + ". " +
    " " + champion.name + ", " + champion.title + ". " + champion.tags + ".  ";
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
}

let sortByAZ = () => {
  document.getElementById("champions").style.display="block";
    championsArray.sort((championA, championB) => {
    console.log(`${championA.id} A: ${championA.info.name}`);
    console.log(`${championB.id} B: ${championB.info.name}`);
    return championB.info.name - championA.info.name});
    console.log(championsArray);
    champText.innerHTML = '';
    championsArray.forEach(champion => {
    let championPic = document.createElement("IMG");
    championPic.setAttribute("src", champion.img);
    championPic.setAttribute("width", "60");
    championPic.setAttribute("height", "60");
    champText.appendChild(championPic);
    champText.innerHTML +=
      " " + champion.name + ", " + champion.title + ". " + champion.tags + ".  ";
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
}
attackSort.addEventListener("click", sortByAttack);
defenseSort.addEventListener("click", sortByDefense);
magicSort.addEventListener("click", sortByMagic);
difficultySort.addEventListener("click", sortByDifficulty);
aZ.addEventListener("click", sortByAZ);
allChamp.addEventListener("click", showAll);

document.getElementById("allChampButton").addEventListener("click", window.dataManager.sort);
document.getElementById("tanksButton").addEventListener("click", window.dataManager.filter);
document.getElementById("magesButton").addEventListener("click", window.dataManager.filter);
document.getElementById("assassinsButton").addEventListener("click", window.dataManager.filter);
document.getElementById("marksmenButton").addEventListener("click", window.dataManager.filter);
document.getElementById("supportButton").addEventListener("click", window.dataManager.filter);
document.getElementById("statButton").addEventListener("click", window.dataManager.computeStats);
