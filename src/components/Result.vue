<template>
  <div>
    <h2>Results</h2>
    <div class="scrollable-table">
      <div v-for="(lapResult, lapIndex) in results" :key="lapIndex">
        <h3>LAP - {{ lapIndex + 1 }}</h3>
        <table>
          <thead>
          <tr>
            <th>Position</th>
            <th>Name</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(horse, index) in lapResult" :key="horse.id">
            <td>{{ index + 1 }}</td>
            <td>{{ horse.name }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    results: {
      type: Array,
      default: () => []
    }
  }
};
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

h3 {
  text-align: center;
  margin-top: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

th {
  background-color: #f2f2f2;
}


div {
  max-height: 600px;
  overflow-y: auto;
}
</style>