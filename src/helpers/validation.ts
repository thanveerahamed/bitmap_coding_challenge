/**
 * validation.ts - helper class for input range validation
 */
import * as Constants from './constants';

class Validation{
    /**
     * Validates the range of the number of text cases
     * @param {numOfTestCases} number - number of testcases
     */
    public static validateTestCaseRange(numOfTestCases: number): void {
        if (numOfTestCases < Constants.TEST_CASE_NUMBER.MIN || numOfTestCases > Constants.TEST_CASE_NUMBER.MAX) {
            throw new Error("Test case number out of range");
        }
    }

    /**
     * Validates the size of row or column of the bitmap
     * @param {size} number - row or column size of the bitmap
     */
    public static validateBitMapSize(size: number): void {
        if (size < Constants.BIT_MAP_SIZE.MIN || size > Constants.BIT_MAP_SIZE.MAX) {
            throw new Error("Bit map size out of range");
        }
    }
}

export default Validation;