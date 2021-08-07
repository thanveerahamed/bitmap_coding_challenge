import NearestPathCalculator from '../helpers/nearestPathCalculator';
import BitmapModel from '../models/bitmapModel';
import PixelModel from '../models/pixelModel';

function createBitMap(rows: number, cols: number, grid:number[][]): BitmapModel {
    const pixels: PixelModel[] = [];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            pixels.push(new PixelModel(i, j, grid[i][j]));
        }
    }

    return new BitmapModel(rows, cols, pixels);
}

describe('Calculate nearest path test cases', () => {
  test('Example 1', () => {
    const input: number[][] = [
        [0, 0, 0, 1],
        [0, 0, 1, 1],
        [0, 1, 1, 0],
    ]
    const bitMap: BitmapModel = createBitMap(3, 4, input);
    const pixels: PixelModel[] = bitMap.getPixels();
    expect(NearestPathCalculator.calculate(bitMap, pixels[0])).toBe(3);
    expect(NearestPathCalculator.calculate(bitMap, pixels[7])).toBe(0); // (1, 2) has white color
  });

  test('Example 2', () => {
    const input: number[][] = [
        [0, 0],
        [0, 1],
        [1, 0],
        [1, 1]
    ]
    const bitMap: BitmapModel = createBitMap(4, 2, input);
    const pixels: PixelModel[] = bitMap.getPixels();
    expect(NearestPathCalculator.calculate(bitMap, pixels[0])).toBe(2);
    expect(NearestPathCalculator.calculate(bitMap, pixels[7])).toBe(0);
  });

  test('Example 3', () => {
    const input: number[][] = [
        [0, 0, 0, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ]
    const bitMap: BitmapModel = createBitMap(3, 4, input);
    const pixels: PixelModel[] = bitMap.getPixels();
    expect(NearestPathCalculator.calculate(bitMap, pixels[8])).toBe(4);
  });
});
