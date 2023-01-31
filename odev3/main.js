let form = document.getElementById('formSubmit').addEventListener('click', function(event){
    //Varsayılan değerleri görmezden gel
   
    event.preventDefault();
    return degistir()
});
let buttons = document.getElementById('formSubmit')
let imge= document.getElementById('images')
let images = ["./images/14gun.jpg","./images/appgalery.png","./images/arabeskin.jpg","./images/avrupa.jpg"]
indexnumber=0
function degistir(){
 indexnumber +=1;
 imge.src= images[indexnumber];
 if(indexnumber == 3){
    indexnumber =-1
 }
}
document.addEventListener('click', function(event) {
    let isClickInside = imge.contains(event.target);
    
    
      imge.style.width="500px"
      imge.style.height="500px"
    if (!isClickInside) {
      imge.style.width='250px'
      imge.style.height='250px'
    }
  });
 
   