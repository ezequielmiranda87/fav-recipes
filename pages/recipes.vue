<template>
    <div>
        <v-card flat class="recipes">
            <v-card class="mx-auto" max-width="700" style="margin-top: -64px;">
                <v-toolbar flat>
                    <v-text-field
                        flat
                        solo-inverted
                        hide-details
                        prepend-inner-icon="mdi-magnify"
                        label="Search"
                        style="width: 200px"
                        class="ml-0 pl-4"
                    />
                </v-toolbar>

                <v-divider></v-divider>
            </v-card>

            <RecipesList />
        </v-card>
    </div>
</template>

<script>
import RecipesList from '../components/RecipesList'

export default {
    components: {
        RecipesList
    }
}
</script>

<style scoped>
.recipes {
    margin-top: 6rem;
}
</style>
