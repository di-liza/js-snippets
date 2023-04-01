import { faker } from '@faker-js/faker';

console.log('до try... catch');

try {
  myVar;
} catch (error) {
  console.dir(error);
  //console.log(error.stack);
  //console.log(error.name);
  //console.log(error.message);
}

console.log('после try... catch');
