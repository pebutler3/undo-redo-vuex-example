import { scaffoldStore } from "undo-redo-vuex";

const namespaced = true;

const state = {
  // Define vuex state properties as normal
  darkMode: false,
};

const actions = {
  setDarkMode({ commit }, darkMode) {
    commit("SET_DARKMODE", darkMode);
  },
};

const mutations = {
  SET_DARKMODE(state, darkMode) {
    state.darkMode = darkMode;
  },
  /*
   * NB: The emptyState mutation HAS to be impemented.
   * This mutation resets the state props to a "base" state,
   * on top of which subsequent mutations are "replayed"
   * whenever undo/redo is dispatched.
   */
  emptyState: (state) => {
    // Sets some state prop to an initial value
    state.darkMode = false;
  },

  // Define vuex mutations as normal
};

export default scaffoldStore({
  state,
  actions,
  mutations,
  namespaced: namespaced,
});
