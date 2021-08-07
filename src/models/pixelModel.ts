/**
 * pixelModel.ts - model class for pixel
 */
class PixelModel {
  private xCoordinate: number;
  private yCoordinate: number;
  private color: number; // 1 is white, 0 is black

  /**
   * Initialization of the pixelate
   * @param {x} number - row coordinate of the pixel in a bitmap
   * @param {y} number - column coordinate of the pixel in a bitmap
   * @param {c} number - value of the pixel
   */
  constructor(x: number, y: number, c: number) {
    this.xCoordinate = x;
    this.yCoordinate = y;
    this.color = c;
  }

  /**
   * Get pixel row location
   * @returns {number} - pixel row location
   */
  public getRowLocation(): number {
    return this.xCoordinate;
  }

  /**
   * Get pixel col location
   * @returns {number} - pixel col location
   */
  public getColLocation(): number {
    return this.yCoordinate;
  }

  /**
   * Get pixel value
   * @returns {number} - pixel value {0 - black , 1 - white}
   */
  public getColor(): number {
    return this.color;
  }

  /**
   * Set pixel value
   * @param {number} color - pixel value {0 - black , 1 - white}
   */
  public setColor(color): void {
    this.color = color;
  }
}

export default PixelModel;
