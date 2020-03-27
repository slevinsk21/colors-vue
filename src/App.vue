<template>
  <v-app dark>
    <Header />

    <v-content>
      <Layout />
    </v-content>

    <Footer />
  </v-app>
</template>

<script>
// Layout
import Layout from '../src/views/Layout';

// components
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: 'App',

  components: {
    Layout,
    Header,
    Footer,
  }
};
</script>
