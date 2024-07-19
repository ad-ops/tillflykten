/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j7wzd020c3d5ad1")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ds5gceop",
    "name": "isSender",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j7wzd020c3d5ad1")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ds5gceop",
    "name": "received",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
