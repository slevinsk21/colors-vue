<template>
  <v-container style="height: 400px;" v-if="loading">
    <v-row class="fill-height" align-content="center" justify="center">
      <v-col class="subtitle-1 text-center" cols="12">Loading...</v-col>
      <v-col cols="6">
        <v-progress-linear color="pink darken-4" indeterminate rounded height="8" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Loading',

  props: ['loading']
}
</script>