const para = window.location.search;
const id = para.substring(para.indexOf("=") + 1);

fetch(`https://pokeapi.co/api/v2/pokemon/` + id)
  .then((res) => res.json())
  .then((data) => display(data));

function display(output) {
  console.log(output)
  const button=document.querySelectorAll('button')
  console.log(button)
  document.getElementById("next").addEventListener("click", nextImage);
  document.getElementById("previous").addEventListener("click", prevImage);
  
  const imgurl = [
    output.sprites.other['official-artwork'].front_default,
    output.sprites.other['official-artwork'].front_shiny,
    output.sprites.other['home'].front_default,
    output.sprites.other['home'].front_shiny,
    
  ];

  let index = 0;
  function updateImage() {
    document.querySelector("img").src = imgurl[index];
  }

  function nextImage() {
    index = (index + 1) % imgurl.length;
    updateImage();
  }

  function prevImage() {
    index = (index - 1 + imgurl.length) % imgurl.length;
    updateImage();
  }
  document.querySelector("h1").innerHTML = output.name;
  document.querySelector(".pokeweight").innerHTML += output.weight + " KG";
  document.querySelector(".pokeheight").innerHTML += output.height + " M";
  document.querySelector("img").src = output.sprites.other['official-artwork'].front_default;
  document.querySelector(".Hp").style.width =
    (output.stats[0].base_stat / 200) * 100 + "%";
  document.querySelector(".hpval").innerHTML +=
    " : " + output.stats[0].base_stat;
  document.querySelector(".Attack").style.width =
    (output.stats[1].base_stat / 200) * 100 + "%";
  document.querySelector(".Attackval").innerHTML +=
    " : " + output.stats[1].base_stat;
  document.querySelector(".specialAttack").style.width =
    (output.stats[2].base_stat / 200) * 100 + "%";
  document.querySelector(".spattackval").innerHTML +=
    " : " + output.stats[2].base_stat;
  document.querySelector(".Defense").style.width =
    (output.stats[3].base_stat / 200) * 100 + "%";
  document.querySelector(".defenseval").innerHTML +=
    " : " + output.stats[3].base_stat;
  document.querySelector(".specialDefense").style.width =
    (output.stats[4].base_stat / 200) * 100 + "%";
  document.querySelector(".spdefenseval").innerHTML +=
    " : " + output.stats[4].base_stat;
  document.querySelector(".Speed").style.width =
    (output.stats[5].base_stat / 200) * 100 + "%";
  document.querySelector(".speedval").innerHTML +=
    " : " + output.stats[5].base_stat;
  //for showing type
  for (j = 0; j < output.types.length; j++) {
    type = document.createElement("span");
    type.innerHTML = output.types[j].type.name;
    type.setAttribute("class", "span" + j);
    type.style.border="1px solid white"
    document.querySelector(".poketype").appendChild(type);
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
  
  //for alilitey
  for (let j = 0; j < output.abilities.length; j++) {
    fetch(output.abilities[j].ability.url)
      .then((res) => res.json())
      .then((output) => {
        const detail = document.createElement("details");
        const abiname = document.createElement("summary");
        abiname.innerHTML = output.name;
        detail.appendChild(abiname);
        document.querySelector(".Abilities").appendChild(detail);
        const abidetail = document.createElement("p");
        const temp = output.effect_entries.filter(
          (el) => el.language.name === "en"
        );
        abidetail.innerHTML = temp[0].effect;
        detail.appendChild(abidetail);
      });
  }
}

document.querySelector('.backbtn').addEventListener("click",()=>{
  history.back();
})
const preloader=document.querySelector('.preloader');

window.addEventListener("load",function(){
  preloader.style.display="none"
})
const toggle=document.getElementById("darkModeToggle");
toggle.addEventListener("click",()=>{
  document.querySelector("body").classList.toggle("dark");
  
})
