<template>
    <v-container class="grey lighten-5">
        <DeleteDialog :show="deleteDialog" @change="handleDeleteDialog"></DeleteDialog>
        <AddDialog :show="addDialog" @change="handleAddDialog"></AddDialog>
        <UpdateDialog
            v-if="editedItem"
            :show="updateDialog"
            :recipe="editedItem"
            @change="handleUpdateDialog"
        ></UpdateDialog>

        <v-row no-gutters>
            <v-col cols="12" sm="12">
                <v-card>
                    <v-toolbar color="grey lighten-4">
                        <v-row no-gutters>
                            <v-col cols="6" md="6" sm="6">
                                <v-text-field
                                    v-model="search"
                                    append-icon="mdi-magnify"
                                    label="Search"
                                    single-line
                                    hide-details
                                ></v-text-field>
                            </v-col>

                            <v-spacer></v-spacer>

                            <v-col cols="6" md="6" sm="6">
                                <v-btn
                                    @click.stop="addDialog = true"
                                    absolute
                                    fab
                                    right
                                    color="indigo"
                                    small
                                >
                                    <v-icon>mdi-plus</v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-toolbar>

                    <v-expansion-panels>
                        <v-expansion-panel v-for="item in filteredList" v-bind:key="item._id">
                            <v-expansion-panel-header>
                                <template v-slot:default="{ open }">
                                    <v-row no-gutters>
                                        <v-row no-gutters>
                                            <v-col cols="12">
                                                <v-card-title small>{{item.name}}</v-card-title>
                                            </v-col>
                                        </v-row>
                                    </v-row>
                                </template>
                            </v-expansion-panel-header>

                            <v-expansion-panel-content>
                                <Recipe v-if=" item" key="0" :recipe="item">
                                    <template slot="actions">
                                        <v-card-actions>
                                            <v-btn
                                                small
                                                color="indigo"
                                                @click="showEditDialog(item)"
                                                text
                                            >Edit</v-btn>
                                            <v-btn
                                                small
                                                color="error"
                                                @click="showDeleteDialog(item)"
                                                text
                                            >Delete</v-btn>
                                        </v-card-actions>
                                    </template>
                                </Recipe>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-card>
            </v-col>
            <v-spacer />
        </v-row>
    </v-container>
</template>

<script>
import Recipe from '../components/Recipe'
import AddDialog from '../components/AddDialog'
import UpdateDialog from '../components/UpdateDialog'
import DeleteDialog from '../components/DeleteDialog'
import { mapMutations } from 'vuex'

export default {
    components: {
        Recipe,
        AddDialog,
        UpdateDialog,
        DeleteDialog
    },
    data() {
        return {
            rows: {
                instructions: [],
                ingredients: []
            },
            search: '',
            addDialog: '',
            updateDialog: '',
            deleteDialog: '',
            deletedItem: {},
            editedItem: {},
            newItem: {}
        }
    },

    methods: {
        handleAddDialog({ action, recipe }) {
            if (action) {
                this.$store.dispatch('addRecipe', recipe)
            }
            this.addDialog = false
        },
        handleUpdateDialog({ action, recipe }) {
            if (action) {
                this.$store.dispatch('updateRecipe', recipe)
            }
            this.updateDialog = false
        },
        handleDeleteDialog(data) {
            if (data.action) {
                this.$store.dispatch('deleteRecipe', this.deletedItem)
            }
            this.deleteDialog = false
        },
        showEditDialog(item) {
            console.log(item)
            this.editedItem = item
            this.updateDialog = true
        },
        showDeleteDialog(item) {
            this.deletedItem = item
            this.deleteDialog = true
        },
        close() {
            this.addDialog = false
            this.editedItem = {}
        },
        deleteRecipe() {
            this.$store.dispatch('deleteRecipe', this.deletedItem)
            this.deleteDialog = false
        },

        editRecipe(recipe) {
            console.log('UPDATE ECIPEEEEEEEEEEEEEEE')
            this.$store.dispatch('updateRecipe', this.editedItem)
            this.addDialog = false
        },
        addRecipe(item) {
            this.$store.dispatch('addRecipe', item)
        }
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
    },
    watch: {
        dialog(val) {
            // !val && alert('Dialog is closing')
            // this.editedItem = {}
            val || this.close()
        }
    }
}
</script>

<style scoped>
</style>
