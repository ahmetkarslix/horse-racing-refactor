<template>
  <div>
    <h2>Program</h2>
    <div class="scrollable-table">
      <div v-for="lap in program" :key="lap.lap">
        <h3>{{ lap.lap }}</h3>
        <table>
          <thead>
          <tr>
            <th>Position</th>
            <th>Name</th>
            <th>Condition</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="horse in lap.horses" :key="horse.position">
            <td>{{ horse.position }}</td>
            <td>{{ horse.name }}</td>
            <td>{{ horse.condition }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    program() {
      return this.$store.getters.program;
    }
  }
}
</script>

<style scoped>
h2 {
  text-align: center;
  margin-bottom: 10px;
}

.scrollable-table {
  max-height: 470px;
  overflow-y: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

h3 {
  margin-top: 20px;
  text-align: center;
}
</style>