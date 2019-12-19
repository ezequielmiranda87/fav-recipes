export const strict = false

export const mutations = {
    async add(state, recipe) {
        state.recipes.push(recipe)
    },
    async update(state, recipe) {
        const item = state.recipes.find(item => item._id === recipe._id)
        Object.assign(item, recipe)
    },
    async delete(state, id) {
        state.recipes.splice(
            state.recipes.findIndex(el => el._id == id),
            1
        )
    }
}
