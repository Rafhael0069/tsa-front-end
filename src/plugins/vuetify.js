import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        secondary: colors.grey.darken1,
        accent: colors.shades.black,
        error: colors.red.accent3,
      },
    },
  },
});
