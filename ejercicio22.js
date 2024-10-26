const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

const newArray = [];

for (let i = 0; i < foodSchedule.length; i++) {
    if(foodSchedule[i].isVegan){
        newArray.push(foodSchedule[i]);
    } else{
        newArray.push({name: fruits[i],isVegan: true})
    }
}

console.log(newArray);