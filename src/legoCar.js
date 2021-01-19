const Quaternion = require("quaternion");

const legoCarModel = "lego-car.glb"

function legoCar(s) {
    return {
        pose: {
            orientation: Quaternion.fromEuler(Math.PI/2, 0, 0),
            position: { x: -30 - s, y: 20, z: 1 }
        },
        scale: { x: 4, y: 4, z: 4 }
    }
}
export {legoCarModel, legoCar}