/**
 * bitmapModel.ts - model class for bitmap
 */
import PixelModel from './pixelModel';

class BitmapModel {
  private rows: number;
  private cols: number;
  private pixels: PixelModel[];

  /**
   * Construtor method to intialize the Bitmap
   * @param {rows} number - row size of bitmap (n) 
   * @param {cols} number - column size of the bitmap (m)
   * @param {pixels} PixelModel[] - list of pixels of the bitmap
   */
  constructor(rows: number, cols: number, pixels: PixelModel[]) {
    this.rows = rows;
    this.cols = cols;
    this.pixels = pixels;
  }

  /**
   * Get the row size
   * @returns {number} - return the row size
   */
  public getRowCount(): number {
    return this.rows;
  }

  /**
   * Get the column size
   * @returns {number} - return the col size
   */
  public getColCount(): number {
    return this.cols;
  }

  /**
   * Get the pixels size
   * @returns {PixelModel} - return the list of pixels
   */
  public getPixels(): PixelModel[] {
    return this.pixels;
  }
}

export default BitmapModel;
