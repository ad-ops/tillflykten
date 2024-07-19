/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8elho7kuhzgwg9r")

  collection.name = "sms_counterparts_view"
  collection.options = {
    "query": "SELECT DISTINCT (phone || \"_\" || counterpart) AS id, phone, counterpart FROM sms"
  }

  // remove
  collection.schema.removeField("xu8mvzim")

  // remove
  collection.schema.removeField("u1du7nm6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zmzl2don",
    "name": "phone",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "766wfkm3qtcubhn",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f2eprwwx",
    "name": "counterpart",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8elho7kuhzgwg9r")

  collection.name = "sms_counterparts"
  collection.options = {
    "query": "SELECT DISTINCT COALESCE(phone, \"_\" ,counterpart) AS id, phone, counterpart FROM sms"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xu8mvzim",
    "name": "phone",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "766wfkm3qtcubhn",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "u1du7nm6",
    "name": "counterpart",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("zmzl2don")

  // remove
  collection.schema.removeField("f2eprwwx")

  return dao.saveCollection(collection)
})
