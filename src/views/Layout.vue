<template>
  <v-container>
    <v-card class="mx-auto" dark color="blue-grey darken-4" max-width="1024">
      <v-card-title class="d-flex justify-center">
        <span class="title font-weight-light ">Colors</span>
      </v-card-title>
    </v-card>

    <ColorList />

  </v-container>
</template>
<script>
// components
import ColorList from '../components/ColorList';

export default {
  name: 'Layout',
  components: { ColorList },

};
</script>
