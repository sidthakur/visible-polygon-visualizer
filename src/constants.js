const sensorHeight = 12;   // cm
const sensorRollAngle = Math.PI * 10 / 180;   // radians
const defaultCameraState = {
    distance: 80,
    phi: Math.PI / 3,
    target: [0, 30, 0],
    targetOffset: [0, 0, 0],
    targetOrientation: [0, 0, 0, 1],
    thetaOffset: 0,
    perspective: true
}

export {sensorHeight, sensorRollAngle, defaultCameraState}