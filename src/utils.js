function cubesToLines(markers) {
    return markers.map(({pose, pose: {position}, scale}) => {
        const p0 = [-scale.x / 2, -scale.y / 2, -scale.z / 2];
        const p1 = [scale.x / 2, -scale.y / 2, -scale.z / 2];
        const p2 = [scale.x / 2, scale.y / 2, -scale.z / 2];
        const p3 = [-scale.x / 2, scale.y / 2, -scale.z / 2];
        const p4 = [-scale.x / 2, -scale.y / 2, scale.z / 2];
        const p5 = [scale.x / 2, -scale.y / 2, scale.z / 2];
        const p6 = [scale.x / 2, scale.y / 2, scale.z / 2];
        const p7 = [-scale.x / 2, scale.y / 2, scale.z / 2];

        return {
            pose,
            primitive: "lines",
            scale: {x: 0.1, y: 0.1, z: 0.1},
            points: [
                // bottom
                p0,
                p1,
                p1,
                p2,
                p2,
                p3,
                p3,
                p0,
                // top
                p4,
                p5,
                p5,
                p6,
                p6,
                p7,
                p7,
                p4,
                // around
                p0,
                p4,
                p1,
                p5,
                p2,
                p6,
                p3,
                p7
            ],
            color: {r: 1, g: 1, b: 0, a: 1}
        };
    });
}

const green = {r: 0.4, g: 0.8, b: 0.4, a: 0.5};
const scalingFactor = 100;
const fixedZForGroundPolyon = 0.1;

function formatGroundPolygons(polygons) {
    if (!('groundPolygons' in polygons))
        return []
    return polygons['groundPolygons'].map((polygonPoints, idx) => {
        return ({
            points: polygonPoints.map((point) => ({
                x: point[0] * scalingFactor,
                y: point[2] * scalingFactor,
                z: fixedZForGroundPolyon
            })),
            color: green,
            id: idx
        });
    });
}

export {cubesToLines, formatGroundPolygons};