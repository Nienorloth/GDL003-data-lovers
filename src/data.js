let championsArray = Object.values(LOL.data);
console.log(championsArray);
const champText = document.getElementById("champText");

// let estadisticas = (134 / 100) * valor de filtrado
// let letrero = estadisticas + "Este porcentaje es de estte tipo de rol "

//función para filtrar por categoría (rol)
const filterData = stats => {
  if (stats === "all") {
    championsArray = Object.values(LOL.data);
     document.getElementById("champions").style.display="block";
     document.getElementById("champText").style.display="block";
        champText.innerHTML = "";
        championsArray.forEach(champion => {
          let champButton = document.createElement("button");
          champButton.className = "picButtons";
          let championPic = document.createElement("IMG");
            championPic.setAttribute("src", champion.img);
            championPic.setAttribute("width", "63");
            championPic.setAttribute("height", "63");
            championPic.setAttribute("border", "6");
            championPic.setAttribute("alt", "Character info");
            champButton.appendChild(championPic);
            champText.appendChild(champButton);
           champText.innerHTML +=
             " " + champion.name + " " + champion.title + " " + champion.tags + ". <br>";
     });
  } else if (stats === "tanks"){
     championsArray = Object.values(LOL.data);
      document.getElementById("champions").style.display="block";
      document.getElementById("champText").style.display="block";
      let tanks = championsArray.filter(tank => {return tank.tags.includes("Tank")});
        console.log(tanks);
        champText.innerHTML = '';
        tanks.forEach(tank => {
            champText.innerHTML += " " +
        `
        <br>    
        <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src="${tank.splash}" height="360" width="690">
              </div>
              <div class="flip-card-back">
                <h1><img src="${tank.img}" height="70" width="70"></h1>
                <h1>${tank.name}</h1> 
                <h3>${tank.title}</h3>
                <p>${tank.tags}</p>
                <p>Attack: ${tank.info.attack}</p> 
                <p>Defense: ${tank.info.defense}</p>
                <p>Magic: ${tank.info.magic}</p>
                <p>Difficulty: ${tank.info.difficulty}</p>
              </div>
            </div>
          </div>
          <br>
          `;
             championsArray = tanks;
      });

      } else if (stats === "mages"){
        championsArray = Object.values(LOL.data);
        document.getElementById("champions").style.display="block";
        document.getElementById("champText").style.display="block";
          let mages = championsArray.filter(mage => {return mage.tags.includes("Mage")});
          console.log(mages);
          champText.innerHTML = '';
          mages.forEach(mage => {
              champText.innerHTML += " " +
          `
          <br>    
          <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img src="${mage.splash}" height="360" width="690">
                </div>
                <div class="flip-card-back">
                  <h1><img src="${mage.img}" height="70" width="70"></h1>
                  <h1>${mage.name}</h1> 
                  <h3>${mage.title}</h3>
                  <p>${mage.tags}</p>
                  <p>Attack: ${mage.info.attack}</p> 
                  <p>Defense: ${mage.info.defense}</p>
                  <p>Magic: ${mage.info.magic}</p>
                  <p>Difficulty: ${mage.info.difficulty}</p>
                </div>
              </div>
            </div>
            <br>
            `;
               championsArray = mages;
          });

        } else if (stats === "assassins"){
           championsArray = Object.values(LOL.data);
           document.getElementById("champions").style.display="block";
           document.getElementById("champText").style.display="block";
            let assassins = championsArray.filter(assassin => {return assassin.tags.includes("Assassin")});
            console.log(assassins);
            champText.innerHTML = '';
            assassins.forEach(assassin => {
                champText.innerHTML += " " +
            `
            <br>    
            <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img src="${assassin.splash}" height="360" width="690">
                  </div>
                  <div class="flip-card-back">
                    <h1><img src="${assassin.img}" height="70" width="70"></h1>
                    <h1>${assassin.name}</h1> 
                    <h3>${assassin.title}</h3>
                    <p>${assassin.tags}</p>
                    <p>Attack: ${assassin.info.attack}</p> 
                    <p>Defense: ${assassin.info.defense}</p>
                    <p>Magic: ${assassin.info.magic}</p>
                    <p>Difficulty: ${assassin.info.difficulty}</p>
                  </div>
                </div>
              </div>
              <br>
              `;
                 championsArray = assassins;
              });

          } else if (stats === "marksmen"){
             championsArray = Object.values(LOL.data);
             document.getElementById("champions").style.display="block";
             document.getElementById("champText").style.display="block";
              let marksmen = championsArray.filter(marksman => {return marksman.tags.includes("Marksman")});
              console.log(marksmen);
              champText.innerHTML = '';
              marksmen.forEach(marksman => {
                  champText.innerHTML += " " +
              `
              <br>    
              <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img src="${marksman.splash}" height="360" width="690">
                    </div>
                    <div class="flip-card-back">
                      <h1><img src="${marksman.img}" height="70" width="70"></h1>
                      <h1>${marksman.name}</h1> 
                      <h3>${marksman.title}</h3>
                      <p>${marksman.tags}</p>
                      <p>Attack: ${marksman.info.attack}</p> 
                      <p>Defense: ${marksman.info.defense}</p>
                      <p>Magic: ${marksman.info.magic}</p>
                      <p>Difficulty: ${marksman.info.difficulty}</p>
                    </div>
                  </div>
                </div>
                <br>
                `;
                   championsArray = marksmen;
              });

        } else if (stats === "fighters"){
           championsArray = Object.values(LOL.data);
            document.getElementById("champions").style.display="block";
            document.getElementById("champText").style.display="block";
             let fighters = championsArray.filter(fighter => {return fighter.tags.includes("Fighter")});
              console.log(fighters);
              champText.innerHTML = '';
              fighters.forEach(fighter => {
                  champText.innerHTML += " " +
              `
              <br>    
              <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img src="${fighter.splash}" height="360" width="690">
                    </div>
                    <div class="flip-card-back">
                      <h1><img src="${fighter.img}" height="70" width="70"></h1>
                      <h1>${fighter.name}</h1> 
                      <h3>${fighter.title}</h3>
                      <p>${fighter.tags}</p>
                      <p>Attack: ${fighter.info.attack}</p> 
                      <p>Defense: ${fighter.info.defense}</p>
                      <p>Magic: ${fighter.info.magic}</p>
                      <p>Difficulty: ${fighter.info.difficulty}</p>
                    </div>
                  </div>
                </div>
                <br>
                `;
                   championsArray = fighters;
                });

          } else if (stats === "support"){
             championsArray = Object.values(LOL.data);
             document.getElementById("champions").style.display="block";
             document.getElementById("champText").style.display="block";
              let supports = championsArray.filter(support => {return support.tags.includes("Support")});
              console.log(supports);
              champText.innerHTML = '';
              supports.forEach(support => {
                  champText.innerHTML += " " +
              `
              <br>    
              <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img src="${support.splash}" height="360" width="690">
                    </div>
                    <div class="flip-card-back">
                      <h1><img src="${support.img}" height="70" width="70"></h1>
                      <h1>${support.name}</h1> 
                      <h3>${support.title}</h3>
                      <p>${support.tags}</p>
                      <p>Attack: ${support.info.attack}</p> 
                      <p>Defense: ${support.info.defense}</p>
                      <p>Magic: ${support.info.magic}</p>
                      <p>Difficulty: ${support.info.difficulty}</p>
                    </div>
                  </div>
                </div>
                <br>
                `;
                   championsArray = supports;
                  });
            }    
return 'filterData';
};
//función para ordenar datos (todos o filtrados)
const sortData = stats => {
  document.getElementById("champions").style.display = "block";

  if (stats === "attack") {
    document.getElementById("champions").style.display = "block";
    championsArray.sort((championA, championB) => {
      console.log(`${championA.id} A: ${championA.info.attack}`);
      console.log(`${championB.id} B: ${championB.info.attack}`);
        return championB.info.attack - championA.info.attack});
        console.log(championsArray);
        champText.innerHTML = '';
        championsArray.forEach(champion => {
            champText.innerHTML += " " +
        `
        <br>    
        <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src="${champion.splash}" height="360" width="690">
              </div>
              <div class="flip-card-back">
                <h1><img src="${champion.img}" height="70" width="70"></h1>
                <h1>${champion.name}</h1> 
                <h3>${champion.title}</h3>
                <p>${champion.tags}</p>
                <p>Attack: ${champion.info.attack}</p> 
                <p>Defense: ${champion.info.defense}</p>
                <p>Magic: ${champion.info.magic}</p>
                <p>Difficulty: ${champion.info.difficulty}</p>
              </div>
            </div>
          </div>
          <br>
          `;
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
            champText.innerHTML += " " +
        `
        <br>    
        <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src="${champion.splash}" height="360" width="690">
              </div>
              <div class="flip-card-back">
                <h1><img src="${champion.img}" height="70" width="70"></h1>
                <h1>${champion.name}</h1> 
                <h3>${champion.title}</h3>
                <p>${champion.tags}</p>
                <p>Attack: ${champion.info.attack}</p> 
                <p>Defense: ${champion.info.defense}</p>
                <p>Magic: ${champion.info.magic}</p>
                <p>Difficulty: ${champion.info.difficulty}</p>
              </div>
            </div>
          </div>
          <br>
          `;
      });
} else if (stats === "magic"){
    document.getElementById("champions").style.display="block";
      championsArray.sort((championA, championB) => {
        console.log(`${championA.id} A: ${championA.info.magic}`);
        console.log(`${championB.id} B: ${championB.info.magic}`);
        return championB.info.magic - championA.info.magic});
        console.log(championsArray);
        champText.innerHTML = '';
        championsArray.forEach(champion => {
            champText.innerHTML += " " +
        `
        <br>    
        <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src="${champion.splash}" height="360" width="690">
              </div>
              <div class="flip-card-back">
                <h1><img src="${champion.img}" height="70" width="70"></h1>
                <h1>${champion.name}</h1> 
                <h3>${champion.title}</h3>
                <p>${champion.tags}</p>
                <p>Attack: ${champion.info.attack}</p> 
                <p>Defense: ${champion.info.defense}</p>
                <p>Magic: ${champion.info.magic}</p>
                <p>Difficulty: ${champion.info.difficulty}</p>
              </div>
            </div>
          </div>
          <br>
          `;
      });
} else if (stats === "diff"){
    document.getElementById("champions").style.display="block";
      championsArray.sort((championA, championB) => {
        console.log(`${championA.id} A: ${championA.info.difficulty}`);
        console.log(`${championB.id} B: ${championB.info.difficulty}`);
        return championB.info.difficulty - championA.info.difficulty});
        console.log(championsArray);
        champText.innerHTML = '';
        championsArray.forEach(champion => {
            champText.innerHTML += " " +
        `
        <br>    
        <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src="${champion.splash}" height="360" width="690">
              </div>
              <div class="flip-card-back">
                <h1><img src="${champion.img}" height="70" width="70"></h1>
                <h1>${champion.name}</h1> 
                <h3>${champion.title}</h3>
                <p>${champion.tags}</p>
                <p>Attack: ${champion.info.attack}</p> 
                <p>Defense: ${champion.info.defense}</p>
                <p>Magic: ${champion.info.magic}</p>
                <p>Difficulty: ${champion.info.difficulty}</p>
              </div>
            </div>
          </div>
          <br>
          `;
});
} else if (stats === "alphabetically"){
    document.getElementById("champions").style.display="block";
      championsArray.sort((championA, championB) => {
      let nameA = championA.id.toUpperCase();
      let nameB = championB.id.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      return 0;
    });
    champText.innerHTML = '';
    championsArray.forEach(champion => {
        champText.innerHTML += " " +
    `
    <br>    
    <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src="${champion.splash}" height="360" width="690">
          </div>
          <div class="flip-card-back">
            <h1><img src="${champion.img}" height="70" width="70"></h1>
            <h1>${champion.name}</h1> 
            <h3>${champion.title}</h3>
            <p>${champion.tags}</p>
            <p>Attack: ${champion.info.attack}</p> 
            <p>Defense: ${champion.info.defense}</p>
            <p>Magic: ${champion.info.magic}</p>
            <p>Difficulty: ${champion.info.difficulty}</p>
          </div>
        </div>
      </div>
      <br>
      `;
  });
}
return 'sortData';
};

const computeStats = () => {
  return "computeStats";
};

window.dataManager = {
  filterData,
  sortData,
  computeStats
};
