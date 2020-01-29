<template>
    <v-dialog v-model="show" max-width="290" scrollable persistent>
        <v-card>
            <v-card-title class="headline">Are you sure you want to delete this item??</v-card-title>

            <v-card-text>This action definitely deletes the recipe..</v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="indigo" text @click="discard()">Discard</v-btn>
                <v-btn color="indigo" text @click="accept()">Accept</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: ['show', 'recipeId'],
    methods: {
        discard() {
            this.$emit('change', { type: 'delete', action: false })
        },
        accept() {
            this.$emit('change', { type: 'delete', action: true })
        }
    }
}
</script>