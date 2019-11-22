import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#f7b345',
                secondary: '#1f232c',
                dark: '#3f4a5b'
            },
        },
    }
});
