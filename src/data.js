

const filterData = () => {
  
  return 'filterData';
};

const sortData = (stats) => {

  document.getElementById("champions").style.display="block";

if (stats === "attack"){ 
    document.getElementById("champions").style.display="block";
    championsArray.sort((championA, championB) => {
    console.log(`${championA.id} A: ${championA.info.attack}`);
    console.log(`${championB.id} B: ${championB.info.attack}`);
    return championB.info.attack - championA.info.attack});
    console.log(championsArray);
    champText.innerHTML = '';
    championsArray.forEach(champion => {
    let champButton = document.createElement("button");
    champButton.className = "picButtons"
    let championPic = document.createElement("IMG");
    championPic.setAttribute("src", champion.img);
    championPic.setAttribute("width", "63");
    championPic.setAttribute("height", "63");
    championPic.setAttribute("border", "6");
    championPic.setAttribute("alt", "Character info");
    champButton.appendChild(championPic);
    champText.appendChild(champButton);
    champText.innerHTML +=
    " " + "Attack: " + champion.info.attack + ". " + champion.name + ", " + champion.title + ". " + champion.tags + ".  <br>";
    });
 } else if (stats === "defense"){
  document.getElementById("champions").style.display="block";
  championsArray.sort((championA, championB) => {
  console.log(`${championA.id} A: ${championA.info.defense}`);
  console.log(`${championB.id} B: ${championB.info.defense}`);
  return championB.info.defense - championA.info.defense});
  console.log(championsArray);
  champText.innerHTML = '';
    championsArray.forEach(champion => {
  let champButton = document.createElement("button");
  champButton.className = "picButtons"
  let championPic = document.createElement("IMG");
  championPic.setAttribute("src", champion.img);
  championPic.setAttribute("width", "63");
  championPic.setAttribute("height", "63");
  championPic.setAttribute("border", "6");
  championPic.setAttribute("alt", "Character info");
  champButton.appendChild(championPic);
  champText.appendChild(champButton);
  champText.innerHTML +=
  " " + "Defense: " + champion.info.defense + ". " + champion.name + ", " + champion.title + ". " + champion.tags + ".  <br>";
    });
}
}

const computeStats = () => {

  return 'computeStats';
};

window.dataManager = {
  filterData,
  sortData,
  computeStats
};
