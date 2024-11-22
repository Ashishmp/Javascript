const Marvelheros = ["thor", "Ironman", "spiderman"]
const dcHeros = ["superman", "flash", "batman"]

//Marvelheros.push(dcHeros)
// console.log(Marvelheros);
// console.log(Marvelheros[3][1]);

// const allHeros = Marvelheros.concat(dcHeros)
// console.log(allHeros);

const all_new_heros = [...Marvelheros, ...dcHeros]
// console.log(all_new_heros);

const anotherArr = [1,2,3,[4,5,6],7,[6,7,[8,9,10,[8,5]]]]

const real_another_arr = anotherArr.flat(Infinity)
//console.log(real_another_arr);


console.log((Array.isArray("Ashihs")));
console.log((Array.from("Ashihs")));
console.log((Array.from({name: "Ashihs"})));//intresting


let score1=  100
let score2=  200
let score3=  300

console.log(Array.of(score1, score2,score3, score2));
