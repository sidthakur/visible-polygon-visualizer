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

// Animation
const startFrameNo = 8209;
const lastFrameNo = 8587;
const timePerFrame = 33;
const legoCarDisplacementPerFrame = 0.1;
const legoCarPauseFrame = 8475;

export {
    sensorHeight,
    sensorRollAngle,
    defaultCameraState,
    startFrameNo,
    lastFrameNo,
    timePerFrame,
    legoCarDisplacementPerFrame,
    legoCarPauseFrame
}