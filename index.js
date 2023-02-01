 const img=document.querySelector('.rotate-image');





function setColor(colorStr){
    
    document.querySelector('.rotate-image').style.display="block";
    document.querySelector('#containerImage').style.display="none";
    document.querySelector(".colorRed").style.fill=colorStr;
    let rectdeg=0;
    
    let k=setInterval(()=>{ 
    rectdeg++;
    img.style.transform=`rotate(${rectdeg}deg)`;
   },5);
   setTimeout(()=>{
      clearInterval(k);
      document.querySelector('.rotate-image').style.display="none";
      let imge=document.querySelector("#containerImage")
      imge.src=`./assets/${colorStr} umbrella.png`;
      document.querySelector('#containerImage').style.display="block";
      //document.querySelector(".container1").append(imge)
    },5000)
  }

  const input = document.querySelector('.file-input');
  const icon = document.querySelector('.icon-container');
  
  icon.addEventListener('click', function() {
    input.click();
  });

