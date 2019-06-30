let championsArray = Object.values(LOL.data);
let tanks = 0;
let mages = 0;
let assasins = 0;
let marksmen = 0;
let fighters = 0;
let supports = 0;
const attackSort = document.getElementById("sortByAttack");
const defenseSort = document.getElementById("sortByDefense");
const magicSort = document.getElementById("sortByMagic");
const difficultySort = document.getElementById("sortByDifficulty");
const aZ = document.getElementById("sortByAZ");
const allChamp = document.getElementById("allChampButton");
const tanksFilter = document.getElementById("tanksButton");
const magesFilter = document.getElementById("magesButton");
const assassinsFilter = document.getElementById("assassinsButton");
const marksmenFilter = document.getElementById("marksmenButton");
const fightersFilter = document.getElementById("fightersButton");
const supportFilter = document.getElementById("supportButton");
const statButton = document.getElementById("statButton");

const characterBio = () => {
  document.getElementById("champions").style.display="none";
  document.getElementById("statistics").style.display="block";
}
let showAll = () => {
  championsArray = Object.values(LOL.data);
  document.getElementById("champions").style.display="block";
  document.getElementById("champText").style.display="block";
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
  " " + champion.name + ", " + champion.title + ". " + champion.tags + ".  <br>";
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
let sortByMagic = () => {
    document.getElementById("champions").style.display="block";
    championsArray.sort((championA, championB) => {
    console.log(`${championA.id} A: ${championA.info.magic}`);
    console.log(`${championB.id} B: ${championB.info.magic}`);
    return championB.info.magic - championA.info.magic});
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
    " " + "Magic: " + champion.info.magic + ". " + champion.name + ", " + champion.title + ". " + champion.tags + ".  <br>";
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
  " " + "Difficulty: " + champion.info.difficulty + ". " + + champion.name + ", " + champion.title + ". " + champion.tags + ".  <br>";
  });
}
let sortByAZ = () => {
    document.getElementById("champions").style.display="block";
    championsArray.sort((championA, championB) => {
    let nameA = championA.id.toUpperCase();
    let nameB = championB.id.toUpperCase();
    if (nameA < nameB) {
      return -1
    }
    return 0;
    });
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
      " " + champion.name + ", " + champion.title + ". " + champion.tags + ".  <br>";
    });
}
const tanksFunc = () => {
  championsArray = Object.values(LOL.data);
  document.getElementById("champions").style.display="block";
  document.getElementById("champText").style.display="block";
    tanks = championsArray.filter(tank => {return tank.tags.includes("Tank")});
    console.log(tanks);
    champText.innerHTML = "";
    tanks.forEach(tank => {
      let tankButton = document.createElement("button");
      tankButton.className = "picButtons";
      let tankPic = document.createElement("IMG");
      tankPic.setAttribute("src", tank.img);
      tankPic.setAttribute("width", "63");
      tankPic.setAttribute("height", "63");
      tankPic.setAttribute("border", "6");
      tankPic.setAttribute("alt", "Character info");
      tankButton.appendChild(tankPic);
      champText.appendChild(tankButton);
      champText.innerHTML +=
      " " + tank.name + " " + tank.title + " " + tank.tags + ". <br>";
      championsArray = tanks;
    });
    } 
    const magesFunc = () => {
      championsArray = Object.values(LOL.data);
      document.getElementById("champions").style.display="block";
      document.getElementById("champText").style.display="block";
          mages = championsArray.filter(mage => {return mage.tags.includes("Mage")});
      console.log(mages);
      champText.innerHTML = "";
      mages.forEach(mage => {
        let mageButton = document.createElement("button");
        mageButton.className = "picButtons";
        let magePic = document.createElement("IMG");
        magePic.setAttribute("src", mage.img);
        magePic.setAttribute("width", "63");
        magePic.setAttribute("height", "63");
        magePic.setAttribute("border", "6");
        magePic.setAttribute("alt", "character info");
        mageButton.appendChild(magePic);
        champText.appendChild(mageButton);
        champText.innerHTML +=
        " " + mage.name + " " + mage.title + " " + mage.tags + ". <br>";
        championsArray = mages;
      });
      } 
      const assassinsFunc = () => {
        championsArray = Object.values(LOL.data);
        document.getElementById("champions").style.display="block";
        document.getElementById("champText").style.display="block";
              assassins = championsArray.filter(assassin => {return assassin.tags.includes("Assassin")});
        console.log(assassins);
        champText.innerHTML = "";
        assassins.forEach(assassin => {
          let assassinButton = document.createElement("button");
          assassinButton.className = "picButtons";
          let assassinPic = document.createElement("IMG");
          assassinPic.setAttribute("src", assassin.img);
          assassinPic.setAttribute("width", "63");
          assassinPic.setAttribute("height", "63");
          assassinPic.setAttribute("border", "6");
          assassinPic.setAttribute("alt", "Character info");
          assassinButton.appendChild(assassinPic);
          champText.appendChild(assassinButton);
          champText.innerHTML +=
          " " + assassin.name + " " + assassin.title + " " + assassin.tags + ". <br>";
          championsArray = assassins;
        });
        }   
    const marksmenFunc = () => {
      championsArray = Object.values(LOL.data);
      document.getElementById("champions").style.display="block";
      document.getElementById("champText").style.display="block";
          marksmen = championsArray.filter(marksman => {return marksman.tags.includes("Marksman")});
      console.log(marksmen);
      champText.innerHTML = "";
      marksmen.forEach(marksman => {
        let marksmanButton = document.createElement("button");
        marksmanButton.className = "picButtons";
        let marksmanPic = document.createElement("IMG");
        marksmanPic.setAttribute("src", marksman.img);
        marksmanPic.setAttribute("width", "63");
        marksmanPic.setAttribute("height", "63");
        marksmanPic.setAttribute("border", "6");
        marksmanPic.setAttribute("alt", "Character info");
        marksmanButton.appendChild(marksmanPic);
        champText.appendChild(marksmanButton);
        champText.innerHTML +=
        " " + marksman.name + " " + marksman.title + " " + marksman.tags + ". <br>";
        championsArray = marksmen;
      });
      } 
      const fightersFunc = () => {
        championsArray = Object.values(LOL.data);
        document.getElementById("champions").style.display="block";
        document.getElementById("champText").style.display="block";
              fighters = championsArray.filter(fighter => {return fighter.tags.includes("Fighter")});
        console.log(fighters);
        champText.innerHTML = "";
        fighters.forEach(fighter => {
          let fighterButton = document.createElement("button");
          fighterButton.className = "picButtons";
          let fighterPic = document.createElement("IMG");
          fighterPic.setAttribute("src", fighter.img);
          fighterPic.setAttribute("width", "63");
          fighterPic.setAttribute("height", "63");
          fighterPic.setAttribute("border", "6");
          fighterPic.setAttribute("alt", "Character info");
          fighterButton.appendChild(fighterPic);
          champText.appendChild(fighterButton);
          champText.innerHTML +=
          " " + fighter.name + " " + fighter.title + " " + fighter.tags + ". <br>";
          championsArray = fighters;
        });
        } 
        const supportFunc = () => {
          championsArray = Object.values(LOL.data);
          document.getElementById("champions").style.display="block";
          document.getElementById("champText").style.display="block";
                  supports = championsArray.filter(support => {return support.tags.includes("Support")});
          console.log(supports);
          champText.innerHTML = "";
          supports.forEach(support => {
            let supportButton = document.createElement("button");
            supportButton.className = "picButtons";
            let supportPic = document.createElement("IMG");
            supportPic.setAttribute("src", support.img);
            supportPic.setAttribute("width", "63");
            supportPic.setAttribute("height", "63");
            supportPic.setAttribute("border", "6");
            supportPic.setAttribute("alt", "Character info");
            supportButton.appendChild(supportPic);
            champText.appendChild(supportButton);
            champText.innerHTML +=
            " " + support.name + " " + support.title + " " + support.tags + ". <br>";
            championsArray = supports;
          });
          }     
    
    
attackSort.addEventListener("click", sortByAttack);
defenseSort.addEventListener("click", sortByDefense);
magicSort.addEventListener("click", sortByMagic);
difficultySort.addEventListener("click", sortByDifficulty);
aZ.addEventListener("click", sortByAZ);
allChamp.addEventListener("click", showAll);

tanksFilter.addEventListener("click", tanksFunc);
magesFilter.addEventListener("click", magesFunc);
assassinsFilter.addEventListener("click", assassinsFunc);
marksmenFilter.addEventListener("click", marksmenFunc);
fightersFilter.addEventListener("click", fightersFunc);
supportFilter.addEventListener("click", supportFunc);
statButton.addEventListener("click", characterBio);