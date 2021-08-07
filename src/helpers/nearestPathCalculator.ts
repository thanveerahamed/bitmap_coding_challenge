/**
 * nearestPathCalculator.ts - helper class for the main logic
 */
import BitmapModel from '../models/bitmapModel';
import PixelModel from '../models/pixelModel';
import * as Constants from './constants';

class NearestPathCalculator {
  /**
   * Calculates the nearest distance of the pixel from the next white color.
   * @param {bitMap} BitmapModel - bitmap the distance being calculated for
   * @param {pixel} PixelModel - the pixel location who distance is being calculated
   * @returns Returns the nearest distance of the pixel from the next white color.
   */
  public static calculate(bitMap: BitmapModel, pixel: PixelModel): number {
    let distance = 0;
    if (pixel.getColor() === Constants.COLOR_WHITE) {
      return distance;
    }
    distance = bitMap
      .getPixels()
      .filter((px) => px.getColor() == Constants.COLOR_WHITE)
      .reduce((distance: number, currentPixel: PixelModel) => {
        const currentDistance: number =
          Math.abs(currentPixel.getRowLocation() - pixel.getRowLocation()) + Math.abs(currentPixel.getColLocation() - pixel.getColLocation()); // the logic d(p1,p2)=|i1-i2|+|j1-j2|
        const minDistance = Math.min(currentDistance, distance);
        return minDistance;
      }, Math.max(bitMap.getColCount(), bitMap.getRowCount())); // set the initial value to max. helps in checking the minimum
    return distance;
  }
}

export default NearestPathCalculator;
