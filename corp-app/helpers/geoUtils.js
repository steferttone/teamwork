// Importing mock-data
import countries from 'reducers/mock-data/countries.json'

// Importing math utils
import { Point2f, Rectangle2f, Region2f, Line2f } from 'helpers/mathUtils'

const getCountries = () => {
    return countries
}

const getStates = (countryName) => {
    const targetCountryName = countryName || 'US'

    if ({}.hasOwnProperty.call(countries, targetCountryName)) {
        return countries[targetCountryName]
    }

    return []
}

/**
 * Returns Google Constant for setting zoom level according left and right
 * x-coordinates in map
 * @param {number} leftValue - value of minimal x on the map
 * @param {number} rightValue - value of minimal y on the map
 * @param {number} displayWidth - width of map-container viewport
 * @return {number} - Google Maps API zoom level
 */
const getMapZoomLevelByLength = (leftValue, rightValue, displayWidth) => {
    // Google Maps API projection constant
    const GLOBE_WIDTH = 256

    let angle = Math.max(leftValue, rightValue) - Math.min(leftValue, rightValue)

    if (angle < 0) {
        angle += 360
    }

    const fullWidth = displayWidth * 360

    return Math.round(Math.log(fullWidth / angle / GLOBE_WIDTH) / Math.LN2)
}

/**
 * Returns unique values from polygon collection
 * @param {<Collection>Point2f} polygon - list of Point2f entities
 * @return {<Collection>Point2f} - list of Point2f entities with no duplicates
 */
const getUniquePoints = (polygon) => {
    const uniquePoints = []

    polygon.forEach((iterationPoint) => {
        if (uniquePoints.length === 0) {
            uniquePoints.push(iterationPoint)
        } else {
            let pointIsUnique = true

            uniquePoints.forEach((iterationUniquePoint) => {
                if (
                    iterationUniquePoint.x === iterationPoint.x &&
                    iterationUniquePoint.y === iterationPoint.y
                ) {
                    pointIsUnique = false
                }
            })

            if (pointIsUnique) {
                uniquePoints.push(iterationPoint)
            }
        }
    })

    return uniquePoints
}

/**
 * Returns geometrical center of line
 * @param {<Collection>Point2f} line - 2 Point2f entities that compose a line
 * @return {Point2f} - the center of line
 */
const getLineCentroid = (line) => {
    // xDelta and yDelta are moved up for avoiding ESlint syntax restrictions
    const xDelta = line[1].x - line[0].x
    const yDelta = line[1].y - line[0].y

    const halfXDelta = xDelta / 2
    const halfYDelta = yDelta / 2

    const x = line[0].x + halfXDelta
    const y = line[0].y + halfYDelta

    return new Point2f(x, y)
}

/**
 * Returns geometrical center of shape
 * @param {<Collection>Point2f} polygon - list of Point2f entities that compose a shape.
 * Shape could be null, 1 point, line and polygon
 * @return {Point2f} - the center of shape
 */
const getCentroid = (polygon) => {
    const uniquePoints = getUniquePoints(polygon)

    switch (uniquePoints.length) {
    case 0:
        return null
    case 1:
        return uniquePoints[0]
    case 2:
        return getLineCentroid(uniquePoints)
    default:
        return new Region2f(polygon).getAreaCentroid()
    }
}

/**
 * Returns outer rectangle of shape
 * @param {<Collection>Point2f} shape - list of Point2f entities that compose a shape
 * @return {Rectangle2f} - the outer rectangle
 */
const getOuterShapeRectangle = (shape) => {
    const uniquePoints = getUniquePoints(shape)

    switch (uniquePoints.length) {
    case 0:
        return null
    case 1:
        return Rectangle2f.createOuterByPoint(uniquePoints[0])
    case 2:
        return Rectangle2f.createOuterByLine(uniquePoints)
    default:
        return Rectangle2f.createOuterByShape(uniquePoints)
    }
}

/**
 * Returns diagonal <Collection>Point2f of rectangle
 * @param {Rectangle2f} rectangle - base rectangle
 * @return {<Collection>Point2f} - the diagonal line
 */
const getRectangleDiagonal = (rectangle) => {
    // x0
    const minX = Math.min(
        rectangle.points[0].x,
        rectangle.points[1].x,
        rectangle.points[2].x,
        rectangle.points[3].x,
    )

    // x1
    const maxX = Math.max(
        rectangle.points[0].x,
        rectangle.points[1].x,
        rectangle.points[2].x,
        rectangle.points[3].x,
    )

    // y0
    const minY = Math.min(
        rectangle.points[0].y,
        rectangle.points[1].y,
        rectangle.points[2].y,
        rectangle.points[3].y,
    )

    // y1
    const maxY = Math.max(
        rectangle.points[0].y,
        rectangle.points[1].y,
        rectangle.points[2].y,
        rectangle.points[3].y,
    )

    return new Line2f([
        new Point2f(minX, minY),
        new Point2f(maxX, maxY),
    ])
}

/**
 * Returns point that represents diagonal delta
 * @param {<Collection>Point2f} points - first and last points of diagonal
 * @return {Point2f} - the delta of diagonal
 */
const getRectangleDiagonalDelta = (points) => {
    return new Point2f(
        (points[1].x - points[0].x) / 2,
        (points[1].y - points[0].y) / 2
    )
}

/**
 * Returns point that represents diagonal delta with map offsets
 * @param {<Collection>Point2f} points - first and last points of diagonal
 * @return {Point2f} - the delta of diagonal with map offsets
 */
const getRectangleDiagonalCenter = (points) => {
    const diagonalDelta = getRectangleDiagonalDelta(points)

    return new Point2f(
        points[0].x + diagonalDelta.x,
        points[1].y + diagonalDelta.y
    )
}

export {
    getCountries,
    getStates,
    getMapZoomLevelByLength,
    getCentroid,
    getOuterShapeRectangle,
    getRectangleDiagonal,
    getRectangleDiagonalCenter,
    getRectangleDiagonalDelta,
}
