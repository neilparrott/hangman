
const longwords = [
  "protagonist","antagonist","prosthetic", "promontory",
  "elementary","dystopian","utilitarian","libertarian",
  "consequential","transportation","revolution","evolution",
  "extrapolation","deviation","consternation","environment",
  "communication"
];
const countries = [
  "england","australia","india","russia",
  "new zealand","china",
  "afghanistan","papua new guinea",

  "columbia","venezuela","croatia","bolivia","chile","venezuela","ecuador","guyana",
  "peru","chile","argentina","uruguay","paraguay","bolivia","brazil","suriname",
  "french guinea","aruba","trinidad and tobago","falkland islands","curacao",
  "panama","nicaragua",

  "egypt","saudi arabia","yemen","tunisia","south africa","nigeria","kenya",
  "morocco","ghana","zambia","gambia","senegal","south sudan","tanzania","ethiopia",
  "north sudan","ivory coast","algeria","niger","libya","lebanon","uganda","cameroon",
  "rwanda","mali","madagascar","cote divoire","somalia","angola","zimbabwe","cabo verde",
  "burkina faso","namibia","chad","guinea","mozambique","burundi","zambia","togo","botswana",
  "sierra leone","liberia","gabon","mauritania","central african republic","benin",
  "equatorial guinea","malawi","mauritius","eritrea","djibouti","republic of congo",
  "western sahara","seychelles","lesotho","eswatini",

  
  "italy","spain","portugal","romania","bulgaria","poland","france",
  "hungary","albania","norway","sweden","denmark","finland","austria","germany",
  "latvia","estonia","georgia","ukraine","turkey","greece","belgium","czech republic",
  "ireland","croatia","monaco","malta","luxembourg","netherlands","slovenia",

  "iran","iraq","israel",
  "pakistan","bangladesh","turkmenistan","azerbaijam",
  "japan","north korea","south korea","phillipines","thailand",
  "malaysia","singapore"
];
const dogbreeds = [
  "mauser","labrador","poodle","crossbreed","alsation",
  "boxer","pug","dalmation","cocker spaniel","chihuahua",
  "dachsund","red setter","golden retriever","king charles spaniel",
  "greyhound","whippet","french bulldog","wire terrier",
  "bearded terrier","old english sheepdog","south african ridgeback",
  "corgi","border collie", "beagle","rottweiler","dobermann",
  "sheltie","samoyed","shih tzu","siberian husky",
  "yorkshire terrier"
];
const shortwords = [
  "and","who","the","what","open","able","why","paid","lid",
  "rot","rat","pot","pose","post","host","town","zoo",
  "zoom"
];
const horsebreeds = [
"Akhal-Teke","American Quarter horse","American Saddle horse","Andalusian",
"Anglo-Arab","Anglo-Norman","Appaloosa","Arab","Ardennes","Balearic","Barb",
"Basuto","Batak or Deli","boerperd","Beetewk","Brabançon","Breton","BurmeseS",
"Cleveland Bay","Clydesdale","Connemara","Criollo","Dales pony","Danish","Dartmoor pony",
"Don","Dutch Draught","Esthonian","Exmoor","Fell pony","Finnish horse","Fjord pony",
"Flemish","Friesian","Gelderland","Gidran","Groningen","Gudbrandsdal","Hackney",
"Hafflinger","Hambletonian","Hanoverian","Highland pony","Huçul","Iceland pony",
"Iomud","Kabarda","Karabair","Karabakh","Karadagh","Kathiawari","Kladruber","Klepper",
"Knabstrup","Konik","Kurdistan pony","Limousin","Lipizzaner","Lokai","Manipur",
"Marwari","Mecklenburg","Mongolian","Morgan","mustang","New Forest pony","Nonius",
"North Swedish horse","Oldenburg","Orlov Trotter","Palomino","Percheron","Persian Arab",
"Pinto","Pinzgauer","Polish Arab","Polish Half-bred","Polish Thoroughbred","Quarter horse",
"racehorse","Rhenish","Shagya","Shetland pony","Shirazi","Shire horse","Spanish Jennet", 
"Spiti","Standard Bred","Strelet","Suffolk Punch","Swedish Ardennes","Tarbenian","Tarpan",
"Tennessee Walking Horse","Thoroughbred","Timor pony","Trakehner","Turk","Viatka","Waler",
"Welsh Cob","Welsh Mountain pony","Welsh pony","Yamoote","Yorkshire Coach horse",
"Zeeland horse","Zemaitukas"
];
let xypos = [];   // point for each letter in word

let correct = 0; // count correct letters so we can test for WIN
let part = 1;    // initialise part to draw first
let chosenWord = "";
let x = [];
let newArray = [];
let selected = "";
//getOption();     // get the word topic

const canvasElement = document.querySelector(".myCanvas");
canvasElement.height=450;
canvasElement.width=450;
const ctx = canvasElement.getContext("2d");
let areEventListenersAssigned = 0;

