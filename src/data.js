//Variables globales
const allCharacters = Object.values(LOL.data);
const showChampions = document.getElementById("showChampions");
const sortButtons = document.getElementById("sortButtons");
const statsContainer = document.getElementById("statistics");

const tanks = allCharacters.filter(champion => {return champion.tags.includes("Tank");
});
const mages = allCharacters.filter(champion => {return champion.tags.includes("Mage");
});
const assassins = allCharacters.filter(champion => {return champion.tags.includes("Assassin");
});
const marksmen = allCharacters.filter(champion => {return champion.tags.includes("Marksman");
});
const fighters = allCharacters.filter(champion => {return champion.tags.includes("Fighter");
});
const supports = allCharacters.filter(champion => {return champion.tags.includes("Support");
});

const filterData = stats => {

  //Mostrar div para mostrar y filtrar datos
  showChampions.style.display="block";

  //Variable local de array de todos los personajes para filtrar por rol
  let championsArray = allCharacters;

  //Categoría seleccionada para filtrar
      if (stats === "all") {
        championsArray = allCharacters;
        sortButtons.style.display="block";
      } else if (stats === "tanks"){
        championsArray = tanks;
        sortButtons.style.display="none";

      } else if (stats === "mages"){
        championsArray = mages;
        sortButtons.style.display="none";

      } else if (stats === "assassins"){
        championsArray = assassins;
        sortButtons.style.display="none";

      } else if (stats === "marksmen"){
        championsArray = marksmen;
        sortButtons.style.display="none";

      } else if (stats === "fighters"){
        championsArray = fighters;
        sortButtons.style.display="none";

      } else if (stats === "support"){
        championsArray = supports;
        sortButtons.style.display="none";
      }

    //Mostrar datos filtrados en tarjetas de personaje con modal para mostrar información adicional del personaje
    statsContainer.style.display = "none";  
     showChampions.innerHTML = '';
      championsArray.forEach(champion => {
         showChampions.innerHTML += " " +
     `
         <div class="flip-card">
         <div class="flip-card-inner">
           <div class="flip-card-front">
             <img id="cardPic" src="${champion.splash}" height="220" width="280">
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
    //Funcionalidad de botones iterados para abrir y cerrar modal
        //Declarar variable de botón y dar funcionalidad para abrir modal
         let modalButtons = document.querySelectorAll(".bioButton");
          modalButtons.forEach(modalButton => {
           modalButton.addEventListener("click", () => {

  //Declarar variables de modal y botón X para cerrar modal
           let modal = document.getElementById(modalButton.id + "myModal");
           let spanX = document.getElementById(modalButton.id + "close");               
         
          //Abrir modal
             modal.style.display = "block";

           //Funcionalidad para cerrar modal
            spanX.addEventListener("click", () => {
               modal.style.display = "none";
           });
      });
   });
 });
return 'filterData';

};


//función para ordenar datos 
const sortData = stats => {

 /* let championsToSort = Object.values(dataManager.filterData.championsArray);
  console.log(championsToSort);*/
 let championsToSort = allCharacters;

  if (stats === "attack"){
    championsToSort.sort((championA, championB) => {
      console.log(`${championA.id} A: ${championA.info.attack}`);
      console.log(`${championB.id} B: ${championB.info.attack}`);
        return championB.info.attack - championA.info.attack;
      });
  } else if (stats === "defense"){
    championsToSort.sort((championA, championB) => {
      console.log(`${championA.id} A: ${championA.info.defense}`);
      console.log(`${championB.id} B: ${championB.info.defense}`);
        return championB.info.defense - championA.info.defense;
    });
  } else if (stats === "magic"){
    championsToSort.sort((championA, championB) => {
      console.log(`${championA.id} A: ${championA.info.magic}`);
      console.log(`${championB.id} B: ${championB.info.magic}`);
      return championB.info.magic - championA.info.magic;
    });
  } else if (stats === "difficulty"){
    championsToSort.sort((championA, championB) => {
      console.log(`${championA.id} A: ${championA.info.difficulty}`);
      console.log(`${championB.id} B: ${championB.info.difficulty}`);
      return championB.info.difficulty - championA.info.difficulty;
    });
  } else if (stats === "alphabetically"){
    championsToSort.sort((championA, championB) => {
      let nameA = championA.id.toUpperCase();
      let nameB = championB.id.toUpperCase();
      if (nameA < nameB) {
       return -1;
      }
      return 0;
    });
  }
  // mostrar datos ordenados en tarjetas
  showChampions.innerHTML = '';
  championsToSort.forEach(champion => {
     showChampions.innerHTML += " " +
 `
     <div class="flip-card">
     <div class="flip-card-inner">
       <div class="flip-card-front">
         <img id="cardPic" src="${champion.splash}" height="220" width="280">
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
//Funcionalidad de botones iterados para abrir y cerrar modal
    //Declarar variable de botón y dar funcionalidad para abrir modal
     let modalButtons = document.querySelectorAll(".bioButton");
      modalButtons.forEach(modalButton => {
       modalButton.addEventListener("click", () => {

      //Declarar variables de modal y botón X para cerrar modal
       let modal = document.getElementById(modalButton.id + "myModal");
       let spanX = document.getElementById(modalButton.id + "close");               
     
      //Abrir modal
         modal.style.display = "block";

       //Funcionalidad para cerrar modal
        spanX.addEventListener("click", () => {
           modal.style.display = "none";
       });
  });
});
});

return 'sortData';
};

const computeStats = () => {

// ocultar sección de botones para ordenar
  sortButtons.style.display = "none";
  statsContainer.style.display = "block";
  showChampions.innerHTML = '';

  //array de los porcentajes por cada rol
    const percentsArray = [];
     percentsArray.push(parseInt((tanks.length*100)/134), parseInt((mages.length*100)/134), parseInt((assassins.length*100)/134), parseInt((marksmen.length*100)/134), parseInt((fighters.length*100)/134), parseInt((supports.length*100)/134));
       console.log(percentsArray);

  // mostrar los totales y porcentajes de personajes por rol
  statsContainer.innerHTML = "This archive contains " + allCharacters.length + " champions with the following shared roles:<br>Tanks: " + tanks.length
  + " (" + percentsArray[0] + "%)<br>Mages: " + mages.length + " (" + percentsArray[1] + "%)<br>Assassins: " + assassins.length + " (" + percentsArray[2] + "%)<br>Marksmen: " + marksmen.length + 
  " (" + percentsArray[3] + "%)<br>Fighters: " + fighters.length + " (" + percentsArray[4] + "%)<br>Support characters: " + supports.length + " (" + percentsArray[5] + "%)";

  return "computeStats";
};

window.dataManager = {
  filterData,
  sortData,
  computeStats
};
