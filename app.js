let choices = document.querySelectorAll(".box");
let winner = document.querySelector(".win-head");
let show = document.querySelector(".winner-name");
let ngame = document.querySelector(".new-game");
let btnreset = document.querySelector(".reset");
let Oturn = true;
let count = 0;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const draw = () => {
    winner.innerText = `It's a Draw`;
    show.classList.remove("hide");
}

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    if (Oturn) {
      choice.innerText = "O";
      Oturn = false;
      count++
    } else {
      choice.innerText = "X";
      Oturn = true;
      count++
    }
    choice.disabled = true;
    checkWinner();
    if(count===9){
        draw();
    }
  });
});

const disbtn = () => {
    for(let choice of choices){
        choice.disabled = true;
    }
};

const enbtn = () => {
    for(let choice of choices){
        choice.disabled = false;
    }
};

const reset = () => {
    enbtn();
    let Oturn = true;
    for(let choice of choices){
        choice.innerText="";
    }
    show.classList.add("hide")
    count = 0;
}

const newgame = () => {
    enbtn();
    let Oturn = true;
    for(let choice of choices){
        choice.innerText="";
    }
    show.classList.add("hide")
    count = 0;
}


const checkWinner = () =>{
    for(let pattern of winPatterns){
        let p1v1 = choices[pattern[0]].innerText;
        let p2v2 = choices[pattern[1]].innerText;
        let p3v3 = choices[pattern[2]].innerText;

        if(p1v1 != "" && p2v2 != "" && p3v3 != ""){
            if(p1v1 === p2v2 && p2v2 === p3v3){
                winner.innerText = `${p1v1} is The Winner !`;
                show.classList.remove("hide");
                disbtn();
            }
        }
    }
};

btnreset.addEventListener("click", reset);

ngame.addEventListener("click", newgame);











