<template>
<v-container>
  <Loading :loading="!error && isLoading" />

  <ContentMessage
    v-if="error"
    color="error darken-4"
    message="Sorry an error has occurred"
    :method="getData"
    methodName="Reload data"
  />

  <ContentMessage
    v-if="!isLoading && list.length === 0"
    color="warning"
    message="OMG No data recieved"
    :method="getData"
    methodName="Reload data"
  />

  <v-row v-if="!error && !isLoading && list.length > 0" dense>
    <v-col
      v-for="({ name, color, year, pantone_value }, i) in list"
      :key="i"
      cols="4"
    >
      <Color
        :name="name"
        :color="color"
        :year="year"
        :pantone="pantone_value"
        @copy="copy(color)"
      />
    </v-col>
  </v-row>


  <div v-if="!error && !isLoading && list.length > 0" class="text-center">
  <v-pagination
    color="pink darken-4"
    circle
    v-model="page"
    :length="totalPages"
  />
</div>
</v-container>
</template>

<script>
// HTTP Request
import getAll from '../plugins/Requester';

// Components
import Loading from './Loading';
import ContentMessage from './ContentMessage';
import Color from './Color';

export default {
  name: 'ColorList',

  components: {
    Loading,
    ContentMessage,
    Color
  },

  data: () => ({
    isLoading: false,
    error: false,
    list: [],
    page: 1,
    totalPages: null
  }),

  created() {
    this.getData();
  },

  watch: {
    page(page) {
      this.getData({ page });
    }
  },

  methods: {
    async getData(q = null) {
      this.isLoading = true;
      this.error = false;

      try {
        const { data, total_pages } = await getAll('colors', q);
        console.log(data, total_pages);

        this.list = data // [];
        this.totalPages = total_pages //0;
      } catch (e) {
        console.log(e);
        this.error = true;
      }
      finally {
        this.isLoading = false;
      }
    },
    copy(color) {
      color.select();
      color.setSelectionRange(0, 99999);
      document.execCommand('copy');
    }
  }
};
</script>
<style scoped lang="sass">
.v-sheet.theme--dark.v-card
  border-radius: .5em
</style>