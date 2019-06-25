const todosCam = () => {
    let x = document.createElement('IMG');
    x.setAttribute('src', LOL.data.Aatrox.img);
    x.setAttribute('width', '48');
    x.setAttribute('height', '48');
    document.body.appendChild(x);
}

let showAll = [];
showAll.map (champion => {
console.log(champion);    
});

document.getElementById('allChampButton').addEventListener('click', todosCam);
document.getElementById('tanksButton').addEventListener('click', window.dataManager.filter);
document.getElementById('magesButton').addEventListener('click', window.dataManager.computeStats);
document.getElementById('assassinsButton').addEventListener('click', window.dataManager.sort);
document.getElementById('marksmenButton').addEventListener('click', window.dataManager.sort);
document.getElementById('supportButton').addEventListener('click', window.dataManager.sort);


