

const filter = () => {
  const tanks = LOL.data.tags.filter(tags => (LOL.data.tags == 'Tank'));
  document.getElementById('champText').innerHTML= tanks;
  return 'filter';
};

const sort = () => {

  championsArray.sort((championA, championB) => {
    console.log(`${championA.id} A: ${championA.info.attack}`);
    console.log(`${championB.id} B: ${championB.info.attack}`);
    return championB.info.attack - championA.info.attack});
  console.log(championsArray);
};

const computeStats = () => {
  document.getElementById("champText").innerHTML= LOL.data.Aatrox.title;
  document.getElementById("champText").innerHTML= LOL.data.Aatrox.info;

  return 'computeStats';
};

window.dataManager = {
  filter,
  sort,
  computeStats
};
