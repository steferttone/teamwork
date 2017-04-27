// Importing math and geo stuff
import Point2f from 'helpers/math/Point2f'

/**
 * Class representing a rectangle of 2-dimension float points
 */
class Rectangle2f {
    /**
     * Create a rectangle
     * @param {<Collection>Point2f} points - list of 4 points
     */
    constructor(points) {
        this.points = points
    }
    /**
     * Creates an outer rectangle by point
     * @param {Point2f} point - The target point
     * @return {Rectangle2f} - The result rectangle
     */
    static createOuterByPoint(point) {
        return new Rectangle2f([point, point, point, point])
    }
    /**
     * Creates an outer rectangle by line
     * @param {<Collection>Point2f} points - The target line of 2 points
     * @return {Rectangle2f} - The result rectangle
     */
    static createOuterByLine(points) {
        return new Rectangle2f([
            new Point2f(points[0].x, points[0].y),
            new Point2f(points[1].x, points[0].y),
            new Point2f(points[1].x, points[1].y),
            new Point2f(points[0].x, points[1].y),
        ])
    }
    /**
     * Creates an outer rectangle by points collection
     * @param {<Collection>Point2f} points - The target line of 3 or more points
     * @return {Rectangle2f} - The result rectangle
     */
    static createOuterByShape(points) {
        let minX = 0
        let minY = 0
        let maxX = 0
        let maxY = 0

        points.forEach((point) => {
            maxX = Math.max(maxX, point.x)
            minX = Math.min(minX, point.x)
            maxY = Math.max(maxY, point.y)
            minY = Math.min(minY, point.y)
        })

        return new Rectangle2f([
            new Point2f(minX, minY),
            new Point2f(maxX, minY),
            new Point2f(maxX, maxY),
            new Point2f(minX, maxY),
        ])
    }
}

export default Rectangle2f
