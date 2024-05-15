<template>
    <v-container>
        <v-card-text class="d-flex justify-center text-orange font-weight-bold">
            <h1>My Projects</h1>
        </v-card-text>

        <v-row justify="center">
            <!-- First Card -->
            <v-col cols="12" sm="6" md="4">
                <v-card class="mx-auto rounded-xl border-sm" max-width="500">
                    <v-card class="mx-auto" max-width="500">
                        <v-img class="align-end text-white rounded-d-xl" height="400" width="" src="/spoti.gif" cover>
                            <v-card-title>SpotiChat</v-card-title>
                        </v-img>

                        <v-card-subtitle class="pt-4">
                            Vuejs and Nodejs/Express
                        </v-card-subtitle>

                        <v-card-text>
                            <div>Spotify with chat system</div>

                            <div>Using Socket.Io</div>
                        </v-card-text>

                        <v-card-actions>
                            <v-btn color="orange" text href="https://github.com/jungil13/Spotify-Chat-">
                                <v-icon left>mdi-github</v-icon> GitHub
                            </v-btn>
                            <v-btn color="orange" text="Explore"></v-btn>
                        </v-card-actions>
                    </v-card>
                </v-card>
            </v-col>

            <!-- Second Card -->
            <v-col cols="12" sm="6" md="4">
                <v-card class="mx-auto rounded-xl border-sm" max-width="500">
                    <v-card class="mx-auto" max-width="500">
                        <v-img class="align-end text-white rounded-d-xl" height="400" src="/pet.jpg" cover>

                        </v-img>

                        <v-card-subtitle class="pt-4">
                            Cordova Pet Hub - Capstone
                        </v-card-subtitle>

                        <v-card-text>
                            <div>Pet Adoption with some features</div>

                            <div>-Ongiong Project</div>
                        </v-card-text>

                        <v-card-actions>
                            <v-btn color="orange" text href="https://github.com/jungil13/Spotify-Chat-">
                                <v-icon left>mdi-github</v-icon> GitHub
                            </v-btn>
                            <v-btn color="orange" text="Explore"></v-btn>
                        </v-card-actions>
                    </v-card>
                </v-card>
            </v-col>

            <!-- Third Card -->
            <v-col cols="12" sm="6" md="4">
                <v-card class="mx-auto rounded-xl border-sm" max-width="500">
                    <v-card class="mx-auto" max-width="500">
                        <v-img class="align-end text-white rounded-d-xl" height="400" src="/time.jpg" cover>

                        </v-img>

                        <v-card-subtitle class="pt-4">
                            Time Wise
                        </v-card-subtitle>

                        <v-card-text>
                            <div>AppsDev Project</div>

                            <div>Time Management/Blogging</div>
                        </v-card-text>

                        <v-card-actions>
                            <v-btn color="orange" text href="https://github.com/jungil13">
                                <v-icon left>mdi-github</v-icon> GitHub
                            </v-btn>
                            <v-btn color="orange" text="Explore"></v-btn>
                        </v-card-actions>
                    </v-card>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
</script>