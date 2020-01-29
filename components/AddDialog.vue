<template>
    <v-dialog v-model="show" fullscreen max-width="600">
        <v-card>
            <v-toolbar color="indigo" class="white--text">Add new recipe</v-toolbar>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="12" md="12">
                            <v-text-field v-model="newRecipe.name" label="Name*" required></v-text-field>
                        </v-col>
                        <!-- 
                        <v-col cols="12" sm="12" md="12">
                            <v-file-input
                                accept="image/png, image/jpeg, image/bmp"
                                placeholder="Pick an image from your computer"
                                prepend-icon
                                append-icon="mdi-camera"
                                label="Avatar"
                            ></v-file-input>
                        </v-col>-->

                        <v-col cols="12" sm="12" md="12">
                            <v-text-field v-model="newRecipe.image_url" label="Url Image*" required></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12" md="12">
                            <v-textarea
                                v-model="newRecipe.description"
                                outlined
                                label="Description"
                            ></v-textarea>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                            <v-text-field
                                type="number"
                                v-model="newRecipe.diners"
                                label="Diners*"
                                required
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                            <v-switch v-model="newRecipe.isVegetarian" label="Vegetarian"></v-switch>
                        </v-col>
                        <v-divider />
                        <v-col cols="12">
                            <v-subheader>Ingredients</v-subheader>
                            <div v-for="(row, index) in newRecipe.ingredients" :key="index">
                                <v-text-field v-model="row.ingredient" label="Ingredient*" required></v-text-field>
                            </div>
                            <div>
                                <v-btn
                                    color="blue darken-1"
                                    text
                                    @click="addRow('ingredients')"
                                >Add ingredient</v-btn>
                            </div>
                        </v-col>
                        <v-divider />
                        <v-col cols="12">
                            <v-subheader>Instructions:</v-subheader>
                            <div v-for="(row, index) in newRecipe.instructions" :key="index">
                                <v-textarea v-model="row.step" outlined label="Instructions"></v-textarea>
                            </div>
                            <div>
                                <v-btn
                                    color="blue darken-1"
                                    text
                                    @click="addRow('instructions')"
                                >Add Instruction</v-btn>
                            </div>
                        </v-col>
                    </v-row>
                </v-container>
                <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="discard">Discard</v-btn>
                <v-btn color="blue darken-1" text @click="accept">Accept</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: ['show'],
    data() {
        return {
            newRecipe: {
                ingredients: [],
                instructions: []
            },
            rows: []
        }
    },
    methods: {
        addRow(field) {
            var elem = document.createElement('div')
            console.log('Add ROW')
            console.log(field)
            this.newRecipe[field].push({})
        },
        removeElement(index) {
            this.rows.splice(index, 1)
        },
        discard() {
            this.$emit('change', {
                type: 'create',
                action: false
            })
            this.newRecipe = {
                ingredients: [],
                instructions: []
            }
        },
        accept() {
            this.$emit('change', {
                type: 'create',
                action: true,
                recipe: this.newRecipe
            })
            this.newRecipe = {
                ingredients: [],
                instructions: []
            }
        }
    }
}
</script>