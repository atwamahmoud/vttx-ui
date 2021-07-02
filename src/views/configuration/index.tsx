import React, {FC, useEffect, useState} from "react";
import { Camera } from "src/@types/common";
import useCameras from "../../hooks/useCameras";
import Button from "../../components/Button";
import CameraEntry from "./CameraEntry";

const Configuration: FC = () => {
  
  const [cameras, setCameras] = useCameras();
  const [currentCameras, setCurrentCameras] = useState<Camera[]>(cameras);

  useEffect(() => {
    setCurrentCameras(currentCameras);
  }, [cameras]);

  function getCameraChangeHandler(idx: number) {
    
    return function cameraChangeHandler(camera: Camera) {
      setCurrentCameras([
        ...currentCameras.slice(0, idx),
        camera,
        ...currentCameras.slice(idx+1)
      ]);
    }
  }

  function renderCameras(): JSX.Element[] {
    return currentCameras.map((camera, i) => (
      <CameraEntry onChange={getCameraChangeHandler(i)} value={camera} key={i.toString()} />
    ))
  }

  function addCamera(): void {
    setCurrentCameras([
      ...currentCameras,
      {
        name: "",
        calibration: [],
        url: ""
      }
    ])
  }

  function saveCameras() {
    setCameras(currentCameras.map(camera => ({
      ...camera,
      calibration: JSON.parse(camera.calibration as unknown as string)
    })));
  }

  return (
    <section>
      {renderCameras()}
      <Button onClick={addCamera} type="button" text="Add Camera" variant="secondary" />
      <Button onClick={saveCameras} type="button" text="Save configuration" variant="primary" />
    </section>
  );
};

export default Configuration;
