import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('ipcRenderer', {
  send: (channel, ...args) => {
    ipcRenderer.send(channel, ...args)
  },
  invoke: (channel, ...args) => ipcRenderer.invoke(channel, ...args),
  on: (channel, listener) => {
    ipcRenderer.on(channel, listener)
  },
  removeListener: (channel, listener) => {
    ipcRenderer.removeListener(channel, listener)
  }
})
