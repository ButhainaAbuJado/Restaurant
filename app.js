'use strict';
let foodCid=1;
let allfood=[];
function FoodForm(name, type, price){
    this.foodId=0;
    this.foodName = name;
    this.foodType= type;
    this.price = price;
    this.generatingID =function(){ 
        this.foodId=foodCid;
        foodCid=foodCid+1;
        return(this.foodId);
   },
   allfood.push(this);
};

FoodForm.prototype.render = function () {
    var id = this.generatingID();
    var name = this.foodName;
    var type = this.foodType;
    var price = this.price;
    var table = document.getElementById("tableData");
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    row.insertCell(0).innerHTML=id;
    row.insertCell(1).innerHTML= name;
    row.insertCell(2).innerHTML= type;
    row.insertCell(3).innerHTML= price;
   }

  function handler(e){
    e.preventDefault();
    let Name =  e.target.name.value;
    let Type =  e.target.type.value;
    let price = e.target.price.value;
    let food = new resForm(Name, Type, price);
    food.render();
    console.log(food);
  }
  let saveValues = document.getElementById('FoodForm');
  saveValues.addEventListener('submit', handler)
