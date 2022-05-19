require('./bootstrap');

import App from './vue/app'
import { createApp } from 'vue'

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// library.add(faPlusSquare, faTrash)

const myV3App = createApp(App);
// myV3App.component('font-awesome-icon', FontAwesomeIcon);
myV3App.mount('#app');