'use strict';
let objectAr =[];

  function readData (){
    let jsonArray =window.localStorage.getItem("Food")
    objectAr =JSON.parse(jsonArray);
    if (objectAr == null){
        console.log("the array is empty");
    } 
     
     console.log(objectAr);
  }


function renderData() {
  let Table= document.getElementById("tableData");
  let rowdata = document.createElement("tr");
  let dataId=document.getElementById("tdId");
  let dataName=document.getElementById("tdName");
  let dataType=document.getElementById("tdType");
  let dataPrice=document.getElementById("tdPrice");

  Table.appendChild(rowdata);
  rowdata.appendChild(dataId);
  rowdata.appendChild(dataName);
  rowdata.appendChild(dataType);
  rowdata.appendChild(dataPrice);

  for (let i = 0; i < objectAr.length; i++) {
  let Id = document.createElement("td");
  let Name = document.createElement("td");
  let Type = document.createElement("td");
  let Price = document.createElement("td");
  
  dataId.appendChild(Id);
  dataName.appendChild(Name);
  dataType.appendChild(Type);
  dataPrice.appendChild(Price);

  Id.textContent= objectAr[i].foodId;
  Name.textContent = objectAr[i].foodName; 
  Type.textContent = objectAr[i].foodType;
  Price.textContent = objectAr[i].price;

  Id.style.display= "flex";
   Name.style.display= "flex";
   Type.style.display= "flex";
   Price.style.display= "flex";
   }


  }
readData();
renderData();
