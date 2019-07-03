
let championsArray = Object.values(LOL.data);
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
const champImage = document.getElementById("champImage");

const statsScreen = () => {
  document.getElementById("champions").style.display="none";
  document.getElementById("champText").style.display="none";
  document.getElementById("statistics").style.display="block";
}
attackSort.addEventListener("click", (event) => {
   let stats = event.target.dataset.stats
   window.dataManager.sortData(stats);
});
defenseSort.addEventListener("click", (event) => {
   let stats = event.target.dataset.stats
   window.dataManager.sortData(stats);
});
magicSort.addEventListener("click", (event) => {
   let stats = event.target.dataset.stats;
   window.dataManager.sortData(stats);
});
difficultySort.addEventListener("click", (event) => {
  let stats = event.target.dataset.stats;
  window.dataManager.sortData(stats);
});
aZ.addEventListener("click", (event) => {
  let stats = event.target.dataset.stats;
  window.dataManager.sortData(stats);
});

allChamp.addEventListener("click",(event) => {
  let stats = event.target.dataset.stats;
  window.dataManager.filterData(stats);
});
tanksFilter.addEventListener("click", (event) => {
  let stats = event.target.dataset.stats;
  window.dataManager.filterData(stats);
});
magesFilter.addEventListener("click", (event) => {
  let stats = event.target.dataset.stats;
  window.dataManager.filterData(stats);
});
assassinsFilter.addEventListener("click", (event) => {
  let stats = event.target.dataset.stats;
  window.dataManager.filterData(stats);
});
marksmenFilter.addEventListener("click", (event) => {
  let stats = event.target.dataset.stats;
  window.dataManager.filterData(stats);
});
fightersFilter.addEventListener("click", (event) => {
  let stats = event.target.dataset.stats;
  window.dataManager.filterData(stats);
});
supportFilter.addEventListener("click", (event) => {
  let stats = event.target.dataset.stats;
  window.dataManager.filterData(stats);
});
statButton.addEventListener("click", statsScreen);