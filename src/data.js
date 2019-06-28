

const filter = () => {
  const tanks = LOL.data.tags.filter(tags => (LOL.data.tags == 'Tank'));
  document.getElementById('champText').innerHTML= tanks;
  return 'filter';
};

const sort = () => {
  document.getElementById("champions").style.display="block";
  if (allChamp.clicked == true){ 
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

} else if (attackSort.clicked == true){ 
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
  
 } else if (defenseSort.clicked == true){
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
}

const computeStats = () => {

  return 'computeStats';
};

window.dataManager = {
  filter,
  sort,
  computeStats
};
