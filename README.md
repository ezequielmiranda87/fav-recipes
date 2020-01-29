# Fav-recipes-app

> Practical Full-Stack Assignment

## Build Setup

```bash
# install dependencies
$ npm run install

# build for production and launch api server at localhost:3000
$ npm run serve


# serve with hot reload at localhost:3000
$ npm run dev


# serve api service at localhost:3030
$ npm run service

# generate static project
$ npm run generate

#generate API-DOC
$ npm run generate-doc
```

---

## Application arquitecture and Stack:

### VUE.JS (The Progressive JavaScript Framework)

### VUEX for State management

### NUXT (Progressive Vue.js Framework)

-   Production-ready app
-   Code splitting
-   Easily write Single File Components

### VUETIFY (Vue Material Design Component Framework )

-   Vuetify is the #1 component library for Vue.js
-   Use the Material Design specification
-   It's a very good mix with vue.js and nuxt

### EXPRESS.JS for back-end API

For this kind small of projects is good choose a minimalist framework. So, Expres.js it's the prefered option.

### NEDB Database (Embedded database)

The database chosed is nedb for the next reasons:

-   Lightweight database.
-   It's API is a subset of the MongoDB API.
-   Easy to use.
-   Perfect for smaller applications

---

## API REST

The REST API is listening in the following endpoint

For the documentation API DOC: http://localhost:3000/doc/

```
localhost:3030/api
```

### Resources

#### Recipes:

```
localhost:3030/api/recipes
```

Methods implemented:

```
GET localhost:3030/api/recipes
```

```
POST localhost:3030/api/recipes
```

```
PUT localhost:3030/api/recipes/{id}
```

```
DELETE localhost:3030/api/recipes/{id}
```

---

## Testing Scenarios

### 1  Scenario: Search recipes

Given the "my recipes" page is open
When the user types  into the "search field"
Then the application filter the recipe list by the search field

### 2 - Scenario: Create a recipe

GIVEN the "my recipes" page is open
WHEN the user click in the add recipe button and the user completes the form and the user clicks accept
THEN a new recipe is created

### 3 - Scenario: Cancel Creating a Récipe

GIVEN the "my recipes" page is open
WHEN the user click in the add recipe button and the user completes the form and the user clicks discard
THEN a new recipe is not created

### 4 - Scenario: Show recipe information

GIVEN the "my recipes" page is open
WHEN the user click in a recipe
THEN more information about the recipe is showed

### 5 - Scenario: Update recipe

GIVEN the "my recipes" page is open
WHEN  the user click in a recipe
THEN the user update the recipe by the form
THEN and the user click in accept
THEN a new recipe is created

### 6- Scenario: Cancel updating recipe

GIVEN the "my recipes" page is open
WHEN  the user click in a recipe
THEN the user update the recipe by the form
THEN and the user clicks in the discard button
THEN a new recipe is not updated

### 7 - Scenario: Delete recipe

GIVEN the "my recipes" page is open
WHEN the user click in a recipe and the user confirms the action
THEN the recipe is deleted

### 8 - Scenario: Cancel deleting a recipe

GIVEN the "my recipes" page is open
WHEN the user click in a recipe and the user cancels the action
THEN the recipe is  not deleted
