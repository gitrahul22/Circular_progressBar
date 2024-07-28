let num=document.getElementById("number");
let counter=0;

    setInterval(()=>{
        if(counter==65){    
            clearInterval();
        } else{
        counter++;
        num.innerHTML=counter+'%';
        }
        // console.log("hi"); 
    },30)
