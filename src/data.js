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
     champText.innerHTML = '';
     championsArray.forEach(champion => {
         champText.innerHTML += " " +
     `
         <div class="flip-card">
         <div class="flip-card-inner">
           <div class="flip-card-front">
             <img src="${champion.splash}" height="220" width="280">
           </div>
           <div class="flip-card-back">
             <h1>${champion.name}</h1> 
             <h3>${champion.title}</h3>
             <p>${champion.tags}</p>
             <p>Attack: ${champion.info.attack}</p> 
             <p>Defense: ${champion.info.defense}</p>
             <p>Magic: ${champion.info.magic}</p>
             <p>Difficulty: ${champion.info.difficulty}</p>
             <button class="bioButton" id="${champion.name}">About ${champion.name}</button>
           </div>
         </div>
       </div>
       <div id="${champion.name}myModal" class="modal" style="background-image:url(${champion.splash})">
       <div class="modal-content">
         <span class="close" id="${champion.name}close">&times;</span>
          <p id="about">${champion.blurb}</p>
       </div>
     </div>
       `
       let modalButtons = document.querySelectorAll(".bioButton");
         modalButtons.forEach(modalButton => {
           modalButton.addEventListener("click", () => {

           //get the modal
           let modalB = document.getElementById(modalButton.id + "myModal");

            //get the span element that closes the modal
           let spanB = document.getElementById(modalButton.id + "close");               
    
             //when clicks on button open modal
             modalB.style.display = "block";

           //when clicks on span close modal
            spanB.onclick = () => {
               modalB.style.display = "none";
           }
           });
       });
   });
  } else if (stats === "tanks"){
     championsArray = Object.values(LOL.data);
      document.getElementById("champions").style.display="block";
      document.getElementById("champText").style.display="inline";
      let tanks = championsArray.filter(tank => {return tank.tags.includes("Tank");
    });
        champText.innerHTML = '';
        tanks.forEach(tank => {
            champText.innerHTML += " " +
        `
            <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src="${tank.splash}" height="220" width="280">
              </div>
              <div class="flip-card-back">
                <h1>${tank.name}</h1> 
                <h3>${tank.title}</h3>
                <p>${tank.tags}</p>
                <p>Attack: ${tank.info.attack}</p> 
                <p>Defense: ${tank.info.defense}</p>
                <p>Magic: ${tank.info.magic}</p>
                <p>Difficulty: ${tank.info.difficulty}</p>
                <button class="bioButton" id="${tank.name}">About ${tank.name}</button>
              </div>
            </div>
          </div>
          <div id="${tank.name}myModal" class="modal" style="background-image:url(${tank.splash})">
          <div class="modal-content">
            <span class="close" id="${tank.name}close">&times;</span>
             <p id="about">${tank.blurb}</p>
          </div>
        </div>
          `
          let modalButtons = document.querySelectorAll(".bioButton");
            modalButtons.forEach(modalButton => {
              modalButton.addEventListener("click", () => {

              //get the modal
              let modalB = document.getElementById(modalButton.id + "myModal");

               //get the span element that closes the modal
              let spanB = document.getElementById(modalButton.id + "close");               
       
                //when clicks on button open modal
                modalB.style.display = "block";

              //when clicks on span close modal
               spanB.onclick = () => {
                  modalB.style.display = "none";
              }
              });
          });
             championsArray = tanks;
      });
      } else if (stats === "mages"){
        championsArray = Object.values(LOL.data);
        document.getElementById("champions").style.display="block";
        document.getElementById("champText").style.display="block";
          let mages = championsArray.filter(mage => {return mage.tags.includes("Mage");
        });
        champText.innerHTML += "";
        mages.forEach(mage => {
        champText.innerHTML += " " +
        `
            <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src="${mage.splash}" height="220" width="280">
              </div>
              <div class="flip-card-back">
                <h1>${mage.name}</h1> 
                <h3>${mage.title}</h3>
                <p>${mage.tags}</p>
                <p>Attack: ${mage.info.attack}</p> 
                <p>Defense: ${mage.info.defense}</p>
                <p>Magic: ${mage.info.magic}</p>
                <p>Difficulty: ${mage.info.difficulty}</p>
                <button class="bioButton" id="${mage.name}">About ${mage.name}</button>
              </div>
            </div>
          </div>
          <div id="${mage.name}myModal" class="modal" style="background-image:url(${mage.splash})">
          <div class="modal-content">
            <span class="close" id="${mage.name}close">&times;</span>
             <p id="about">${mage.blurb}</p>
          </div>
        </div>
          `
          let modalButtons = document.querySelectorAll(".bioButton");
            modalButtons.forEach(modalButton => {
              modalButton.addEventListener("click", () => {
   
              //get the modal
              let modalB = document.getElementById(modalButton.id + "myModal");
   
               //get the span element that closes the modal
              let spanB = document.getElementById(modalButton.id + "close");               
       
                //when clicks on button open modal
                modalB.style.display = "block";
   
              //when clicks on span close modal
               spanB.onclick = () => {
                  modalB.style.display = "none";
              }
              });
              championsArray = mages;
          });               
        });
        } else if (stats === "assassins"){
           championsArray = Object.values(LOL.data);
           document.getElementById("champions").style.display="block";
           document.getElementById("champText").style.display="block";
            let assassins = championsArray.filter(assassin => {
            return assassin.tags.includes("Assassin");
          });
            console.log(assassins);
            champText.innerHTML = '';
            assassins.forEach(assassin => {
              champText.innerHTML += " " +
              `
                  <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img src="${assassin.splash}" height="220" width="280">
                    </div>
                    <div class="flip-card-back">
                      <h1>${assassin.name}</h1> 
                      <h3>${assassin.title}</h3>
                      <p>${assassin.tags}</p>
                      <p>Attack: ${assassin.info.attack}</p> 
                      <p>Defense: ${assassin.info.defense}</p>
                      <p>Magic: ${assassin.info.magic}</p>
                      <p>Difficulty: ${assassin.info.difficulty}</p>
                      <button class="bioButton" id="${assassin.name}">About ${assassin.name}</button>
                    </div>
                  </div>
                </div>
                <div id="${assassin.name}myModal" class="modal" style="background-image:url(${assassin.splash})">
                <div class="modal-content">
                  <span class="close" id="${assassin.name}close">&times;</span>
                   <p id="about">${assassin.blurb}</p>
                </div>
              </div>
                `
                let modalButtons = document.querySelectorAll(".bioButton");
                  modalButtons.forEach(modalButton => {
                    modalButton.addEventListener("click", () => {
         
                    //get the modal
                    let modalB = document.getElementById(modalButton.id + "myModal");
         
                     //get the span element that closes the modal
                    let spanB = document.getElementById(modalButton.id + "close");               
             
                      //when clicks on button open modal
                      modalB.style.display = "block";
         
                    //when clicks on span close modal
                     spanB.onclick = () => {
                        modalB.style.display = "none";
                    }
                    });
                       championsArray = assassins;
              });
            });
          } else if (stats === "marksmen"){
             championsArray = Object.values(LOL.data);
             document.getElementById("champions").style.display="block";
             document.getElementById("champText").style.display="block";
              let marksmen = championsArray.filter(marksman => {
                return marksman.tags.includes("Marksman");
              });
              console.log(marksmen);
              champText.innerHTML = '';
              marksmen.forEach(marksman => {
                champText.innerHTML += " " +
                `
                    <div class="flip-card">
                    <div class="flip-card-inner">
                      <div class="flip-card-front">
                        <img src="${marksman.splash}" height="220" width="280">
                      </div>
                      <div class="flip-card-back">
                        <h1>${marksman.name}</h1> 
                        <h3>${marksman.title}</h3>
                        <p>${marksman.tags}</p>
                        <p>Attack: ${marksman.info.attack}</p> 
                        <p>Defense: ${marksman.info.defense}</p>
                        <p>Magic: ${marksman.info.magic}</p>
                        <p>Difficulty: ${marksman.info.difficulty}</p>
                        <button class="bioButton" id="${marksman.name}">About ${marksman.name}</button>
                      </div>
                    </div>
                  </div>
                  <div id="${marksman.name}myModal" class="modal" style="background-image:url(${marksman.splash})">
                  <div class="modal-content">
                    <span class="close" id="${marksman.name}close">&times;</span>
                     <p id="about">${marksman.blurb}</p>
                  </div>
                </div>
                  `
                  let modal = document.getElementById("myModal");         
                  let modalButtons = document.querySelectorAll(".bioButton");
                    modalButtons.forEach(modalButton => {
                      modalButton.addEventListener("click", () => {
           
                      //get the modal
                      let modalB = document.getElementById(modalButton.id + "myModal");
           
                       //get the span element that closes the modal
                      let spanB = document.getElementById(modalButton.id + "close");               
               
                        //when clicks on button open modal
                        modalB.style.display = "block";
           
                      //when clicks on span close modal
                       spanB.onclick = () => {
                          modalB.style.display = "none";
                      }
                      });
                           championsArray = marksmen;
              });
            });

        } else if (stats === "fighters"){
           championsArray = Object.values(LOL.data);
            document.getElementById("champions").style.display="block";
            document.getElementById("champText").style.display="block";
             let fighters = championsArray.filter(fighter => {
             return fighter.tags.includes("Fighter");
            });
              console.log(fighters);
              champText.innerHTML = '';
              fighters.forEach(fighter => {
                champText.innerHTML += " " +
                `
                    <div class="flip-card">
                    <div class="flip-card-inner">
                      <div class="flip-card-front">
                        <img src="${fighter.splash}" height="220" width="280">
                      </div>
                      <div class="flip-card-back">
                        <h1>${fighter.name}</h1> 
                        <h3>${fighter.title}</h3>
                        <p>${fighter.tags}</p>
                        <p>Attack: ${fighter.info.attack}</p> 
                        <p>Defense: ${fighter.info.defense}</p>
                        <p>Magic: ${fighter.info.magic}</p>
                        <p>Difficulty: ${fighter.info.difficulty}</p>
                        <button class="bioButton" id="${fighter.name}">About ${fighter.name}</button>
                      </div>
                    </div>
                  </div>
                  <div id="${fighter.name}myModal" class="modal" style="background-image:url(${fighter.splash})">
                  <div class="modal-content">
                    <span class="close" id="${fighter.name}close">&times;</span>
                     <p id="about">${fighter.blurb}</p>
                  </div>
                </div>
                  `
                  let modalButtons = document.querySelectorAll(".bioButton");
                    modalButtons.forEach(modalButton => {
                      modalButton.addEventListener("click", () => {
           
                      //get the modal
                      let modalB = document.getElementById(modalButton.id + "myModal");
           
                       //get the span element that closes the modal
                      let spanB = document.getElementById(modalButton.id + "close");               
               
                        //when clicks on button open modal
                        modalB.style.display = "block";
           
                      //when clicks on span close modal
                       spanB.onclick = () => {
                          modalB.style.display = "none";
                      }
                      });
                     championsArray = fighters;
                  });
                });
      } else if (stats === "support"){
        championsArray = Object.values(LOL.data);
         document.getElementById("champions").style.display="block";
         document.getElementById("champText").style.display="block";
          let supports = championsArray.filter(support => {
          return support.tags.includes("Support");
         });
           champText.innerHTML = '';
           supports.forEach(support => {
             champText.innerHTML += " " +
             `
                 <div class="flip-card">
                 <div class="flip-card-inner">
                   <div class="flip-card-front">
                     <img src="${support.splash}" height="220" width="280">
                   </div>
                   <div class="flip-card-back">
                     <h1>${support.name}</h1> 
                     <h3>${support.title}</h3>
                     <p>${support.tags}</p>
                     <p>Attack: ${support.info.attack}</p> 
                     <p>Defense: ${support.info.defense}</p>
                     <p>Magic: ${support.info.magic}</p>
                     <p>Difficulty: ${support.info.difficulty}</p>
                     <button class="bioButton" id="${support.name}">About ${support.name}</button>
                   </div>
                 </div>
               </div>
               <div id="${support.name}myModal" class="modal" style="background-image:url(${support.splash})">
               <div class="modal-content">
                 <span class="close" id="${support.name}close">&times;</span>
                  <p id="about">${support.blurb}</p>
               </div>
             </div>
               `
               let modalButtons = document.querySelectorAll(".bioButton");
                 modalButtons.forEach(modalButton => {
                   modalButton.addEventListener("click", () => {
        
                   //get the modal
                   let modalB = document.getElementById(modalButton.id + "myModal");
        
                    //get the span element that closes the modal
                   let spanB = document.getElementById(modalButton.id + "close");               
            
                     //when clicks on button open modal
                     modalB.style.display = "block";
        
                   //when clicks on span close modal
                    spanB.onclick = () => {
                       modalB.style.display = "none";
                   }
                   });
                  championsArray = supports;
               });
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
        return championB.info.attack - championA.info.attack;
      });
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
        return championB.info.defense - championA.info.defense;
      });
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
        return championB.info.magic - championA.info.magic;
      });
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
        return championB.info.difficulty - championA.info.difficulty;
      });
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

const computeStats = (allCharacters) => {
  let arrayStatistics = [];

  arrayStatistics.push({
    Role: "Tanks",
    Count: filterData(allCharacters, "Tanks").length
  });

  arrayStatistics.push({
    Role: "Mages",
    Count: filterData(allCharacters, "Mages").length
  });

  arrayStatistics.push({
    Role: "Assassins",
    Count: filterData(allCharacters, "Assassins").length
  });

  arrayStatistics.push({
    Role: "Marksmen",
    Count: filterData(allCharacters, "Marksmen").length
  });

  arrayStatistics.push({
    Role: "Fighters",
    Count: filterData(allCharacters, "Fighters").length
  });

  arrayStatistics.push({
    Role: "Support",
    Count: filterData(allCharacters, "Support").length
  });
  return "computeStats";
};

window.dataManager = {
  filterData,
  sortData,
  computeStats
};
