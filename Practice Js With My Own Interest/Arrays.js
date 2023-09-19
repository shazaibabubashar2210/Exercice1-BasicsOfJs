console.log("Task 01");
let fruits=["Apple","Banana","Cherry"];
console.log(fruits);
for(let i=0; i<fruits.length;i++)
{
    console.log(`Fruits ${i+1} is ${fruits[i]}`);
}
console.log("Task 02");
fruits.push("grapes");

for(let i=0; i<fruits.length;i++)
{
    console.log(`Fruits ${i+1} is ${fruits[i]}`);
}

// Task 03
console.log("Task 03");
fruits=fruits.slice(1);
console.log(fruits);

// Task 04
console.log("Task04");
console.log("Fruit Bannana Exist in the fruits",fruits.includes("Banana"));