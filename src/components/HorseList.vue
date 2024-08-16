<template>
  <div class="horse-list-container">
    <h2>Horse List</h2>
    <div class="scrollable-table">
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Condition</th>
          <th>Color</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="horse in allHorses">
          <td>{{ horse.name }}</td>
          <td>{{ horse.condition }}</td>
          <td :style="{ backgroundColor: horse.color }">{{ horse.color }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<script>
export default {
  computed: {
    allHorses() {
      return this.$store.state.horses;
    }
  }
}

</script>

<style scoped>
h2 {
  text-align: center;
  margin-bottom: 10px;
}

.horse-list-container {
  width: 100%;
}

.scrollable-table {
  max-height: 590px;
  overflow-y: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}
</style>