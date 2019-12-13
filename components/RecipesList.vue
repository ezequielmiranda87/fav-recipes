<template lang="">
    <div>
        <v-card width="644" class="mx-auto mt-5">
            <v-img
                src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-gingerbread-cookies-horizontal-1542056012.jpg?crop=1.00xw:0.752xh;0,0&resize=980:*"
                height="200px"
            ></v-img>

            <v-card-title>
                Christmas recipe
            </v-card-title>

            <v-card-subtitle>
                Very specy recipe
            </v-card-subtitle>

            <v-card-actions>
                <v-btn text>Description</v-btn>

                <v-btn color="purple" text>
                    Ingredients
                </v-btn>
                <v-btn color="purple" text>
                    Instructions
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn icon @click="show = !show">
                    <v-icon>{{
                        show ? 'mdi-chevron-up' : 'mdi-chevron-down'
                    }}</v-icon>
                </v-btn>
            </v-card-actions>

            <!-- <v-expand-transition>
                <div v-show="show">
                    <v-divider></v-divider>

                    <v-card-text>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        nullam viverra faucibus, aptent quis nulla quisque proin
                        natoque cubilia pellentesque non. Suspendisse cras
                        pretium nunc orci scelerisque faucibus a odio malesuada
                        aenean massa placerat bibendum senectus, himenaeos
                        pharetra magnis sociis litora imperdiet aliquam nam
                        vitae eget felis tempor. Ornare interdum maecenas mus
                        eleifend proin felis condimentum lacus senectus, erat
                        vel placerat lacinia nascetur quam elementum ad eu
                        magna, porta mauris risus posuere tempor bibendum enim
                        volutpat.
                    </v-card-text>
                </div>
            </v-expand-transition> -->

            <!-- <v-expand-transition>
                <div v-show="show">
                    <v-divider></v-divider>

                    <v-timeline dense>
                        <v-timeline-item
                            class="mb-4"
                            color="grey"
                            icon-color="grey "
                            small
                        >
                            <v-row justify="space-between">
                                <v-col>
                                    In a large bowl using a hand mixer, beat
                                    butter, brown sugar, and molasses until
                                    fluffy, about 2 minutes. Add egg and vanilla
                                    and beat until combined.
                                </v-col>
                            </v-row>
                        </v-timeline-item>

                        <v-timeline-item
                            class="mb-4"
                            color="grey"
                            icon-color="grey "
                            small
                        >
                            <v-row justify="space-between">
                                <v-col>
                                    In a medium bowl, whisk flour, spices,
                                    baking soda, and salt until combined. With
                                    the mixer on low, gradually add dry
                                    ingredients to wet ingredients until dough
                                    just comes together. (Do not overmix!)
                                </v-col>
                            </v-row>
                        </v-timeline-item>

                        <v-timeline-item class="mb-4" color="grey" small>
                            <v-row justify="space-between">
                                <v-col>
                                    Divide dough in half and create two discs.
                                    Wrap each in plastic wrap and chill until
                                    firm, about 2 to 3 hours.
                                </v-col>
                            </v-row>
                        </v-timeline-item>

                        <v-timeline-item class="mb-4" color="grey" small>
                            <v-row justify="space-between">
                                <v-col>
                                    Preheat oven to 350° and line two large
                                    baking sheets with parchment paper. Place
                                    one disc of dough on a lightly floured
                                    surface and roll until 1/4" thick. Cut out
                                    gingerbread men with a 3" wide cutter and
                                    transfer to baking sheets.
                                </v-col>
                            </v-row>
                        </v-timeline-item>

                        <v-timeline-item color="grey" small>
                            <v-row justify="space-between">
                                <v-col>
                                    Bake until slightly puffed and set, 9 to 10
                                    minutes, depending on the size of your
                                    cookie cutters. Let cool on baking sheets
                                    for 5 minutes before transferring to a
                                    cooling rack to cool completely.
                                </v-col>
                            </v-row>
                        </v-timeline-item>
                        <v-timeline-item color="grey" small>
                            <v-row justify="space-between">
                                <v-col>
                                    Repeat with remaining disc of dough.
                                    Decorate with icing and sprinkles as
                                    desired.
                                </v-col>
                            </v-row>
                        </v-timeline-item>
                    </v-timeline>
                </div>
            </v-expand-transition> -->

            <v-expand-transition>
                <div v-show="show">
                    <v-divider></v-divider>
                    <v-card class="mx-auto" tile>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title
                                    >3/4 c. (1 1/2 sticks) butter, softened
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title
                                    >3/4 c. packed brown
                                    sugar</v-list-item-title
                                >
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title
                                    >2/3 c. molasses</v-list-item-title
                                >
                            </v-list-item-content>
                        </v-list-item>
                    </v-card>
                </div>
            </v-expand-transition>
        </v-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: false
        }
    }
}
</script>

<style lang="stylus"></style>
