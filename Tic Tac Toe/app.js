var sign = "x";
var display = document.getElementById("player");
var player1;


function printx(number){
    var player1 = document.getElementById("r"+number);
  console.log(player1);
  
  if(player1.innerText==""){
  player1.innerText=sign;
  winner();
  checksign();
 display.innerHTML="<center>"+ sign + "  next "+"</center>";
 
  }
  
  
}
function checksign(){
    if(sign=="x")sign ="o";
    else sign = "x";
   
}
function getbox(no){
    return document.getElementById("r"+no).innerHTML;
}
function checkmove(a,b,c,m){
    if(getbox(a)==m && getbox(b)==m && getbox(c)==m)
       return true;
    else return false;   
}
function winner(){
    if(checkmove(1,2,3,sign)||checkmove(4,5,6,sign)||checkmove(7,8,9,sign)
        ||checkmove(1,4,7,sign)||checkmove(2,5,8,sign)||checkmove(3,6,9,sign)
        ||checkmove(1,5,9,sign)||checkmove(7,5,3,sign)){
        display.innerHTML = "<center>" +sign + " Yahoo Win" + "</center>";
        for(var i=1;i<=9;i++){
            document.getElementById("r"+i).innerHTML="";
        }
        throw "game end";
    }else{
        if(getbox(1)!=""&& getbox(2)!=""&& getbox(3)!=""&&
       getbox(4)!=""&& getbox(5)!=""&& getbox(6)!=""&&
       getbox(7)!=""&& getbox(8)!=""&& getbox(9)!=""){
    
        display.innerHTML = "<center> its a tie </center>";
           throw "its a tie";
       }
    }
}
// var sign = "x";
// var disp = document.getElementById("player");
// var player1;


// function printx(number){
//     var player1 = document.getElementById("r"+number);
//   console.log(player1);
  
//   if(player1.innerText==""){
//   player1.innerText=sign;
//   winner();
//   checksign();
//  disp.innerHTML="<center>"+ sign + "  next "+"</center>";
 
//   }
  
  
// }
// function checksign(){
//     if(sign=="x")sign ="o";
//     else sign = "x";
   
// }
// function getbox(no){
//     return document.getElementById("r"+no).innerHTML;
// }
// function checkmove(a,b,c,m){
//     if(getbox(a)==m && getbox(b)==m && getbox(c)==m)
//        return true;
//     else return false;   
// }
// function winner(){
//     if(checkmove(1,2,3,sign)||checkmove(4,5,6,sign)||checkmove(7,8,9,sign)
//         ||checkmove(1,4,7,sign)||checkmove(2,5,8,sign)||checkmove(3,6,9,sign)
//         ||checkmove(1,5,9,sign)||checkmove(7,5,3,sign)){
//         disp.innerHTML = "<center>" +sign + " Yahoo Win" + "</center>";
//         for(var i=1;i<=9;i++){
//             document.getElementById("r"+i).innerHTML="";
//         }
//         throw "game end";
//     }else{
//         if(getbox(1)!=""&& getbox(2)!=""&& getbox(3)!=""&&
//        getbox(4)!=""&& getbox(5)!=""&& getbox(6)!=""&&
//        getbox(7)!=""&& getbox(8)!=""&& getbox(9)!=""){
    
//         disp.innerHTML = "<center> its a tie </center>";
//            throw "its a tie";
//        }
//     }
// }