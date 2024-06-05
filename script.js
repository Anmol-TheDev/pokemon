
const array = [],
  data = [],
  url = [];
let iValue = 0;
let length = 20;
let a = document.getElementsByClassName("main-box");
let container = document.createElement("div");
a[0].appendChild(container);
container.setAttribute("class", "container");
let uniqueName;
let uniquebox;

//darkmode
const toggle = document.getElementById("darkModeToggle");
toggle.addEventListener("click", () => {
  document.querySelector("body").classList.toggle("dark");
});
async function main(){
for (let i =0; i <1025; i++) {
  array.push(await fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}`));
  const resp = await array[i];
  data.push(await resp.json());
  if(i>=0&&i<20){
    domData(data[i])
  }
 }
}

main()
async function dataprovider() {
  for (let i = iValue; i < length; i++) {
    uniquebox = "name" + i;
    domData(data[i]);
  }
}

// providing data to main page

function domData(data) {
  let div = document.createElement("div");
  div.setAttribute("class", "box");
  div.addEventListener("click", () => {
    window.location.assign("/pokeid.html?data=" + data.id);
  });

  let img = document.createElement("img");
  img.src = data.sprites.other['official-artwork'].front_default;
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
    const type = document.createElement("span");
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

const webName = document.querySelector("h1");
webName.addEventListener("click", function () {
  location.reload();
});

//search bar
const search = document.querySelector(".searchBar");
const result = document.querySelector(".resultbox");

let resultdata = [];
search.onkeyup = function () {
  let input = search.value;
  if (input.length) {
    resultdata= pokemonNames.filter((el) => {
      return (el.startsWith(input.trim().toLowerCase()));
    });
    
  }

  display(resultdata);

  if(search.value==""){
    result.innerHTML=""
    document.querySelector(".container").remove();
    let container = document.createElement("div");
    container.setAttribute("class", "container");
    a[0].appendChild(container);
    dataprovider()
  }
}

const ul = document.createElement("ul");
function display(resultdata){
  let li = "";
  ul.innerHTML=""
  for(let i=0;i<resultdata.length;i++){
    li=document.createElement("li");
    li.innerHTML = resultdata[i];
    ul.appendChild(li)
    li.addEventListener("click",selectInput);
  }
  result.appendChild(ul);
}

function selectInput(e) {
  
  search.value = e.target.innerHTML;
  result.innerHTML = "";
  fetching(e.target.innerHTML)
}

function fetching(el){
  document.querySelectorAll('.box').forEach(el=>{
    el.remove();
  })
  fetch(`https://pokeapi.co/api/v2/pokemon/${el}`)
  .then(res=>res.json())
  .then(obj=>domData(obj))
}

const pokemonNames = [
  "bulbasaur",
  "ivysaur",
  "venusaur",
  "charmander",
  "charmeleon",
  "charizard",
  "squirtle",
  "wartortle",
  "blastoise",
  "caterpie",
  "metapod",
  "butterfree",
  "weedle",
  "kakuna",
  "beedrill",
  "pidgey",
  "pidgeotto",
  "pidgeot",
  "rattata",
  "raticate",
  "spearow",
  "fearow",
  "ekans",
  "arbok",
  "pikachu",
  "raichu",
  "sandshrew",
  "sandslash",
  "nidoran♀",
  "nidorina",
  "nidoqueen",
  "nidoran♂",
  "nidorino",
  "nidoking",
  "clefairy",
  "clefable",
  "vulpix",
  "ninetales",
  "jigglypuff",
  "wigglytuff",
  "zubat",
  "golbat",
  "oddish",
  "gloom",
  "vileplume",
  "paras",
  "parasect",
  "venonat",
  "venomoth",
  "diglett",
  "dugtrio",
  "meowth",
  "persian",
  "psyduck",
  "golduck",
  "mankey",
  "primeape",
  "growlithe",
  "arcanine",
  "poliwag",
  "poliwhirl",
  "poliwrath",
  "abra",
  "kadabra",
  "alakazam",
  "machop",
  "machoke",
  "machamp",
  "bellsprout",
  "weepinbell",
  "victreebel",
  "tentacool",
  "tentacruel",
  "geodude",
  "graveler",
  "golem",
  "ponyta",
  "rapidash",
  "slowpoke",
  "slowbro",
  "magnemite",
  "magneton",
  "farfetch'd",
  "doduo",
  "dodrio",
  "seel",
  "dewgong",
  "grimer",
  "muk",
  "shellder",
  "cloyster",
  "gastly",
  "haunter",
  "gengar",
  "onix",
  "drowzee",
  "hypno",
  "krabby",
  "kingler",
  "voltorb",
  "electrode",
  "exeggcute",
  "exeggutor",
  "cubone",
  "marowak",
  "hitmonlee",
  "hitmonchan",
  "lickitung",
  "koffing",
  "weezing",
  "rhyhorn",
  "rhydon",
  "chansey",
  "tangela",
  "kangaskhan",
  "horsea",
  "seadra",
  "goldeen",
  "seaking",
  "staryu",
  "starmie",
  "mr. mime",
  "scyther",
  "jynx",
  "electabuzz",
  "magmar",
  "pinsir",
  "tauros",
  "magikarp",
  "gyarados",
  "lapras",
  "ditto",
  "eevee",
  "vaporeon",
  "jolteon",
  "flareon",
  "porygon",
  "omanyte",
  "omastar",
  "kabuto",
  "kabutops",
  "aerodactyl",
  "snorlax",
  "articuno",
  "zapdos",
  "moltres",
  "dratini",
  "dragonair",
  "dragonite",
  "mewtwo",
  "mew",
  "chikorita",
  "bayleef",
  "meganium",
  "cyndaquil",
  "quilava",
  "typhlosion",
  "totodile",
  "croconaw",
  "feraligatr",
  "sentret",
  "furret",
  "hoothoot",
  "noctowl",
  "ledyba",
  "ledian",
  "spinarak",
  "ariados",
  "crobat",
  "chinchou",
  "lanturn",
  "pichu",
  "cleffa",
  "igglybuff",
  "togepi",
  "togetic",
  "natu",
  "xatu",
  "mareep",
  "flaaffy",
  "ampharos",
  "bellossom",
  "marill",
  "azumarill",
  "sudowoodo",
  "politoed",
  "hoppip",
  "skiploom",
  "jumpluff",
  "aipom",
  "sunkern",
  "sunflora",
  "yanma",
  "wooper",
  "quagsire",
  "espeon",
  "umbreon",
  "murkrow",
  "slowking",
  "misdreavus",
  "unown",
  "wobbuffet",
  "girafarig",
  "pineco",
  "forretress",
  "dunsparce",
  "gligar",
  "steelix",
  "snubbull",
  "granbull",
  "qwilfish",
  "scizor",
  "shuckle",
  "heracross",
  "sneasel",
  "teddiursa",
  "ursaring",
  "slugma",
  "magcargo",
  "swinub",
  "piloswine",
  "corsola",
  "remoraid",
  "octillery",
  "delibird",
  "mantine",
  "skarmory",
  "houndour",
  "houndoom",
  "kingdra",
  "phanpy",
  "donphan",
  "garchomp",
  "porygon2",
  "stantler",
  "smeargle",
  "tyrogue",
  "hitmontop",
  "smoochum",
  "elekid",
  "magby",
  "miltank",
  "blissey",
  "raikou",
  "entei",
  "suicune",
  "larvitar",
  "pupitar",
  "tyranitar",
  "lugia",
  "ho-oh",
  "celebi",
  "treecko",
  "grovyle",
  "sceptile",
  "torchic",
  "combusken",
  "blaziken",
  "mudkip",
  "marshtomp",
  "swampert",
  "poochyena",
  "mightyena",
  "zigzagoon",
  "linoone",
  "wurmple",
  "silcoon",
  "beautifly",
  "cascoon",
  "dustox",
  "lotad",
  "lombre",
  "ludicolo",
  "seedot",
  "nuzleaf",
  "shiftry",
  "taillow",
  "swellow",
  "wingull",
  "pelipper",
  "ralts",
  "kirlia",
  "gardevoir",
  "surskit",
  "masquerain",
  "shroomish",
  "breloom",
  "slakoth",
  "vigoroth",
  "slaking",
  "nincada",
  "ninjask",
  "shedinja",
  "whismur",
  "loudred",
  "exploud",
  "makuhita",
  "hariyama",
  "azurill",
  "nosepass",
  "skitty",
  "delcatty",
  "sableye",
  "mawile",
  "aron",
  "lairon",
  "aggron",
  "meditite",
  "medicham",
  "electrike",
  "manectric",
  "plusle",
  "minun",
  "volbeat",
  "illumise",
  "roselia",
  "gulpin",
  "swalot",
  "carvanha",
  "sharpedo",
  "wailmer",
  "wailord",
  "numel",
  "camerupt",
  "torkoal",
  "spoink",
  "grumpig",
  "spinda",
  "trapinch",
  "vibrava",
  "flygon",
  "cacnea",
  "cacturne",
  "swablu",
  "altaria",
  "zangoose",
  "seviper",
  "lunatone",
  "solrock",
  "barboach",
  "whiscash",
  "corphish",
  "crawdaunt",
  "baltoy",
  "claydol",
  "lileep",
  "cradily",
  "anorith",
  "armaldo",
  "feebas",
  "milotic",
  "castform",
  "kecleon",
  "shuppet",
  "banette",
  "duskull",
  "dusclops",
  "tropius",
  "chimecho",
  "absol",
  "wynaut",
  "snorunt",
  "glalie",
  "spheal",
  "sealeo",
  "walrein",
  "clamperl",
  "huntail",
  "gorebyss",
  "relicanth",
  "luvdisc",
  "bagon",
  "shelgon",
  "salamence",
  "beldum",
  "metang",
  "metagross",
  "regirock",
  "regice",
  "registeel",
  "latias",
  "latios",
  "kyogre",
  "groudon",
  "rayquaza",
  "jirachi",
  "deoxys",
  "turtwig",
  "grotle",
  "torterra",
  "chimchar",
  "monferno",
  "infernape",
  "piplup",
  "prinplup",
  "empoleon",
  "starly",
  "staravia",
  "staraptor",
  "bidoof",
  "bibarel",
  "kricketot",
  "kricketune",
  "shinx",
  "luxio",
  "luxray",
  "budew",
  "roserade",
  "cranidos",
  "rampardos",
  "shieldon",
  "bastiodon",
  "burmy",
  "wormadam",
  "mothim",
  "combee",
  "vespiquen",
  "pachirisu",
  "buizel",
  "floatzel",
  "cherubi",
  "cherrim",
  "shellos",
  "gastrodon",
  "ambipom",
  "drifloon",
  "drifblim",
  "buneary",
  "lopunny",
  "mismagius",
];
