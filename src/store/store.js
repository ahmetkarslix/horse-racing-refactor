import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

function getRandomCondition() {
  return Math.floor(Math.random() * 71) + 30;
}

const horseNames = [
  'Storm', 'Blaze', 'Comet', 'Shadow', 'Rocket',
  'Lightning', 'Thunder', 'Ghost', 'Phantom', 'Spirit',
  'Jet', 'Flash', 'Bolt', 'Tornado', 'Inferno',
  'Blizzard', 'Cyclone', 'Fury', 'Blitz', 'Whirlwind'
];

const horseColors = [
  'red', 'blue', 'green', 'yellow', 'orange',
  'purple', 'pink', 'black', 'white', 'brown',
  'cyan', 'magenta', 'lime', 'teal', 'olive',
  'navy', 'maroon', 'gold', 'silver', 'coral'
];

const horses = horseNames.map((name, index) => {
  return {
    id: index + 1,
    name: name,
    color: horseColors[index % horseColors.length],
    condition: getRandomCondition()
  };
});

export default new Vuex.Store({
  state: {
    horses: horses,
    program: [],
    results: []
  },
  mutations: {
    SET_PROGRAM(state, program) {
      state.program = program;
    },
    ADD_RESULT(state, { lap, horse }) {
      if (!state.results[lap - 1]) {
        state.results[lap - 1] = [];
      }
      state.results[lap - 1].push(horse);
    },
    UPDATE_CONDITIONS(state) {
      state.horses.forEach(horse => {
        horse.condition = getRandomCondition();
      });
    }
  },
  actions: {
    generateProgram({ commit, state }) {
      let laps = [];

      for(let i = 0; i < 6; i++) {
        let selectedHorses = [...state.horses]
            .sort(() => 0.5 - Math.random())
            .slice(0, 10);

        selectedHorses = selectedHorses.map((horse, index) => ({
          lap: i + 1,
          position: index + 1,
          name: horse.name,
          color : horse.color,
          condition: horse.condition
        }));


        laps.push({
          lap: `LAP - ${i + 1}`,
          horses: selectedHorses
        });
      }

      commit('SET_PROGRAM', laps);
    },
    addResult({ commit }, { lap, horse }) {
      commit('ADD_RESULT', { lap, horse });
    },
    updateConditions({ commit }) {
      commit('UPDATE_CONDITIONS');
    }
  },

  getters: {
    program(state) {
      return state.program;
    },
    results(state) {
      return state.results;
    },
    horses(state) {
      return state.horses;
    }
  }
});