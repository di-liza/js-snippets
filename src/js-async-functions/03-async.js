function getFruit(name) {
  const fruits = {
    strawberry: '🍓',
    kiwi: '🥝 ',
    apple: '🍎',
    banana: '🍌',
  };
  return new Promise(resolve => setTimeout(() => resolve(fruits[name]), 500));
}

console.log(1);

async function makeSmothie() {
  try {
    console.time('makeSmothie');

    const apple = getFruit('apple');
    const kiwi = getFruit('kiwi');
    const banana = getFruit('banana');

    const fruits = await Promise.all([apple, kiwi, banana]);
    console.log('fruits:', fruits);

    console.timeEnd('makeSmothie');

    return fruits;
  } catch (error) {
    console.log(error);
  }
}
console.log(2);

makeSmothie().then(console.log);

console.log(3);