function begin() {
  getOption();     // get the word topic
  //console.log(newArray);
  chosenWord = newArray[pickWord(newArray.length)];
  reset();
  drawUnderlines(chosenWord.length);
  if (areEventListenersAssigned === 0) {
    x = document.querySelectorAll(".letter > *");
    x.forEach(item => {
      item.addEventListener('click', () => {
        process(`${item.innerText}`,chosenWord.toUpperCase(),item);
      });
    });
    areEventListenersAssigned = 1;
  };
}

function pickWord(max) {
  return (Math.floor(Math.random() * (max - 1 +1)) + 1) - 1; 
};

function process(letter,chosenWord, node) {
  /* is letter in chosenWord */
  /* hide button with letter selected */
  node.disabled = true;
  let letterl = letter.toUpperCase();
  console.log("chosenword: " + chosenWord + " letter: " + letterl );
  if (chosenWord.includes(`${letterl}`)) {
    drawLetter(letter);
  } else {
    draw(part);
    part++;
  }

};

function reset() {
    /* get new chosen word */
  correct = 0;      // reset correct letter count  
  part = 1;         // reset part to draw  
  xypos = [];
  chosenWord = newArray[pickWord(newArray.length)];

    /* undisable all nodes for the letters */
  x.forEach(item => {
    item.disabled= false ;
  });
  drawUnderlines(chosenWord.length);
};
// were underlines but thought white CIRCLES would show the LETTERS clearer? 
// also thought it nice to create an array for all x,y 
// points so that this can be used for x,y pairs for the 
// drawing of the letters

function drawUnderlines(len) {
  
  ctx.clearRect(0,0,canvasElement.height,canvasElement.width); 

  ctx.strokeStyle = "white";
  ctx.fillStyle = "white";
  //ctx.textAllign= "right";
  ctx.lineWidth=2;
  ctx.font = "30px Arial";
  
  for (let i = 1; i <= len; i++) {
    if (chosenWord.charAt(i-1) != " ") {
      ctx.beginPath();
      xypos.push({x: i*22, y: 44});
      //ctx.moveTo(i * 18,50);    for underline
      ctx.arc(xypos[i-1].x, xypos[i-1].y, 11, 0,Math.PI * 2)
      //ctx.lineTo(i * 18 + 13,50); for underline
      //ctx.stroke();               for underline
      ctx.fill();
    };
  }; 
};

function drawLetter(letter) {
  //console.log(`drawletter: ${letter}  pre correct: ${correct}`);
  let positions = [];  // array to hold positions
  for (let i = 0; i < chosenWord.length; i++) {
    if (chosenWord.charAt(i) != " ") {
      if (chosenWord.charAt(i) === letter.toLowerCase()) {
        positions.push(1);   // position in string 
        correct++;
      } else {
        positions.push(0);
      }
    } else {
        positions.push(0);
    };
  }
  //console.log(`drawletter: ${letter}  post correct: ${correct}`);
  ctx.strokeStyle = "black"; // was white  for underline
  ctx.fillStyle = "black";   // was white
  ctx.font = "17px Arial";
  //console.log(positions);
  for (let i = 0; i < chosenWord.length; i++) {
    ctx.beginPath();
    if ( positions[i] === 1) {
      //ctx.fillText(letter,(i+1)*18,50);  for underline
      ctx.textAllign="center";
      ctx.textBaseline="bottom";
      //console.log("x: " +  xypos[i].x );
      ctx.fillText(letter,xypos[i].x - 5,xypos[i].y +9);
      ctx.stroke();
    } 
  } 
  if (correct + countBlanks() === chosenWord.length) {
    setTimeout( () => {
      msg("Congratulations!!",40,225);
    },1000);
  }
}
function msg(message,len,y) {
    ctx.clearRect(0,0,canvasElement.height,canvasElement.width); 
  setTimeout( () => {
    ctx.strokeStyle = "yellow";
    ctx.fillStyle = "red";
    ctx.font = `${len}px Arial`;
    ctx.beginPath();
    ctx.fillText(message,40,y);
    ctx.stroke();
  },2000);
  setTimeout( () => {
    reset();
  },4000); 
}
function getOption() {
  var selectBox = 
    document.getElementById('word-topic');
  var selectedValue = selectBox.options[selectBox.selectedIndex].value;
  //console.log(selectedValue) ;
  selected = selectedValue;
  //document.querySelector(".output").textContent = selected;

  //console.log(selected);
  if (selected === "countries") {
    newArray = countries;
  } else if (selected === "horse-breeds") {
    newArray = horsebreeds;  
  } else if (selected === "dog-breeds") {
    newArray = dogbreeds;
  } else if (selected === "long-words") {
    newArray = longwords;
  } else if (selected === "short-words") {
    newArray = shortwords;
  };

  return selected;
}
function countBlanks() {
  let noBlanks = 0;
  for (let i=1; i < chosenWord.length; i++) {
    if (chosenWord.charAt(i-1) === " ") {
      noBlanks++;
    }
  }
  return noBlanks;
}; 
