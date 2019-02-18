var myObject = { 'x': 1, 'y': 2, 'z': 3 };

Object.keys(myObject).map(function(key, index) {
  myObject[key] *= 2;
});
console.log(myObject);

Result:
Object { x: 2, y: 4, z: 6 }