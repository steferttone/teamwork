// Importing math and geo stuff
import Point2f from 'helpers/math/Point2f'

/**
 * Class representing a line if 2-dimension float points
 */
class Line2f {
    /**
     * Create a line
     * @param {<Collection>Point2f} x - The x value
     */
    constructor(points) {
        this.points = points || [
            new Point2f(0, 0),
            new Point2f(0, 0),
        ]
    }
}

export default Line2f
