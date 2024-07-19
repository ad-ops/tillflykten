/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j7wzd020c3d5ad1")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j7wzd020c3d5ad1")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
})
