<template>
  <div id="qr-item"></div>
</template>

<script>
import QRCode from "easyqrcodejs";
export default {
  name: "Qr",
 props: {
     text: String,
  },
  mounted() {
    new QRCode(document.getElementById("qr-item"), {
      text: this.text,
      height: 275,
      width: 275,
    });
  },
};
</script>

<style>
</style>