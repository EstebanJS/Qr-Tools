<template>
  <div class="about d-flex flex-row justify-center align-center between">
    <v-card width="400">
      <v-img
        alt="EstebanJS"
        src="https://user-images.githubusercontent.com/41396044/94162562-76a95580-fe4c-11ea-9be4-432677579e4c.png"
      ></v-img>
      <div class="d-flex flex-row align-center between">
        <v-avatar size="56">
          <v-img
            alt="EstebanJS"
            src="https://avatars1.githubusercontent.com/u/41396044?s=400&u=a463e93ecb55f284fcb641f363abf6f9c645ecc8&v=4"
          ></v-img>
        </v-avatar>
        <div>
          <v-card-title> Yeisson Esteban Jimenez Bustos </v-card-title>
          <v-card-subtitle>
            Web Developer
            <a
              href="https://esteban-js.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <v-icon>mdi-link</v-icon>
            </a>
          </v-card-subtitle>
        </div>
      </div>
      <v-card-text>
        <v-list flat>
          <v-subheader>Contact</v-subheader>
          <v-list-item-group v-model="item" color="primary">
            <v-list-item v-for="(item, i) in social" :key="i">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <a :href="item.link" target="_blank" rel="noopener noreferrer">
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </a>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "about",
  data: () => ({
    social: [
      {
        icon: "mdi-github",
        name: "GitHub",
        link: "https://github.com/EstebanJS",
        text: "EstebanJS",
      },
      {
        icon: "mdi-twitter",
        name: "Twitter",
        link: "https://twitter.com/EstebanJS_",
        text: "@EstebanJS_",
      },
      {
        icon: "mdi-instagram",
        name: "Instagram",
        link: "https://www.instagram.com/estebanjs_/",
        text: "@estebanjs_",
      },
      {
        icon: "mdi-microsoft-outlook",
        name: "Outllok",
        link: "mailto:yeisson310@hotmail.com",
        text: "Email",
      },
    ],
  }),
};
</script>
<style lang="scss" scoped>
.about {
  height: 100%;
}
a {
  color: none;
}
a:link,
a:visited,
a:active {
  text-decoration: none;
}
</style>
