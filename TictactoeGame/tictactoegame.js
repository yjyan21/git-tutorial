window.onload = function() {
    const selectBox = document.querySelector(".select-box");
    playerXBtn = document.querySelector(".playerX");
    playerOBtn = document.querySelector(".playerO");
    playBox = document.querySelector(".play-box");
    allNotice = document.querySelectorAll("section div");
    playtopliX = document.querySelectorAll(".play-top-li")[0];
    playtopliO = document.querySelectorAll(".play-top-li")[1];

    playerXBtn.onclick =() => {
        selectBox.classList.add("hidden");
        playBox.classList.add("show");
        playtopliX.classList.add("active");
    }
    playerOBtn.onclick =() =>{
        selectBox.classList.add("hidden");
        playBox.classList.add("show");
        playtopliO.classList.add("active");
    }
    for(let i = 0; i < allNotice.length; i++){
        allNotice[i].onclick = () =>{
            if(playtopliX.classList.contains("active")){
                allNotice[i].innerHTML = "X" ;
            }else{
                allNotice[i].innerHTML = "O" ;
            }

        }
    }
  
    
    
}