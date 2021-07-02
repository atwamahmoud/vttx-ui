const api = (window as any).api;

export function sendMessage(topic: string, message: string): boolean {
  api.send(topic, message);
  return true;
}

export function subscribeToTopic(topic: string, callback: (ev: Electron.IpcRendererEvent, args: any[]) => void): void {
  api.receive(topic, callback);
}

// export function invokeFunction(fnName: string): Promise<any> {
//     return ipcRenderer.invoke(fnName);
// }
