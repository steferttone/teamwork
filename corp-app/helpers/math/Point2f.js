/**
 * Class representing a 2-dimension float point
 */
class Point2f {
    /**
     * Create a point
     * @param {number} x - The x value
     * @param {number} y - The y value
     */
    constructor(x, y) {
        this.x = x || 0
        this.y = y || 0
    }
    /**
     * Get is x-value of current point less than argument value
     * @param {number} x - The x value
     * @return {boolean} - The result of comparising
     */
    isXLess(value) {
        return this.x < value
    }
    /**
     * Get is y-value of current point less than argument value
     * @param {number} y - The y value
     * @return {boolean} - The result of comparising
     */
    isYLess(value) {
        return this.y < value
    }
    /**
     * Get is x-value of current point more than argument value
     * @param {number} x - The x value
     * @return {boolean} - The result of comparising
     */
    isXMore(value) {
        return this.x > value
    }
    /**
     * Get is y-value of current point more than argument value
     * @param {number} y - The y value
     * @return {boolean} - The result of comparising
     */
    isYMore(value) {
        return this.y > value
    }
}

export default Point2f
