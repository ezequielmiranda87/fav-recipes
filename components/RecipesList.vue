<template>
    <div>
        <div v-if="filteredList.length > 0">
            <Recipe
                class="reciper-container"
                v-for="(recipe, i) in filteredList"
                :key="i"
                :recipe="recipe"
            ></Recipe>
        </div>
    </div>
</template>

<script>
import Recipe from './Recipe'
export default {
    props: ['recipes', 'search'],
    components: {
        Recipe
    },
    data() {
        return {}
    },
    computed: {
        list() {
            return this.$store.state.recipes
        },
        userList() {},
        filteredList() {
            return this.$store.state.recipes.filter(recipe => {
                return recipe.name
                    .toLowerCase()
                    .includes(this.search.toLowerCase())
            })
        }
    }
}
</script>

<style scoped>
.reciper-container {
    margin: 2rem 0;
}
</style>
