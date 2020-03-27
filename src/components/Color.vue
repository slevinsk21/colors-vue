<template>
  <v-card :color="color" dark min-height="150" min-width="250" @click="getColor">
    <v-overlay absolute :value="showMessage" opacity="1">
      <v-card-subtitle class="text-center text-capitalize subtitle-1 red--text">
          Copied Color!
      </v-card-subtitle>
    </v-overlay>

      <div >
        <v-card-title class="text-start body-2" v-text="year" />

        <v-card-subtitle class="text-center text-capitalize subtitle-1">
          {{ name }}
          <v-divider />
          {{ color }}
        </v-card-subtitle>

        <v-card-text class="text-end" v-text="pantone" />
      </div>
  </v-card>
</template>

<script>
export default {
  name: 'Color',

  props: {
    name: {
      type: String,
      required: true,
      default: 'title Here'
    },
    color: {
      type: String,
      required: true,
      default: 'Color Here'
    },
    pantone: {
      type: String,
      required: true,
      default: 'Pantone Here'
    },
    year: {
      type: Number,
      required: true,
      default: new Date().getFullYear
    }
  },

  data: () => ({
    showMessage: false
  }),

  methods: {
    getColor() {
      this.showMessage = true
      setTimeout(() => this.showMessage = false, 800);
      this.$emit('copy');
    }
  }
}
</script>