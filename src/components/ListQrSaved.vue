<template>
  <v-card elevation="2" outlined shaped tile>
    <v-card-title>
      <v-list-item-avatar>
        <v-icon class="purple lighten-1" dark>
          mdi-qrcode
        </v-icon>
      </v-list-item-avatar>
      Qr's saved
    </v-card-title>
    <v-divider class="mx-4"></v-divider>
    <v-card-text>
      <v-expansion-panels>
        <ItemListQrSavedVue
          v-for="item in Items"
          :key="item.id"
          :id="item.id"
          :title="item.title"
          :content="item.content"
          :type="item.type"
        />
      </v-expansion-panels>
    </v-card-text>
  </v-card>
</template>

<script>
import ItemListQrSavedVue from "./ItemListQrSaved.vue";
export default {
  name: "listQrSaved",
  props:{
    Items:{
      type: Array,
      required:true,
    }
  },
  components: {
    ItemListQrSavedVue,
  }
};
</script>

<style></style>
