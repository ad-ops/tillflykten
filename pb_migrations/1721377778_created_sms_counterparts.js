/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "8elho7kuhzgwg9r",
    "created": "2024-07-19 08:29:38.432Z",
    "updated": "2024-07-19 08:29:38.432Z",
    "name": "sms_counterparts",
    "type": "view",
    "system": false,
    "schema": [
      {
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
      },
      {
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT DISTINCT COALESCE(phone, \"_\" ,counterpart) AS id, phone, counterpart FROM sms"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("8elho7kuhzgwg9r");

  return dao.deleteCollection(collection);
})
