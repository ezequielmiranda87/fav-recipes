export async function getRecipes({ state }, {}) {
    state.recipes = await this.$axios.$get(`http://localhost:3000/api/recipes`)
    return state.recipes
}

export async function filterRecipes({ state }, { name }) {
    return {}
}

export async function addRecipe({ commit }, recipe) {
    this.$axios
        .$post(`http://localhost:3000/api/recipes`, recipe)
        .then(data => {
            commit('add', recipe)
        })
}

export async function updateRecipe({ commit }, recipe) {
    debugger
    this.$axios
        .$put(`http://localhost:3000/api/recipes/${recipe._id}`, recipe)
        .then(data => {
            commit('update', recipe)
        })
}

export async function deleteRecipe({ commit }, { _id }) {
    this.$axios
        .$delete(`http://localhost:3000/api/recipes/${_id}`)
        .then(data => {
            commit('delete', _id)
        })
}