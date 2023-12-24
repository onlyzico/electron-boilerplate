import sqlite3 from 'better-sqlite3'
import { app } from 'electron'
import { join } from 'node:path'

export default new (class {
  constructor() {
    this.db = new sqlite3(join(app.getPath('userData'), 'data.db'))
  }

  exec(query, params = []) {
    this.db.prepare(query).run(params)
  }

  execMany(query, items = []) {
    const stmt = this.db.prepare(query)

    this.db.transaction((items) => {
      for (const item of items) {
        stmt.run(item)
      }
    })(items)
  }

  all(query, params = []) {
    return this.db.prepare(query).all(params)
  }

  get(query, params = []) {
    return this.db.prepare(query).get(params)
  }

  var(query, params = []) {
    return this.db.prepare(query).pluck().get(params)
  }

  createTables() {
    // Insert query here
  }
})()
