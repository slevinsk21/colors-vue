<template>
    <v-app-bar
      app
      color="pink darken-4"
      dark
    >
      <div class="d-flex align-center">
        <h2>Colors vue.js</h2>
      </div>

      <v-spacer />

      <v-btn
        href="https://github.com/slevinsk21/colors-vue"
        target="_blank"
        text
      >
        <span class="mr-2">Repository</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
</template>

<script>
export default {
  name: 'Header',
};
</script>