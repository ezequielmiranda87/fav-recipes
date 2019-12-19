export async function getRecipes({ state }, {}) {
    const { recipes } = await this.$axios.$get(
        `http://localhost:3000/api/recipes`
    )
    state.recipes = recipes
    return state.recipes
}

export async function addRecipe({ commit }, recipe) {
    this.$axios
        .$post(`http://localhost:3000/api/recipes`, recipe)
        .then(data => {
            commit('add', recipe)
        })
}

export async function updateRecipe({ commit }, recipe) {
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

export async function getAuthUser({ commit }, { id }) {
    const user = {
        _id: '1',
        username: 'Homer',
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
    }
    return user
}

export async function fakeLogin({ commit }, { user }) {
    commit('login', { username: '', password: '' })
}
