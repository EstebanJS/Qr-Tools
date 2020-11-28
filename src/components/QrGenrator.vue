<template>
  <v-card>
    <div id="qr"></div>
    <v-card-title>
      Generate Qr
    </v-card-title>
    <v-divider class="mx-4"></v-divider>
    <form @submit.prevent="submit">
      <v-card-text>
        <v-text-field v-model="Content" label="Content" required></v-text-field>
      </v-card-text>
      <div class="flex">
        <v-checkbox
          v-model="save"
          hide-details
          color="purple"
          class="shrink mr-2 mt-0"
        ></v-checkbox>
        <v-text-field
          :disabled="!save"
          v-model="title"
          label="Do yo wanna save QR"
        ></v-text-field>
      </div>
      <v-divider class="mx-4"></v-divider>
      <v-card-actions>
        <v-btn type="submit" depressed color="purple" class="white--text">
          {{ save ? "Generate and save" : "Generate" }}
        </v-btn>
      </v-card-actions>
    </form>
  </v-card>
</template>

<script>
import QRCode from "easyqrcodejs";
import { mapActions } from "vuex";
export default {
  name: "QrGenerator",
  data: () => ({
    Content: "",
    save: false,
    title: "Add title",
  }),
  methods: {
    ...mapActions(["ActAddItemQrCreate"]),
    submit() {
      new QRCode(document.getElementById("qr"), {
        text: this.Content,
        height: 350,
        width: 350,
      });
      if (this.save) {
        const data = {
          title: this.title,
          Content: this.Content,
          height: 350,
          width: 350,
        };
        this.ActAddItemQrCreate(data)
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#qr {
  display: flex;
  justify-content: center;
  padding: 10px;
  align-items: center;
}
.flex {
  display: flex;
  padding: 12px;
}
</style>
