function deleteUndefinedKeys(data) {
  //code here
  if(data.length == 0) return 'no data'
  let p =[]
  for(let i=0;i<data.length;i++){
      let hasil ={}
  for(a in data[i]){
    if(data[i][a] !== undefined) hasil[a] = data[i][a]
  }
  p.push(hasil)
 } return p
}

console.log(deleteUndefinedKeys([{
    name: 'Dimitri',
    address: undefined,
    email: 'dimitri@mail.com',
    age: undefined,
    gender: 'male'
  },
  {
    name: 'Alexei',
    address: 'Earth',
    email: undefined,
    age: 18,
    gender: 'male'
  }
]));
/*
  [ { name: 'Dimitri', email: 'dimitri@mail.com', gender: 'male' },
    { name: 'Alexei', address: 'Earth', age: 18, gender: 'male' } ]
*/

console.log(deleteUndefinedKeys([{
    band: 'Ghost',
    formed: 2006,
    members: ['Papa Emeritus', 'Alpha', 'Omega', 'Water', 'Wind', 'Earth'],
    genre: 'Heavy Metal',
    rating: undefined
  },
  {
    band: 'BABYMETAL',
    formed: undefined,
    members: ['SU-METAL', 'MOAMETAL', 'YUIMETAL'],
    genre: 'Kawaii Metal',
    rating: undefined
  },
  {
    band: 'Avatar',
    formed: 2006,
    members: undefined,
    genre: undefined,
    rating: 5
  }
]));
/*
[ { band: 'Ghost',
    formed: 2006,
    members: [ 'Papa Emeritus', 'Alpha', 'Omega', 'Water', 'Wind', 'Earth' ],
    genre: 'Heavy Metal' },
  { band: 'BABYMETAL',
    members: [ 'SU-METAL', 'MOAMETAL', 'YUIMETAL' ],
    genre: 'Kawaii Metal' },
  { band: 'Avatar', formed: 2006, rating: 5 } ]
*/

console.log(deleteUndefinedKeys([]));
// No data