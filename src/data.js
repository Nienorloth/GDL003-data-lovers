// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window


const filter = () => {
  return 'filter';
};

const sort = () => {
  return 'sort';
};

const computeStats = () => {
  return 'computeStats';
};

window.dataManager = {
  filter,
  sort,
  computeStats
};