<template>
<v-col cols="12">
    <v-card dark :color="color">
    <v-card-title class="headline d-flex justify-center" v-text="message" />

    <v-card-actions v-if="method" class="d-flex justify-center" >
        <v-btn class="text-center" text @click="method">{{ methodName }}</v-btn>
    </v-card-actions>
    </v-card>
</v-col>
</template>

<script>
export default {
  name: 'ContentMessage',

  props: ['color', 'message', 'method', 'methodName']
}
</script>