<template>
  <v-container class="mx-auto">
    <v-row>
      <v-col class="pa-0" cols="12" md="6">
          <QrGenratorVue/>
      </v-col>
      <v-col class="mt-1" cols="12" md="6"> </v-col>
    </v-row>
  </v-container>
</template>

<script>
import QrGenratorVue from "../components/QrGenrator.vue";
export default {
  components: {
    QrGenratorVue,
  },
};
</script>

<style></style>
