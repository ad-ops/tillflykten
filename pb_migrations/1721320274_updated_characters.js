/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qwm91a7285ui7f6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uidkhfo5",
    "name": "player",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qwm91a7285ui7f6")

  // remove
  collection.schema.removeField("uidkhfo5")

  return dao.saveCollection(collection)
})
