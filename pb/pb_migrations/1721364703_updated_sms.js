/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j7wzd020c3d5ad1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hbxcwqan",
    "name": "receivedTime",
    "type": "date",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j7wzd020c3d5ad1")

  // remove
  collection.schema.removeField("hbxcwqan")

  return dao.saveCollection(collection)
})
