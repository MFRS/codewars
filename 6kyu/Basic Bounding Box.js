// You are given an image represented as a binary array. Your task is to predict the bounding box that encloses all the 1s within the image. The bounding box should be a hollow rectangle, where only the edges of the bounding box are 1s, and the interior is filled with 0s returned in an array of the same size as the original input.

// You can make the following assumptions:

//     An image will only ever be comprised of 0s or 1s.
//     An image will always have a consistent m x n shape.

// Important things to remember:

//     If an empty image is passed, then an empty array should also be returned.
//     If there are no 1s present then no bounding box should be drawn.

// Example
// Input:

// [[0,0,0,0,0,0,0,0,0,0],
//  [0,0,0,0,0,0,0,0,0,0],
//  [0,0,0,0,0,0,0,0,0,0],
//  [0,0,0,0,0,0,0,0,0,0],
//  [0,0,0,0,0,0,0,0,0,0],
//  [0,0,0,0,1,1,0,0,0,0],
//  [0,0,0,1,1,1,1,0,0,0],
//  [0,0,1,1,1,1,1,1,0,0],
//  [0,1,1,1,1,1,0,0,0,0],
//  [0,0,0,0,0,0,0,0,0,0]]

// Output:

// [[0,0,0,0,0,0,0,0,0,0],
//  [0,0,0,0,0,0,0,0,0,0],
//  [0,0,0,0,0,0,0,0,0,0],
//  [0,0,0,0,0,0,0,0,0,0],
//  [0,0,0,0,0,0,0,0,0,0],
//  [0,1,1,1,1,1,1,1,0,0],
//  [0,1,0,0,0,0,0,1,0,0],
//  [0,1,0,0,0,0,0,1,0,0],
//  [0,1,1,1,1,1,1,1,0,0],
//  [0,0,0,0,0,0,0,0,0,0]]

function boundingBox(img) {
    let [lx, ly] = [Infinity, Infinity];
    let [ux, uy] = [-Infinity, -Infinity];
  
    for (let y = 0; y < img.length; y++) {
      for (let x = 0; x < img[y].length; x++) {
        if (img[y][x]) {
          [lx, ly] = [Math.min(lx, x), Math.min(ly, y)];
          [ux, uy] = [Math.max(ux, x), Math.max(uy, y)];
        }
      }
    }
  
    return Array.from(
      { length: img.length },
      (_, y) => Array.from(
        { length: img[y].length },
        (__, x) => ((x === lx || x === ux) && ly <= y && y <= uy) || ((y === ly || y === uy) && lx <= x && x <= ux) ? 1 : 0
      )
    );
  }
