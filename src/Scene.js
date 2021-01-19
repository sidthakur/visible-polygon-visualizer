import {useState, useEffect} from "react";
import {Worldview, Grid, Cubes, Lines, FilledPolygons, GLTFScene} from "regl-worldview";
import {cubesToLines, formatGroundPolygons} from "./utils";
import {table, leftBox, rightBox, sensor, sensorStand} from "./fixedObjects";
import {legoCarModel, legoCar} from "./legoCar";
import {defaultCameraState} from "./constants";

function Scene() {
    const [groundPolygons, setGroundPolygons] = useState({});
    useEffect(() => {
        fetch("/ground-polygons/frame_08209.json")
            .then((response) => {
                return response.json();
            })
            .then((polygons) => {
                setGroundPolygons(polygons);
            });
    }, [setGroundPolygons]);
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
            {legoCar(0)}
        </GLTFScene>
        <Grid/>
    </Worldview>)
}

export default Scene;