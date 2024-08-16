<template>
  <div class="header-container">
    <h1>Horse Racing</h1>
    <div class="button-container">
      <button @click="generateProgram" :disabled="isRaceActive">Generate Program</button>
      <button @click="startPauseRace">Start/Pause</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    isRaceActive: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    generateProgram() {
      this.$emit('generateProgram');
    },
    startPauseRace() {
      this.$emit('startPauseRace');
    }
  }
};
</script>

<style scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: orange;
  padding: 10px;
}

h1 {
  margin: 0;
  color: white;
}

.button-container {
  display: flex;
  gap: 10px;
}

button {
  background-color: grey;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 0;
}

button:disabled {
  background-color: lightgrey;
  cursor: not-allowed;
}

button:hover {
  opacity: 0.8;
}
</style>