/**
 * ioHelper.ts - helper class for stdout
 */
import BitmapModel from '../models/bitmapModel';
import PixelModel from '../models/pixelModel';

class IOHelper {
  /**
   * Prints the resulting pixels for each test case in n*m grid format.
   * @param {bitMap} BitmapModel - resulting bitmap
   * @param {testNumber} number - index of the test case 
   */
  public static printResults(bitMap: BitmapModel, testNumber: number): void{
    process.stdout.write(`----- Test ${testNumber} Result -----\n`)
    const pixels: PixelModel[] = bitMap.getPixels();
    for (let i = 0; i < bitMap.getRowCount() ; i++) {
      const result: string = pixels.filter(px => px.getRowLocation() === i).map(px => px.getColor()).join(' ');
      process.stdout.write(`${result}\n`)
    }
  }
}

export default IOHelper;
