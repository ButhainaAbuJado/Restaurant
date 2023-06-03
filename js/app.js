'use strict';
let foodCid=1;
let allfood=[];
function resForm(name, type, price){
    this.foodId=0;
    this.foodName = name;
    this.foodType= type;
    this.price = price;

   allfood.push(this);
};

resForm.prototype.generatingID = function(){
 this.foodId=foodCid;
        foodCid=foodCid+1;
        return(this.foodId);
}

let saveValues = document.getElementById('resForm');
  saveValues.addEventListener('submit', handler);

    function handler(e){
    e.preventDefault();
    let Name =  e.target.name.value;
    let Type =  e.target.type.value;
    let price = e.target.price.value;
    let food = new resForm(Name, Type, price);
      food.generatingID();
  storeData();
  }
  
  
  function storeData(){
    let jsonArray = JSON.stringify(allfood);
    window.localStorage.setItem("Food", jsonArray);
    console.log(jsonArray);
  }
