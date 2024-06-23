// Task

// You got a scratch lottery, you want to know how much money you win.

// There are six sets of characters on the lottery. Each set of characters represents a chance to win. The text has a coating on it. When you buy the lottery ticket and then blow it off, you can see the text information below the coating.

// Each set of characters contains three animal names and a number, like this: "tiger tiger tiger 100". If the three animal names are the same, Congratulations, you won the prize. You will win the same bonus as the last number.

// Now, You have scraped some position on the lottery, other positions are covered by "###"..

// Given the lottery, your task is to calculate the maximum possible winning amount of this lottery ticket.

// The winning amount may be one of these numbers: 5,10,20,50,100,200,500,1000,2000,5000,10000
// Input/Output

// [input] string array lottery

// A string array that contains six sets of characters. "###" is the unknown text.

// [output] an integer

// The maximum possible winning amount of this lottery ticket.
// Example

// For

// lottery = [
// "### tiger tiger 100",
// "rabbit dragon ### 10000",
// "### ox ### 1000",
// "### ### ### 10",
// "horse monkey rat ###",
// "dog dog dog ###"
// ]```

// the output should be `11110`.

// scraped ### in "### tiger tiger 100". It can be "tiger tiger tiger 100", you win $100

// "rabbit dragon ### 10000" can not win

// scraped ### in "### ox ### 1000", It can be "ox ox ox 1000", you win $1000

// scraped ### in "### ### ### 10", It can be any three animals of the same name, you win $10

// scraped ### in "dog dog dog ###" It can be "dog dog dog 10000", you win $10000

// The total amount is: 100 + 1000 + 10 + 10000 = 11110 ```

const scratch = lottery =>
    lottery
      .map(e=>e.split` `)
      .map(e=>(+e.pop()||10000)*(new Set(e.filter(e=>e!='###')).size<2))
      .reduce((a,b)=>a+b,0)
