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
        lg="4"
        md="6"
        sm="12"
      >
        <Color
          :i="i"
          :name="name"
          :color="color"
          :year="year"
          :pantone="pantone_value"
          @copy="copyToClipboard(color)"
          class="d-flex flex-wrap"
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

  async created() {
    await this.getData();
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
        this.list = data;
        this.totalPages = total_pages;
      } catch (e) {
        this.error = true;
      }
      finally {
        this.isLoading = false;
      }
    },
    copyToClipboard(color) {
      const body = document.getElementsByTagName('body')[0];
      const input = document.createElement('input');

      body.appendChild(input);
      input.setAttribute('value', color)
      input.select();
      document.execCommand('copy');
      body.removeChild(input);
    }
  }
};
</script>
<style scoped lang="sass">
.v-sheet.theme--dark.v-card
  border-radius: .5em
</style>