<template>
  <v-card elevation="2" outlined shaped tile>
    <v-card-title>
      <v-list-item-avatar>
        <v-icon class="purple lighten-1" dark>
          mdi-qrcode
        </v-icon>
      </v-list-item-avatar>
      {{title}}
    </v-card-title>
    <v-divider class="mx-4"></v-divider>
    <v-card-text>
      <v-list two-line>
        <ItemListQrSavedVue
          v-for="item in Items"
          :key="item.id"
          :id="item.id"
          :title="item.title"
          :content="item.content"
          :width="item.width ? item.width : undefined"
          :height="item.height ? item.height : undefined"
        />
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
import ItemListQrSavedVue from "./ItemListQrSaved.vue";
export default {
  name: "listQrSaved",
  components: {
    ItemListQrSavedVue,
  },
  props:{
    title:{
      type:String,
      required:true
    },
    Items:{
      type:Array,
      required:true
    }
  }
};
</script>

<style></style>
