import React, {FC, useEffect, useRef} from "react";
import {loadPlayer} from "rtsp-relay/browser";

const LiveView: FC = () => {
  const canvas = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (!canvas.current) return;

    loadPlayer({
      url: "ws://localhost:8080/api/stream/192.168.1.50/101",
      canvas: canvas.current,
    });
  }, []);

  return <canvas ref={canvas} />;
};


export default LiveView;