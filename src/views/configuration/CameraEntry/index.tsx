import React, {ChangeEvent, FC, useEffect, useState} from "react";
import {Camera} from "src/@types/common";

type CameraEntryProps = {
  onChange: (value: Camera) => void;
  value: Camera;
};

const CameraEntry: FC<CameraEntryProps> = ({onChange, value}) => {
  function handleNameChange(e: ChangeEvent<HTMLInputElement>): void {
    onChange({...value, name: e.target.value});
  }

  function handleURLChange(e: ChangeEvent<HTMLInputElement>): void {
    onChange({...value, url: e.target.value});
  }

  function handleCalibrationCHange(e: ChangeEvent<HTMLInputElement>): void {
    onChange({...value, calibration: e.target.value as any});
  }

  return (
    <div>
      <input type="text" placeholder="Camera Name" value={value.name} onChange={handleNameChange} />
      <br />
      <input type="text" placeholder="RTSP URL" value={value.url} onChange={handleURLChange} />
      <br />
      <input
        type="text"
        placeholder="JSON calibration matric"
        value={value.calibration.toString()}
        onChange={handleCalibrationCHange}
      />
    </div>
  );
};

export default CameraEntry;
