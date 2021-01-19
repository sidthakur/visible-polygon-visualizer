import {sensorHeight, sensorRollAngle} from "./constants";

const Quaternion = require("quaternion");

const brown = {r: 193 / 255, g: 143 / 255, b: 107 / 255, a: 1}

const table = {
    pose: {
        orientation: { x: 0, y: 0, z: 0, w: 1 },
        position: { x: 0, y: 50, z: -1 }
    },
    scale: { x: 60, y: 120, z: 2 },
    color: brown
}

const darkBrown = {r: (0.5 * 193) / 255, g: (0.5 * 143) / 255, b: (0.5 * 107) / 255, a: 1}

const leftBox = {
    pose: {
        orientation: Quaternion.fromEuler(-Math.PI/ 6, Math.PI / 2, 0),
        position: { x: -12, y: 48, z: 10 }
    },
    scale: { x: 20, y: 20, z: 6 },
    color: darkBrown
}

const rightBox = {
    pose: {
        orientation: Quaternion.fromEuler(Math.PI / 5, 0, 0),
        position: { x: 15, y: 55, z: 15 }
    },
    scale: { x: 10, y: 20, z: 30 },
    color: darkBrown
};

const lightGrey = { r: 200 / 255, g: 200 / 255, b: 200 / 255, a: 1 };

const sensor = {
    pose: {
        orientation: Quaternion.fromEuler(Math.PI / 2, 0, sensorRollAngle + Math.PI / 2),
        position: { x: 0, y: 0, z: sensorHeight }
    },
    scale: { x: 2, y: 5, z: 1 },
    color: lightGrey
}

const darkGrey = { r: 50 / 255, g: 50 / 255, b: 50 / 255, a: 1 };

const sensorStand = {
    pose: {
        orientation: Quaternion.fromEuler(0, 0, 0),
        position: { x: 0, y: 0, z: sensorHeight / 2 }
    },
    scale: { x: 1, y: 1, z: sensorHeight },
    color: darkGrey
}

export {table, leftBox, rightBox, sensor, sensorStand}