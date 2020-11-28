<template>
  <v-dialog persistent v-model="open" max-width="500px">
    <v-card>
      <v-card-title>
        <span>Result</span>
        <v-spacer></v-spacer>
        <v-btn color="black" text @click="open = false">
          <v-icon dark>
            mdi-close
          </v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col>
              {{ decode }}
            </v-col>
            <v-col>
              <span>Do you wanna save the result?</span>
              <v-form>
                <v-text-field
                  v-model="title"
                  label="Titulo"
                  required
                ></v-text-field>
              </v-form>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-btn color="purple" class="white--text" @click="save">
          SAVE
        </v-btn>
        <v-snackbar v-model="snackbar">
          <v-icon dark>
            mdi-save
          </v-icon>
          Guardado

          <template v-slot:action="{ attrs }">
            <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
              <v-icon dark>
                mdi-close
              </v-icon>
            </v-btn>
          </template>
        </v-snackbar>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "dialogSaveQr",
  props: {
    response: {
      type: String,
    },
  },
  data() {
    return {
      snackbar: false,
      open: false,
      title: "Add title",
      decode: "",
    };
  },
  watch: {
    response(newValue) {
      if (newValue !== "") {
        this.open = true;
        this.decode = newValue;
      }
    },
    open(newValue) {
      if (!newValue) {
        this.$emit("reload");
      }
    },
  },
  methods: {
    ...mapActions(["ActAddItemQr"]),
    save() {
      const item = {
        title: this.title,
        content: this.decode,
      };
      this.ActAddItemQr(item);
      this.open = false;
      this.snackbar = true
    },
  },
};
</script>

<style></style>
