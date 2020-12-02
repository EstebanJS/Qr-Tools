<template>
  <v-container class="mx-auto">
    <v-row>
      <v-col class="pa-0" cols="12" md="6">
        <QrGenratorVue />
      </v-col>
      <v-col class="mt-1" cols="12" md="6">
        <ListQrSavedVue title="Qr's created saved" :Items="getListQrCreate" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import QrGenratorVue from "../components/QrGenrator.vue";
import ListQrSavedVue from "@/components/ListQrSaved.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    QrGenratorVue,
    ListQrSavedVue,
  },
  computed: {
    ...mapGetters(["getListQrCreate"]),
  }
};
</script>

<style></style>
