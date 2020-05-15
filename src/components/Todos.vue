<template>
  <div :class="{ 'dark-mode' : darkMode }" class="todos">
    Todos!
    {{ todos }}
    <div class="todos__actions">
      <input v-model="newTodo" type="text" placeholder="Add todo" @keydown.enter.prevent="addTodo" />
      <button @click="undo" :disabled="!canUndo" type="button">Undo</button>
      <button @click="redo" :disabled="!canRedo" type="button">Redo</button>
    </div>
    <button @click="changeTheme" type="button">Dark Mode</button>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

const newTodo = "";

export default {
  name: "Todos",
  data() {
    return {
      newTodo: newTodo
    };
  },
  computed: {
    ...mapState(["todos"]),
    ...mapState({
      darkMode: state => state.theme.darkMode,
      canUndo: state => state.theme.canUndo,
      canRedo: state => state.theme.canRedo
    }),

  },
  methods: {
    addTodo() {
      if (!this.newTodo) return;
      this.$store.commit("addTodo", this.newTodo);
      this.newTodo = newTodo;
    },
    changeTheme() {
      this.setDarkMode(!this.darkMode);
    },
    ...mapActions("theme", ["undo", "redo", "setDarkMode"]),
  },
};
</script>

<style>
.todos {
  align-items: center;
  display: flex;
  flex-direction: column;
}

.todos__actions {
  align-items: center;
  display: flex;
}

button {
  max-width: 200px;
  margin: 0.25rem;
}

button:not(:disabled) {
  background-color: pink;
}

.dark-mode {
  background-color: #333;
  color: #fff;
}
</style>