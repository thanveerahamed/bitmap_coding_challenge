var data: number[][] = [
  [0, 0, 0, 1],
  [0, 0, 1, 1],
  [0, 1, 1, 0],
];

function calculateNearestPath(input: number[][]) {
  let d: number[][] = input.map((x) => x.map((y) => 0));
  const rows: number = input.length;
  const cols: number = input[0].length;
  let queue = []; // [{row: 1, col:1}]
  let visited = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (input[i][j] === 1) {
        queue.push({ row: i, col: j });
      }
    }
  }

  let distance = 0;
  while (queue.length > 0) {
    let intermitentQSize = queue.length;
    while (intermitentQSize--) {
      const pixel = queue.shift();
      if(visited.find(x => x["row"] === pixel["row"] && x["col"] === pixel["col"])){
          continue;
      }
      
      visited.push(pixel);
      d[pixel["row"]][pixel["col"]] = distance;

      // top pixel
      if (pixel["row"] - 1 >= 0) {
        queue.push({ row: pixel["row"] - 1, col: pixel["col"] });
      }

      // left pixel
      if (pixel["col"] - 1 >= 0) {
        queue.push({ row: pixel["row"], col: pixel["col"] - 1 });
      }

      // bottom pixel
      if (pixel["row"] + 1 < rows) {
        queue.push({ row: pixel["row"] + 1, col: pixel["col"] });
      }

      // right pixel
      if (pixel["col"] + 1 < cols) {
        queue.push({ row: pixel["row"], col: pixel["col"] + 1 });
      }
    }

    distance++;
  }

  console.log("input", input);
  console.log("final result", d);
}

calculateNearestPath(data);
