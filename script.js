
const array=[],data=[],url=[];
let iValue=0;let length=20;
let a = document.getElementsByClassName("main-box");
let container = document.createElement("div");
a[0].appendChild(container);
container.setAttribute("class", "container");
let uniqueName;
let uniquebox;


for(let i=0;i<100;i++){
  array.push(await fetch(`https://pokeapi.co/api/v2/pokemon/${i+1}`))
  const resp =await array[i]
  data.push (await resp.json())
  if(i>=0&&i<20){
    domData(data[i])
  }
}

 function dataprovider(){
for(let i=iValue;i<length;i++){
  uniquebox="name"+i;
  domData(data[i])
}
}

// providing data to main page

 function domData(data){
  let div = document.createElement("div");
  div.setAttribute("class", "box");
  div.addEventListener("click",()=>{
    window.location.assign("/pokeid.html?data="+data.id);
  }) 

  let img = document.createElement("img");
  img.src = data.sprites.front_default;
  let p = document.createElement("p");
  let name = document.createElement("h2");
  name.setAttribute("class", "name");
  name.innerHTML = data.name;
  let divFoot = document.createElement("div");
  divFoot.setAttribute("class", "boxFoot");
  // assigning value to tags
  p.innerHTML = data.id;
  div.appendChild(img);
  div.appendChild(name);
  div.appendChild(divFoot);
  div.prepend(p);
  document.querySelector(".container").appendChild(div);

  // loop for pokemon type
  for (let j = 0; j < data.types.length; j++) {
   const  type = document.createElement("span");
    type.innerHTML = data.types[j].type.name;
    divFoot.appendChild(type);
    type.setAttribute("id", uniqueName + j);
    switch (type.innerHTML) {
      case "normal":
        type.style.backgroundColor = "#A8A77A";
        break;
      case "fire":
        type.style.backgroundColor = "#EE8130";
        break;
      case "water":
        type.style.backgroundColor = "#6390F0";
        break;
      case "electric":
        type.style.backgroundColor = "#F7D02C";
        break;
      case "grass":
        type.style.backgroundColor = "#7AC74C";
        break;
      case "ice":
        type.style.backgroundColor = "#96D9D6";
        break;
      case "fighting":
        type.style.backgroundColor = "#C22E28";
        break;
      case "poison":
        type.style.backgroundColor = "#A33EA1";
        break;
      case "ground":
        type.style.backgroundColor = "#E2BF65";
        break;
      case "flying":
        type.style.backgroundColor = "#A98FF3";
        break;
      case "psychic":
        type.style.backgroundColor = "#F95587";
        break;
      case "bug":
        type.style.backgroundColor = "#A6B91A";
        break;
      case "rock":
        type.style.backgroundColor = "#B6A136";
        break;
      case "ghost":
        type.style.backgroundColor = "#735797";
        break;
      case "dragon":
        type.style.backgroundColor = "#6F35FC";
        break;
      case "dark":
        type.style.backgroundColor = "#705746";
        break;
      case "steel":
        type.style.backgroundColor = "#B7B7CE";
        break;
      case "fairy":
        type.style.backgroundColor = "#D685AD";
        break;
      default:
        type.style.backgroundColor = "#FFFFFF";
        type = "unknown";
        break;
    }
  }
}

//function for moving on next page 
function onnext() {
  if (iValue + 20 < data.length) {
    iValue += 20;
    length += 20;
    document.querySelector(".container").remove();
    let container = document.createElement("div");
    container.setAttribute("class", "container");
    a[0].appendChild(container);
    dataprovider();
  } else {
    alert("No more data to load");
  }
}

function onprevious() {
  if (iValue > 0) {
    iValue -= 20;
    length -= 20;
    document.querySelector(".container").remove();
    let container = document.createElement("div");
    container.setAttribute("class", "container");
    a[0].appendChild(container);
    dataprovider();
  } else {
    alert("Can't go back further");
  }
}

// Adding event listeners for navigation
document.getElementById("next").addEventListener("click", onnext);
document.getElementById("previous").addEventListener("click", onprevious);

const webName =document.querySelector('h1');
webName.addEventListener("click",function(){
    location.reload();
});

const toggle=document.getElementById("darkModeToggle");
toggle.addEventListener("click",()=>{
  document.querySelector("body").classList.toggle("dark");

})

//search bar
const search = document.querySelector('.searchBar');
search.addEventListener("input",(e)=> {
 const value = e.target.value;
 if(value==""){
 const element = document.querySelectorAll('.box');
 element.forEach(element => element.remove())
  dataprovider()
 }
 else{
   const element = document.querySelectorAll('.box');
   element.forEach(element => element.remove())
 data.forEach((el)=>{
  if(el.name.includes(value.trim().toLowerCase()))
    domData(el)
 })
}
});
