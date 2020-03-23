const students = [

    
     {id: 21, name: 'omor'},
    {id: 31, name:'mannaa'},
    {id: 41, name: 'mosumi'},
    {id: 71, name: 'dip'}
];

const names = students.map( s => s.name);
const ids = students.map( s => s.id);
const bigger = students.filter( s => s.id > 40);
const biggerOne = students.find( s => s.id > 40);

console.log(biggerOne);