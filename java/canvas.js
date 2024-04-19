function drawEasy(part) {
  ctx.strokeStyle = "green";
  ctx.fillStyle = "green";
  ctx.lineWidth=5;
  ctx.beginPath();
  switch(part) {
    case 1:
      // base
      ctx.moveTo(210,405);
      ctx.lineTo(400,405);
      ctx.stroke();
      break;
    case 2:
      // pole
      ctx.moveTo(225,405);
      ctx.lineTo(225,80);
      ctx.stroke();
      break;
    case 3:
      // top pole
      ctx.moveTo(225,80);
      ctx.lineTo(340,80);
      ctx.stroke();
      break;  
    case 4:
      // rope
      ctx.moveTo(325,80)
      ctx.lineTo(325,120);
      ctx.stroke();  
      break;
    case 5:
      // head
      ctx.arc(325, 140, 20, 0, Math.PI * 2); 
      ctx.fill();
      ctx.stroke(); 
      break;
    case 6:
      // body
      ctx.rect(320, 164, 10, 80);
      ctx.fill();
      ctx.stroke();
      break;
    case 7:
      // arms upper
      ctx.moveTo(320, 164);
      ctx.lineTo(300, 200);
      ctx.stroke();
      break;
    case 8: 
      // arms lower
      ctx.moveTo(300, 200); 
      ctx.lineTo(270,220);
      ctx.stroke();
      break;
    case 9: 
      // arms upper
      ctx.moveTo(328, 164);
      ctx.lineTo(356, 200);
      ctx.stroke();
      break;
    case 10: 
      // arms lower
      ctx.moveTo(356,200);
      ctx.lineTo(385,220);
      ctx.stroke();
      break;
    case 11:
      // legs left
      ctx.moveTo(320, 246);
      ctx.lineTo(300, 300);
      ctx.lineTo(310,340);
      ctx.stroke();
      break;
    case 12: 
    // legs right
      ctx.moveTo(330,246);
      ctx.lineTo(350,300);
      ctx.lineTo(370,275);
      ctx.stroke();
      setTimeout(() => {
        msg(`Sorry, you lost`,50,225);
        msg(`${chosenWord}`,50,275); 
      }, 1000);
      break;
    default:
        // code block
  }
}
function drawTricky(part) {
  ctx.strokeStyle = "yellow";
  ctx.fillStyle = "yellow";
  ctx.lineWidth=5;
  ctx.beginPath();
  switch(part) {
    case 1:
      // base
      ctx.moveTo(210,405);
      ctx.lineTo(400,405);
      ctx.stroke();
      break;
    case 2:
      // pole
      ctx.moveTo(225,405);
      ctx.lineTo(225,80);
      ctx.stroke();
      break;
    case 3:
      // top pole
      ctx.moveTo(225,80);
      ctx.lineTo(340,80);
      ctx.stroke();
      break;  
    case 4:
      // rope
      ctx.moveTo(325,80)
      ctx.lineTo(325,120);
      ctx.stroke();  
      break;
    case 5:
      // head
      ctx.arc(325, 140, 20, 0, Math.PI * 2); 
      ctx.fill();
      ctx.stroke(); 
      break;
    case 6:
      // body
      ctx.rect(320, 164, 10, 80);
      ctx.fill();
      ctx.stroke();
      break;
    case 7:
      // arms left
      ctx.moveTo(320, 164);
      ctx.lineTo(300, 200);
      ctx.lineTo(270,220);
      ctx.stroke();
      break;
    case 8: 
      // arms right 
      ctx.moveTo(328, 164);
      ctx.lineTo(356, 200);
      ctx.lineTo(385,220);
      ctx.stroke();
      break;
    case 9:
      // legs left
      ctx.moveTo(320, 246);
      ctx.lineTo(300, 300);
      ctx.lineTo(310,340);
      ctx.stroke();
      break;
    case 10:  
      // legs right
      ctx.moveTo(330,246);
      ctx.lineTo(350,300);
      ctx.lineTo(370,275);
      ctx.stroke();
      setTimeout(() => {
        msg(`Sorry, you lost`,50,225);
        msg(`${chosenWord}`,50,275); 
      }, 1000);
      break;
    default:
        // code block
  }
}
function drawDire(part) {
  ctx.strokeStyle = "red";
  ctx.fillStyle = "red";
  ctx.lineWidth=5;
  ctx.beginPath();
  switch(part) {
    case 1:
      // base
      ctx.moveTo(210,405);
      ctx.lineTo(400,405);
      ctx.stroke();
      break;
    case 2:
      // pole
      ctx.moveTo(225,405);
      ctx.lineTo(225,80);
      ctx.stroke();
      break;
    case 3:
      // top pole
      ctx.moveTo(225,80);
      ctx.lineTo(340,80);
      ctx.stroke();
      break;  
    case 4:
      // rope
      ctx.moveTo(325,80)
      ctx.lineTo(325,120);
      ctx.stroke();  
      break;
    case 5:
      // head
      ctx.arc(325, 140, 20, 0, Math.PI * 2); 
      ctx.fill();
      ctx.stroke(); 
      break;
    case 6:
      // body
      ctx.rect(320, 164, 10, 80);
      ctx.fill();
      ctx.stroke();
      break;
    case 7:
      // arms 
      ctx.moveTo(320, 164);
      ctx.lineTo(300, 200); 
      ctx.moveTo(300, 200); 
      ctx.lineTo(270,220);
      ctx.moveTo(330, 164);
      ctx.lineTo(356, 200);
      ctx.lineTo(385,220);
      ctx.stroke();
      break;
    case 8:
      // legs left
      ctx.moveTo(320, 246);
      ctx.lineTo(300, 300);
      ctx.lineTo(310,340);
      ctx.moveTo(330,246);
      ctx.lineTo(350,300);
      ctx.lineTo(370,275);
      ctx.stroke();
      setTimeout(() => {
        msg(`Sorry, you lost`,50,225);
        msg(`${chosenWord}`,50,275); 
      }, 1000);
      break;
    default:
        // code block
  }
}
