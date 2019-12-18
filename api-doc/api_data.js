define({ "api": [
  {
    "type": "delete",
    "url": "/recipes",
    "title": "Delete a Recipe",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          }
        ]
      }
    },
    "group": "Recipes",
    "version": "0.0.0",
    "filename": "server/index.js",
    "groupTitle": "Recipes",
    "name": "DeleteRecipes"
  },
  {
    "type": "get",
    "url": "/recipes",
    "title": "List all Recipes",
    "group": "Recipes",
    "version": "0.0.0",
    "filename": "server/index.js",
    "groupTitle": "Recipes",
    "name": "GetRecipes"
  },
  {
    "type": "post",
    "url": "/recipes",
    "title": "Create a Recipe",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          }
        ]
      }
    },
    "group": "Recipes",
    "version": "0.0.0",
    "filename": "server/index.js",
    "groupTitle": "Recipes",
    "name": "PostRecipes"
  },
  {
    "type": "put",
    "url": "/recipes",
    "title": "Update a Recipe",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          }
        ]
      }
    },
    "group": "Recipes",
    "version": "0.0.0",
    "filename": "server/index.js",
    "groupTitle": "Recipes",
    "name": "PutRecipes"
  }
] });
