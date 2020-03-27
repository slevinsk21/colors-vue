<template>
  <v-app dark>
    <Header />

    <v-content>
      <ColorList />
    </v-content>

    <Footer />
  </v-app>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
import ColorList from './components/ColorList';

export default {
  name: 'App',

  components: {
    Header,
    Footer,
    ColorList
  }
};
</script>
