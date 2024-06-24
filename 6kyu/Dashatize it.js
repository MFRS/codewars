// Given an integer, return a string with dash '-' marks before and after each odd digit, but do not begin or end the string with a dash mark.

// Ex:

// 274 -> '2-7-4'
// 6815 -> '68-1-5'

function dashatize(num) {
    return num = num.toString().split("").map(function(c){
      return c % 2 ? "-" + c + "-" :  c ;
    }).join("").split("-").filter(a => a != "").join("-");
    
  };
