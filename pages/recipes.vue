<template>
    <div>
        <v-card flat class="recipes">
            <v-card class="mx-auto" style="margin-top: -64px;">
                <v-card-title>
                    <v-text-field
                        flat
                        hide-details
                        prepend-inner-icon="mdi-magnify"
                        label="Search"
                        class="ml-0 pl-4"
                        v-model="search"
                    />
                </v-card-title>

                <v-divider></v-divider>
            </v-card>
            <RecipesList :search="search" />
        </v-card>
    </div>
</template>

<script>
import RecipesList from '../components/RecipesList'

export default {
    components: {
        RecipesList
    },
    data() {
        return {
            search: ''
        }
    },
    methods: {
        getRecipes() {
            this.$store.dispatch('getRecipes', {}).then(data => {})
        },
        saveRecipes() {
            this.$store.dispatch('updateRecipes', {}).then(data => {})
        }
    },

    mounted() {
        this.getRecipes()
    }
}
</script>

<style scoped>
.recipes {
    margin-top: 6rem;
}
</style>
