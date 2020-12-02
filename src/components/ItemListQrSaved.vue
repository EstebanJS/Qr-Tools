<template>
  <v-expansion-panel>
    <v-expansion-panel-header>
      <v-list-item-content>
        <v-list-item-title v-text="title"></v-list-item-title>

        <v-list-item-subtitle>{{ content }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-card>
        <div class="d-flex flex-row justify-center align-center ">
          <QrVue :text="content" />
        </div>
        <v-card-actions>
          <v-btn v-on:click="this.delete" icon>
            <v-icon color="red lighten-1">mdi-delete-circle</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import QRCode from "easyqrcodejs";
import { mapActions } from "vuex";
import QrVue from "./Qr.vue";
export default {
  name: "ItemListQrSaved",
  components: {
    QrVue,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    type: {
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
    return {};
  },
  watch: {
    dialog(newValue) {
      if (newValue) {
        console.log("QR");
        new QRCode(document.getElementById("qr-dialog"), {
          text: this.content,
          height: 350,
          width: 350,
        });
      }
    },
  },
  methods: {
    ...mapActions(["ActRemoveItemQr", "ActRemoveItemQrCreate"]),
    delete() {
      if (this.type === "Reader") {
        this.ActRemoveItemQr(this.id);
      } else {
        this.ActRemoveItemQrCreate(this.id);
      }
    },
  },
};
</script>

<style></style>
