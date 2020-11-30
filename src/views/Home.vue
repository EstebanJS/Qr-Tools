<template>
  <v-container class="mx-auto">
    <v-row>
      <v-col class="pa-0" cols="12" md="6">
        <qrCodeReaderVue/>
      </v-col>
      <v-col class="mt-1" cols="12" md="6">
        <ListQrSavedVue title="Qr´s saved" :Items="getListQr"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import qrCodeReaderVue from "@/components/qrCodeReader.vue";
import ListQrSavedVue from "@/components/ListQrSaved.vue";
import { mapGetters } from "vuex";
// @ is an alias to /src

qrCodeReaderVue;
export default {
  name: "Home",
  components: {
    qrCodeReaderVue,
    ListQrSavedVue,
  },
  computed:{
    ...mapGetters(["getListQr"])
  }
};
</script>

<style lang="scss" scoped>

</style>
