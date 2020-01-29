define({ "api": [
  {
    "type": "delete",
    "url": "/api/recipes/{id}",
    "title": "Delete a Recipe",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/recipes/2"
      }
    ],
    "group": "Recipes",
    "version": "0.0.0",
    "filename": "server/app.js",
    "groupTitle": "Recipes",
    "name": "DeleteApiRecipesId"
  },
  {
    "type": "get",
    "url": "/recipes",
    "title": "List all Recipes",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/recipes"
      }
    ],
    "group": "Recipes",
    "version": "0.0.0",
    "filename": "server/app.js",
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
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "image_url",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": ""
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "diners",
            "description": ""
          },
          {
            "group": "Body",
            "type": "Boolean",
            "optional": false,
            "field": "isVegetarian",
            "description": ""
          },
          {
            "group": "Body",
            "type": "Array",
            "optional": false,
            "field": "ingredients",
            "description": ""
          },
          {
            "group": "Body",
            "type": "Array",
            "optional": false,
            "field": "instructions",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/recipes"
      }
    ],
    "group": "Recipes",
    "version": "0.0.0",
    "filename": "server/app.js",
    "groupTitle": "Recipes",
    "name": "PostRecipes"
  },
  {
    "type": "put",
    "url": "/recipes/{id}",
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
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "image_url",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": ""
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "diners",
            "description": ""
          },
          {
            "group": "Body",
            "type": "Boolean",
            "optional": false,
            "field": "isVegetarian",
            "description": ""
          },
          {
            "group": "Body",
            "type": "Array",
            "optional": false,
            "field": "ingredients",
            "description": ""
          },
          {
            "group": "Body",
            "type": "Array",
            "optional": false,
            "field": "instructions",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/recipes/1"
      }
    ],
    "group": "Recipes",
    "version": "0.0.0",
    "filename": "server/app.js",
    "groupTitle": "Recipes",
    "name": "PutRecipesId"
  }
] });
