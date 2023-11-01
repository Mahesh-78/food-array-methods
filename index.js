let products=require('./food.json');

products.forEach(function(product){
    console.log(product);
})


function vegetable(){
    return products.filter((food)=>food.category==="Vegetable")
}
console.log(vegetable())


function fruit(){
    return products.filter((food)=>food.category==="Fruit")
}
console.log(fruit())


function protein(){
    return products.filter((food)=>food.category==="Protein")
}
console.log(protein())


function nuts(){
    return products.filter((food)=>food.category==="Nuts")
}
console.log(nuts())


function grain(){
    return products.filter((food)=>food.category==="Grain")
}
console.log(grain())


function dairy(){
    return products.filter((food)=>food.category==="Dairy")
}
console.log(dairy())


function calorieAbove(calorie){
    return products.filter((food)=>food.calorie>calorie)
}
console.log(calorieAbove(100))


function calorieAbove(calorie){
    return products.filter((food)=>food.calorie<calorie)
}
console.log(calorieAbove(100))


function highToLowProteins(){
    return products.sort((a,b)=>b.protein-a.protein)
}
console.log(highToLowProteins())


function cabs(){
    return products.sort((a,b)=>a.cab-b.cab)
}
console.log(cabs())