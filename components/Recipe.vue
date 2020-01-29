<template>
    <div class="recipe">
        <v-card>
            <v-list-item three-line>
                <v-row>
                    <v-col cols="12" md="3" sm="4">
                        <v-list-item-avatar tile size="150" color="grey">
                            <v-img :src="recipe.image_url" alt height="150px" width="150px"></v-img>
                        </v-list-item-avatar>
                    </v-col>

                    <v-col cols="12" md="9" sm="8">
                        <v-list-item-content>
                            <!-- <div class="overline mb-4">Author</div> -->

                            <slot name="actions"></slot>
                            <v-list-item-title class="headline mb-1">
                                {{
                                recipe.name
                                }}
                            </v-list-item-title>
                            <v-divider />

                            <v-card-actions>
                                <v-btn icon class="feature-buttom">
                                    <v-icon color="indigo">mdi-account-group</v-icon>3 diners
                                </v-btn>

                                <v-btn v-if="recipe.isVegetarian" icon class="feature-buttom">
                                    <v-icon color="indigo">mdi-food-variant</v-icon>Vegetarian
                                </v-btn>
                                <v-spacer></v-spacer>
                            </v-card-actions>

                            <v-divider />
                            <v-list-item-content>
                                {{
                                recipe.description
                                }}
                            </v-list-item-content>
                        </v-list-item-content>
                    </v-col>
                </v-row>
            </v-list-item>

            <v-divider />

            <v-row no-gutters>
                <v-col cols="12" md="6" sm="12">
                    <v-divider />
                    <v-card-title class="justify-center">Ingredients</v-card-title>
                    <v-list-item v-for="(item, index) in recipe.ingredients" v-bind:key="index">
                        <v-list-item-content prepend-inner-icon="mdi-magnify">
                            <v-list-item-title :v-if="item">
                                <v-icon>mdi-shaker-outline</v-icon>
                                {{ item.ingredient }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-col>

                <v-divider />

                <v-col cols="12" md="6" sm="12">
                    <v-divider />
                    <v-card-title class="justify-center">Instructions</v-card-title>
                    <v-timeline dense>
                        <v-timeline-item
                            class="mb-4"
                            color="indigo"
                            small
                            v-for="(item, index) in recipe.instructions"
                            v-bind:key="index"
                        >
                            <v-row justify="space-between">
                                <v-col>{{ item.step }}</v-col>
                            </v-row>
                        </v-timeline-item>
                    </v-timeline>
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>

<script>
export default {
    props: ['recipe']
}
</script>

<style scoped>
.recipe-description {
    padding: 16px;
}
.feature-buttom {
    font-size: 0.8rem;
}
</style>
