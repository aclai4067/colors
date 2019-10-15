import colors from './colors';

const colorArr = colors.getColors();

const forEachFunc = () => {
  for (let i = 0; i < colorArr.length; i += 1) {
    console.log('for', colorArr[i].name);
  }
  colorArr.forEach((color) => console.log('forEach', color.name));
};

const filterFunc = () => {
  const newColors = [];
  for (let n = 0; n < colorArr.length; n += 1) {
    if (colorArr[n].hexValue[0] === 'F') {
      newColors.push(colorArr[n]);
    }
  }
  console.log('for', newColors);
  const filterColors = colorArr.filter((c) => c.hexValue[0] === 'F');
  console.log('filter', filterColors);
};

const findFunc = () => {
  let colorToFind = {};
  for (let x = 0; x < colorArr.length; x += 1) {
    if (colorArr[x].name === 'green') {
      colorToFind = colorArr[x];
    }
  }
  console.log('for', colorToFind.hexValue);
  const colorFind = colorArr.find((col) => col.name === 'green');
  console.log('find', colorFind.hexValue);
  // find returns one object, don't use for multiple. filter is good for multiples
};

const mapFunc = () => {
  const h1Tags = [];
  for (let y = 0; y < colorArr.length; y += 1) {
    h1Tags.push(`<h1>${colorArr[y].name}</h1>`);
  }
  console.log('for', h1Tags);
  const mapColor = colorArr.map((clr) => `<h1>${clr.name}</h1>`);
  console.log('map', mapColor);
  // you will use this in react
};

const reduceFunc = () => {
  let total = 0;
  for (let z = 0; z < colorArr.length; z += 1) {
    total += colorArr[z].upVotes;
  }
  console.log('for', total);
  const upVoteToal = colorArr.reduce((prev, curr) => prev + curr.upVotes, 0);
  console.log('reduce', upVoteToal);
  // doesn't have to be used on numbers, prev = 0 & can also be [], curr = array
};

const init = () => {
  forEachFunc();
  filterFunc();
  findFunc();
  mapFunc();
  reduceFunc();
};

export default { init };
