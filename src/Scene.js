import {useState} from "react";
import {Worldview, Grid, Cubes, Lines, FilledPolygons, GLTFScene} from "regl-worldview";
import {cubesToLines, formatGroundPolygons, getGroundPolygonURL} from "./utils";
import {table, leftBox, rightBox, sensor, sensorStand} from "./fixedObjects";
import {legoCarModel, legoCar} from "./legoCar";
import {
    defaultCameraState,
    startFrameNo,
    lastFrameNo,
    timePerFrame,
    legoCarDisplacementPerFrame,
    legoCarPauseFrame
} from "./constants";
import {useAnimationFrame} from "@cruise-automation/hooks";

let previousFrameTime = 0;
let previousFrameNo = startFrameNo - 1;
let currentFrameNo = previousFrameNo;
let previousLegoCarDisplacement = 0;

function Scene() {
    const [groundPolygons, setGroundPolygons] = useState({});
    const [legoCarDisplacement, setLegoCarDisplacement] = useState(0);
    const [animationDisabled, setAnimationDisabled] = useState(true);
    const onButtonClick = (e) => {
        setAnimationDisabled(!animationDisabled);
    };
    useAnimationFrame((timestamp) => {
        if (timestamp > previousFrameTime + timePerFrame) {
            currentFrameNo = previousFrameNo + 1;
            if (currentFrameNo > lastFrameNo) {
                currentFrameNo = startFrameNo;
                setLegoCarDisplacement(0);
                previousLegoCarDisplacement = 0;
            }
            fetch(getGroundPolygonURL(currentFrameNo))
                .then((response) => {
                    return response.json();
                })
                .catch((response) => {
                    return {}
                })
                .then((polygons) => {
                    if ('groundPolygons' in polygons)
                        setGroundPolygons(polygons);
                });
            if (currentFrameNo < legoCarPauseFrame) {
                previousLegoCarDisplacement += legoCarDisplacementPerFrame;
                setLegoCarDisplacement(previousLegoCarDisplacement);
            }
            previousFrameNo = currentFrameNo;
            previousFrameTime = timestamp;
        }
    }, animationDisabled, [setGroundPolygons, setLegoCarDisplacement]);
    const cubesToPlot = [table, leftBox, rightBox, sensor, sensorStand];
    return (<Worldview defaultCameraState={defaultCameraState}>
        <Cubes>
            {cubesToPlot}
        </Cubes>
        <Lines>
            {cubesToLines(cubesToPlot)}
        </Lines>
        <FilledPolygons>
            {formatGroundPolygons(groundPolygons)}
        </FilledPolygons>
        <GLTFScene model={legoCarModel}>
            {legoCar(legoCarDisplacement)}
        </GLTFScene>
        <Grid/>
        <button className="Play-Button" onClick={onButtonClick}>{animationDisabled ? "Play" : "Pause"}</button>
    </Worldview>)
}

export default Scene;