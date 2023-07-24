console.log("equalateral");
function equalateral_pattern(num) {
    for (let i = 1; i <= num; i++) {
      let row = "";
  
      // Add spaces to align the stars in the center
      for (let j = 0; j < num - i; j++) {
        row += " ";
      }
  
      // Add stars for this row
      for (let k = 0; k < 2 * i - 1; k++) {
        row += "*";
      }
  
      console.log(row);
    }
  }

  equalateral_pattern(5);
  