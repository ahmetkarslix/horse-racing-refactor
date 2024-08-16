<template>
  <div id="app">
    <!-- Header -->
    <div class="top-center">
      <Header
          @generateProgram="generateProgram"
          @startPauseRace="startPauseRace"
          :isRaceActive="isRaceActive"
      ></Header>
    </div>

    <!-- Sol Panel: HorseList -->
    <div class="left-panel">
      <HorseList></HorseList>
    </div>

    <!-- Orta Panel: RaceTrack -->
    <div class="middle-panel">
      <RaceTrack @horseFinished="addResult" ref="raceTrack"></RaceTrack>
    </div>

    <!-- Sağ Panel1: Program  -->
    <div class="right-panel1">
      <Program></Program>
    </div>

    <!-- Sağ Panel2: Result -->
    <div class="right-panel2">
      <Result :results="results"></Result>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import HorseList from './components/HorseList.vue';
import RaceTrack from './components/RaceTrack.vue';
import Program from './components/Program.vue';
import Result from './components/Result.vue';

export default {
  name: 'App',
  components: {
    Header,
    HorseList,
    RaceTrack,
    Program,
    Result
  },
  data() {
    return {
      currentLap: 1,
      results: [],
      isRaceActive: false,
    };
  },
  methods: {
    generateProgram() {
      this.$store.dispatch('generateProgram');
      this.results = [];
      this.currentLap = 1;
    },
    startPauseRace() {
      this.isRaceActive = !this.isRaceActive;
      this.$refs.raceTrack.startPauseRace();
    },
    addResult({ lap, horse }) {
      if (!this.results[lap - 1]) {
        this.results[lap - 1] = [];
      }
      this.results[lap - 1].push(horse);

      this.results = [...this.results];
    }
  }
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.top-center {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: orange;
  padding: 10px;
}

.left-panel {
  position: fixed;
  top: 70px;
  left: 0;
  width: 20%;
  height: 600px;
}


.middle-panel {
  position: fixed;
  top: 70px;
  left: 21%;
  width: 40%;
  height: 600px;
}

.right-panel1 {
  position: fixed;
  top: 70px;
  left: 55%;
  width: 20%;
  height: 600px;
  overflow-y: auto;
}

.right-panel2 {
  position: fixed;
  top: 70px;
  left: 78%;
  width: 20%;
  height: 600px;
  overflow-y: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  background-color: #f2f2f2;
}
</style>