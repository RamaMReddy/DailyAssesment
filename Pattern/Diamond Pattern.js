console.log("diamond pattern");
function diamond_pattern(num){
    // var row ="";
    let space=Math.floor(num/2);
    let star =1;

    for(let i=0; i<num; i++){ //loop for iterate rows
    let row="";
         for(let j=0;j<space;j++){//loop for print spaces in row
            row+=" ";
         }
         for(let k=0;k<star;k++){//loop for print starts in row
            row+="*";
         }
         console.log(row);
         if(i<Math.floor(num/2)){
            space--;
            star+=2;
         }else{
            space++;
            star-=2;
         }
    }
}
diamond_pattern(5);


