import Vue from "vue";
import Vuex from "vuex";
import theme from "@/store/modules/theme";
import undoRedo from "undo-redo-vuex";

Vue.use(Vuex);

const state = {
  todos: [],
};

const mutations = {
  addTodo(state, payload) {
    state.todos = [...state.todos, payload];
  },
};

export default new Vuex.Store({
  modules: {
    theme,
  },
  state,
  mutations,
  // plugins: [undoRedo()],
  plugins: [
    undoRedo({
      // The config object for each store module is defined in the 'paths' array
      paths: [
        {
          namespace: "theme",
          // ignoreMutations: ["SET_DARKMODE"], <-- uncomment to disable undo/redo
        }
      ],
    }),
  ],
});
