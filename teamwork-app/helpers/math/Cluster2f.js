// Importing math and geo stuff
import Point2f from 'helpers/math/Point2f'

/**
 * Class representing a cluster of 2-dimension float points
 */
class Cluster2f {
    /**
     * Create a cluster
     * @param {<Collection>Point2f} points - list of points
     */
    constructor(points) {
        this.points = points || [
            new Point2f(0, 0),
        ]
    }
}

export default Cluster2f
