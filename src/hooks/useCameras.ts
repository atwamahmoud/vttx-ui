import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Camera } from "src/@types/common";
import { sendMessage } from "../utils/ipc";



export default function useCameras(): [Camera[], Dispatch<SetStateAction<Camera[]>>] {
    const [cameras, setCameras] = useState<Camera[]>([])
    useEffect(() => {
       sendMessage("save-cameras", JSON.stringify(cameras))
    }, [cameras]);
    return [cameras, setCameras];
}