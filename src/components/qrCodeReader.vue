<template>
  <v-card>
    <p class="error">{{ error }}</p>
    <qrcode-stream
      @decode="onDecode"
      :camera="camera"
      @init="onInit"
      v-if="!destroyed"
    >
      <div class="validation-pending" v-if="loading">
        <v-progress-circular
          :size="70"
          :width="7"
          color="purple"
          indeterminate
          class="mx-auto"
        ></v-progress-circular>
      </div>
    </qrcode-stream>
    <dialogSaveQrVue :response="result" v-on:reload="reload" />
    <v-card-actions class="grey">
      <v-btn
        :disabled="camera === 'auto' ? true : false"
        @click="switchCamera"
        class="mx-auto"
        fab
        dark
        large
        color="purple"
      >
        <v-icon dark>
          mdi-camera-retake-outline
        </v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { QrcodeStream } from "vue-qrcode-reader";
import dialogSaveQrVue from "./dialogSaveQr.vue";
export default {
  name: "QrCodeReader",
  components: {
    QrcodeStream,
    dialogSaveQrVue,
  },
  data() {
    return {
      loading: false,
      result: "",
      error: "",
      camera: "rear",
      noRearCamera: false,
      noFrontCamera: false,
      destroyed: false,
    };
  },

  methods: {
    onDecode(result) {
      this.result = result;
    },
    switchCamera() {
      switch (this.camera) {
        case "front":
          if (!this.noRearCamera) {
            this.camera = "rear";
          }
          break;
        case "rear":
          if (!this.noFrontCamera) {
            this.camera = "front";
          }
          break;
      }
    },

    async onInit(promise) {
      this.loading = true;
      this.error = "";
      try {
        await promise;
      } catch (error) {
        const triedFrontCamera = this.camera === "front";
        const triedRearCamera = this.camera === "rear";

        const cameraMissingError = error.name === "OverconstrainedError";

        if (triedRearCamera && cameraMissingError) {
          this.noRearCamera = true;
          this.camera = "auto";
        }

        if (triedFrontCamera && cameraMissingError) {
          this.noFrontCamera = true;
          this.camera = "auto";
        }

        if (error.name === "NotAllowedError") {
          this.error = "ERROR: you need to grant camera access permisson";
        } else if (error.name === "NotFoundError") {
          this.error = "ERROR: no camera on this device";
        } else if (error.name === "NotSupportedError") {
          this.error = "ERROR: secure context required (HTTPS, localhost)";
        } else if (error.name === "NotReadableError") {
          this.error = "ERROR: is the camera already in use?";
        } else if (error.name === "OverconstrainedError") {
          this.error = "ERROR: installed cameras are not suitable";
        } else if (error.name === "StreamApiNotSupportedError") {
          this.error = "ERROR: Stream API is not supported in this browser";
        }
      } finally {
        this.loading = false;
      }
    },
    async reload() {
      this.destroyed = true;
      this.result = "";

      await this.$nextTick();

      this.destroyed = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.ChangeCamera {
  position: absolute;
  bottom: 2%;
  right: 0;
}
.validation-pending {
  position: absolute;
  width: 100%;
  height: 100%;

  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  font-weight: bold;
  font-size: 1.4rem;
  padding: 10px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
}
</style>
