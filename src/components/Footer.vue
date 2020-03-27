<template>
  <v-card height="150">
    <v-footer absolute dark>
      <v-col
        class="overline text-center"
        cols="12"
      >
        <p>
          {{ new Date().getFullYear() }}
          developed by:
          <span class="pink--text text--darken-4"> @lnl.cast </span>
        </p>
      </v-col>
    </v-footer>
  </v-card>
</template>

<script>
export default {
  name: 'Footer'
}
</script>