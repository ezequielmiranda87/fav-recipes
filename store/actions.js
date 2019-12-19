export async function getRecipes({ state }, {}) {
    const { recipes } = await this.$axios.$get(
        `http://localhost:3000/api/recipes`
    )
    state.recipes = recipes
    return state.recipes
}

export async function addRecipe({ state }, recipe) {
    await this.$axios
        .$post(`http://localhost:3000/api/recipes`, recipe)
        .then(data => {
            state.recipes.push(recipe)
        })
}

export async function updateRecipe({ state }, recipe) {
    await this.$axios
        .$put(`http://localhost:3000/api/recipes/${recipe._id}`, recipe)
        .then(data => {
            const item = state.recipes.find(item => item._id === recipe._id)
            Object.assign(item, recipe)
        })
}

export async function deleteRecipe({ state }, { _id }) {
    this.$axios
        .$delete(`http://localhost:3000/api/recipes/${_id}`)
        .then(data => {
            return state.recipes.splice(
                state.recipes.findIndex(el => el._id == _id),
                1
            )
        })
}

export async function getAuthUser({ state }, { id }) {
    const user = {
        _id: '1',
        username: 'Homer',
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
    }
    state.auth = user
}

export async function fakeLogin({ state }, { user }) {
    commit('login', { username: '', password: '' })
}
