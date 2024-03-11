let reset=document.querySelector(".reset");
let boxes=document.querySelectorAll(".box");
let turnx=true;
let winpattern=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let msg = document.querySelector("h3");
let count=0;
const diableboxes = ()=>{
    for(box of boxes){
      box.disabled=true;
    }
};
const enableboxes = ()=>{
    for(box of boxes){
      box.disabled=false;
      box.innerText="";
    }
};

boxes.forEach((box,idx)=>{
    box.addEventListener("click",()=>{
        if(turnx)
        {
           box.classList.remove("black");
           box.classList.add("red");
           box.innerText="X";
           turnx=false;
        }
        else
        {
            box.classList.remove("red");
            box.classList.add("black");
            box.innerText="O";
            turnx=true;
        }
        box.disabled=true;
        count++;
        let winner = checkwinner();
        if(count === 9 && winner!=true)
        {
          draw();
        }
    });
});

const checkwinner = ()=>{
    for(let pattern of winpattern)
    {
        let posval1 = boxes[pattern[0]].innerText;
        let posval2 = boxes[pattern[1]].innerText;
        let posval3 = boxes[pattern[2]].innerText;

        if(posval1 != "" && posval2 !="" && posval3 !="")
        {
            if(posval1 == posval2 && posval2 == posval3)
            {
            msg.innerText=`WINNER IS ${posval1}`;
            diableboxes();
            return true;
            }
        }
    }

};

reset.addEventListener("click", ()=>
{
    msg.innerText=``;
    turnx=true;
    enableboxes();

});

const draw = () =>{
    msg.innerText="MATCH DRAW HIT RESET";
    count = 0;
     
}
