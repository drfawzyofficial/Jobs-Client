// Import Methods, Packages, Files
import { createStore } from 'vuex'
import { Auth } from './Auth';
import { Admin_Store } from './Admin_Store';
import { Collection } from './Collection';

// Store Export
export const store = createStore({
    modules: {
        Auth,
        Admin_Store,
        Collection,
    }
});

