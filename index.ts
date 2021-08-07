/**
 * index.ts entry file for the application
 */
import { Interface, createInterface } from 'readline';
import IOHelper from './src/helpers/ioHelper';
import NearestPathCalculator from './src/helpers/nearestPathCalculator';
import Validation from './src/helpers/validation';
import BitmapModel from './src/models/bitmapModel';
import PixelModel from './src/models/pixelModel';

const readLine: Interface = createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true
});

let numberOfTestCases: number;
const bitMaps: BitmapModel[] = [];

/**
 * This even gets fired when readline interface is closed.
 * Executes the actual logic.
 */
readLine.on('close', () => {
  for (let testNumber = 1; testNumber <= numberOfTestCases; testNumber++) {
    const bitMap: BitmapModel = bitMaps[testNumber - 1];
    const pixels: PixelModel[] = bitMap.getPixels();
    const updatedPixels: PixelModel[] = []; // temporary storage for printing
    pixels.forEach((pixel) => {
      updatedPixels.push(new PixelModel(pixel.getRowLocation(), pixel.getColLocation(), NearestPathCalculator.calculate(bitMap, pixel)));
    });

    // to print the resutl
    IOHelper.printResults(new BitmapModel(bitMap.getRowCount(), bitMap.getColCount(), updatedPixels), testNumber);
  }
});

/**
 * Main entry method for the application
 */
async function main(): Promise<void> {
  const getLine = (function () {
    const getLineGen: AsyncGenerator = (async function* () {
      for await (const line of readLine) {
        yield line;
      }
    })();
    return async () => (await getLineGen.next()).value;
  })();

  numberOfTestCases = Number(await getLine());
  Validation.validateTestCaseRange(numberOfTestCases);
  for (let testNumber = 1; testNumber <= numberOfTestCases; testNumber++) {
    const dimension: string[] = (await getLine()).split(' ');
    const rows: number = parseInt(dimension[0], 10);
    const columns: number = parseInt(dimension[1], 10);
    const pixels: PixelModel[] = [];

    for (let row = 0; row < rows; row++) {
      const pixelsOnRow: number[] = (await getLine()).split('');
      for (let col = 0; col < columns; col++) {
        pixels.push(new PixelModel(row, col, Number(pixelsOnRow[col])));
      }
    }

    bitMaps.push(new BitmapModel(rows, columns, pixels));
  }
  readLine.close(); // this will invoke the close event and execution of test case starts.
}

(async () => {
  await main();
})();
