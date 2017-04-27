// Importing math and geo stuff
import Point2f from 'helpers/math/Point2f'

/**
 * Class representing a region of 2-dimension float points
 */
class Region2f {
    /**
     * Create a region
     * @param {<Collection>Point2f} points - list of points
     */
    constructor(points) {
        this.points = points || []
        this.length = this.points.length
    }
    /**
     * Returns area size of region
     * @return {number} - The result area
     */
    getArea() {
        let regionArea = 0

        for (let i = 0, j = this.length - 1; i < this.length; j = i, i += 1) {
            const point1 = this.points[i]
            const point2 = this.points[j]

            regionArea += point1.x * point2.y
            regionArea -= point1.y * point2.x
        }

        return regionArea / 2
    }
    /**
     * Returns region centroid
     * @return {<Collection>Point2f} - The result point
     */
    getAreaCentroid() {
        let x = 0
        let y = 0
        let delta = 0

        for (let i = 0, j = this.length - 1; i < this.length; j = i, i += 1) {
            const point1 = this.points[i]
            const point2 = this.points[j]

            const leftMul = point1.x * point2.y
            const rightMul = point2.x * point1.y

            delta = leftMul - rightMul

            x += (point1.x + point2.x) * delta
            y += (point1.y + point2.y) * delta
        }

        delta = this.getArea() * 6

        return new Point2f(x / delta, y / delta)
    }
}

export default Region2f
