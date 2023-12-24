import { BrowserWindow, app, nativeTheme } from 'electron'
import { join } from 'node:path'

import db from './db'

export let win

const createWindow = () => {
  win = new BrowserWindow({
    center: true,
    show: false,
    webPreferences: {
      preload: join(__dirname, '../preload/index.js')
    }
  })

  if (app.isPackaged) {
    win.loadFile(join(__dirname, '../renderer/index.html'))
  } else {
    win.loadURL('http://localhost:5173')
  }

  win.once('ready-to-show', () => {
    win.show()
  })
}

db.createTables()

nativeTheme.themeSource = 'light'

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
