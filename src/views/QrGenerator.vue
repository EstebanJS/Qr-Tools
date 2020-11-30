<template>
  <v-container class="mx-auto">
    <v-row>
      <v-col cols="12" md="6">
          <QrGenratorVue/>
      </v-col>
      <v-col cols="12" md="6">
        <ListQrSavedVue title="Qr´s Created saved" :Items="getListQrCreate"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import ListQrSavedVue from "@/components/ListQrSaved.vue";
import QrGenratorVue from "@/components/QrGenrator.vue";
export default {
  components: {
    QrGenratorVue,
ListQrSavedVue
  },
  computed:{
    ...mapGetters(["getListQrCreate"])
  }
};
</script>

<style></style>
