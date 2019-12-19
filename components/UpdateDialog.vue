<template>
    <v-dialog v-model="show" fullscreen max-width="600">
        <v-card>
            <v-toolbar color="indigo" class="white--text"
                >Add new recipe</v-toolbar
            >
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="12" md="12">
                            <v-text-field
                                v-model="recipe.name"
                                label="Name*"
                                required
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12" md="12">
                            <v-text-field
                                v-model="recipe.image_url"
                                label="Url Image*"
                                required
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12" md="12">
                            <v-textarea
                                v-model="recipe.description"
                                outlined
                                label="Description"
                            ></v-textarea>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                            <v-text-field
                                type="number"
                                v-model="recipe.diners"
                                label="Diners*"
                                required
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                            <v-switch
                                v-model="recipe.isVegetarian"
                                label="Vegetarian"
                            ></v-switch>
                        </v-col>
                        <v-divider />
                        <v-col cols="12">
                            <v-subheader>Ingredients</v-subheader>
                            <div
                                v-for="(row, index) in recipe.ingredients"
                                :key="index"
                            >
                                <v-text-field
                                    v-model="row.ingredient"
                                    label="Ingredient*"
                                    required
                                ></v-text-field>
                            </div>
                            <div>
                                <v-btn
                                    color="blue darken-1"
                                    text
                                    @click="addRow('ingredients')"
                                    >Add ingredient</v-btn
                                >
                            </div>
                        </v-col>
                        <v-divider />
                        <v-col cols="12">
                            <v-subheader>Instructions:</v-subheader>
                            <div
                                v-for="(row, index) in recipe.instructions"
                                :key="index"
                            >
                                <v-textarea
                                    v-model="row.step"
                                    outlined
                                    label="Instructions"
                                ></v-textarea>
                            </div>
                            <div>
                                <v-btn
                                    color="blue darken-1"
                                    text
                                    @click="addRow('instructions')"
                                    >Add Instruction</v-btn
                                >
                            </div>
                        </v-col>
                    </v-row>
                </v-container>
                <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="discard"
                    >Discard</v-btn
                >
                <v-btn color="blue darken-1" text @click="accept">Accept</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: ['show', 'recipe'],
    data() {
        return {}
    },
    methods: {
        addRow(field) {
            var elem = document.createElement('div')
            this.recipe[field].push({})
        },
        discard() {
            this.$emit('change', {
                type: 'create',
                action: false
            })
        },
        accept() {
            this.$emit('change', {
                type: 'create',
                action: true,
                recipe: this.recipe
            })
        }
    }
}
</script>
