<template>
  <v-card elevation="2" outlined shaped tile>
    <v-card-title>
      <v-list-item-avatar>
        <v-icon class="purple lighten-1" dark>
          mdi-qrcode
        </v-icon>
      </v-list-item-avatar>
      Qr's guardados
    </v-card-title>
    <v-card-text>
      <v-list two-line>
        <ItemListQrSavedVue
          v-for="item in getListQr"
          :key="item.id"
          :id="item.id"
          :title="item.title"
          :content="item.content"
        />
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
import ItemListQrSavedVue from "./ItemListQrSaved.vue";
export default {
  name: "listQrSaved",
  components: {
    ItemListQrSavedVue,
  },
  computed: {
    ...mapGetters(["getListQr"]),
  },
};
</script>

<style></style>
