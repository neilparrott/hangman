function draw(part) {
  ctx.strokeStyle = "white";
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
      ctx.beginPath();
      ctx.moveTo(225,405);
      ctx.lineTo(225,80);
      ctx.stroke();
      break;
    case 3:
      // top pole
      ctx.beginPath();
      ctx.moveTo(225,80);
      ctx.lineTo(340,80);
      ctx.stroke();
      break;  
    case 4:
      // rope
      ctx.beginPath();
      ctx.moveTo(325,80)
      ctx.lineTo(325,120);
      ctx.stroke();  
      break;
    case 5:
      // head
      
      ctx.beginPath();
      
      ctx.arc(325, 140, 20, 0, Math.PI * 2); 
      ctx.stroke(); 
     
      break;
    case 6:
      // body
      ctx.beginPath();
      ctx.rect(320, 164, 10, 80);
      ctx.stroke();
      break;
    case 7:
      // arms
      ctx.beginPath();
      ctx.moveTo(320, 164);
      ctx.lineTo(300, 200);
      ctx.lineTo(270,220);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(328, 164);
      ctx.lineTo(356, 200);
      ctx.lineTo(385,220);
      ctx.stroke();
      break;
    case 8:
      // legs
      ctx.beginPath();
      ctx.moveTo(320, 246);
      ctx.lineTo(300, 300);
      ctx.lineTo(310,340);
      ctx.stroke();
      ctx.beginPath();
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
