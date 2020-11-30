<template>
  <v-list-item @click="dialog = true">
    <v-list-item-content>
      <v-list-item-title v-text="title"></v-list-item-title>

      <v-list-item-subtitle>{{ content }}</v-list-item-subtitle>
    </v-list-item-content>

    <v-list-item-action>
      <v-btn v-on:click="this.delete" icon>
        <v-icon color="red lighten-1">mdi-delete-circle</v-icon>
      </v-btn>
    </v-list-item-action>
    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="headline">
          {{ title }}
        </v-card-title>
        <v-card-text v-if="width === undefined">
          {{ content }}
        </v-card-text>
        <v-card-text v-if="width !== undefined">
          <div id="qr-dialog"></div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-list-item>
</template>

<script>
import QRCode from "easyqrcodejs";
import { mapActions } from "vuex";
export default {
  name: "ItemListQrSaved",
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    height: {
      type: Number,
      required: false,
    },
    width: {
      type: Number,
      required: false,
    },
  },
  data() {
    return {
      dialog: false,
    };
  },
  watch: {
    dialog(newValue) {
      if (newValue) {
        console.log('QR');
        new QRCode(document.getElementById("qr-dialog"), {
          text: this.content,
          height: 350,
          width: 350,
        });
      }
    },
  },
  methods: {
    ...mapActions(["ActRemoveItemQr"]),
    delete() {
      this.ActRemoveItemQr(this.id);
    },
  },
};
</script>

<style></style>
