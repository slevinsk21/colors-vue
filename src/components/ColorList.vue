<template>
  <v-container>
    <v-card class="mx-auto" dark color="blue-grey darken-4" max-width="1024">
      <v-card-title class="d-flex justify-center">
        <span class="title font-weight-light ">Colors</span>
      </v-card-title>
    </v-card>

    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card dark>
            <v-card-title class="headline">Unlimited music now</v-card-title>

            <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>

            <v-card-actions>
              <v-btn text>Listen Now</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col
          v-for="(item, i) in list"
          :key="i"
          cols="4"
        >
          <v-card :color="item.color" dark>

            <!-- <div class="d-flex flex-no-wrap justify-space-between"> -->
              <div>
                <v-card-title class="text-start body-2" v-text="item.year" />

                <v-card-subtitle class="text-center text-capitalize subtitle-1">
                  {{ item.name }}
                  <v-divider />
                  {{ item.color }}
                </v-card-subtitle>

                <v-card-text class="text-end" v-text="item.pantone_value" />
            <!-- </div> -->
              </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
<button @click="getData">HOLA</button>
    <div class="text-center">
    <v-pagination
      color="pink darken-4"
      circle
      v-model="page"
      :length="totalPages"
    />
  </div>
  </v-container>
</template>
imp
<script>
import colorsService from '../../../ass/src/services/colors.services';

export default {
  name: 'ColorList',
  data: () => ({
    list: [],
    page: 1,
    totalPages: null
  }),
  // created() {
  //   this.getData();
  // },
  watch: {
    page(value) {
      this.getData({ page: value });
    }
  },
  methods: {
    async getData(q = null) {
      console.log('DESDE EL WATCH', q);
      try {
        const { data, total_pages } = await colorsService.getAll({page: 2});
        this.list = data;
        this.totalPages = total_pages;
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>
<style scoped lang="sass">
.v-sheet.theme--dark.v-card
  border-radius: .5em
</style>