// Background

// Today is the special day you've been waiting for — it's your birthday! It's 8 AM and you're setting up your birthday cake for the party. It's time to put the candles on top.

// You take out all the candles you've bought. As you are about to put them on the cake, you just realize that there are numbers on each candles. What are these numbers?! After searching about it on the internet, turns out these are special candles. These candles need to be blown a certain number of times before they're finally extinguished, and those numbers on the candles are the required times to blow them.

// Being one who plans meticulously, you want to determine the total number of blows you need to extinguish all the candles once you've put them on the cake.
// Task

// Given a string containing digits (representing the strength of the candles), calculate the number of blows you need to extinguish all the candles.

// Starting at the beginning of the string, each blow can only reach 3 candles, reducing their strength by one each. You can only reach more candles once those directly in front of you are extinguished.

// solution

function blowCandles(str) {
    let blow = 0, blow1 = 0, blow2 = 0;
    for (let candle of str) {
      let blow0 = Math.max(candle - blow1 - blow2, 0);
      blow += blow0;
      blow2 = blow1;
      blow1 = blow0;
    }
    return blow;
  }
