<template>
  <header>Monster slayer</header>
  <play-card></play-card>
</template>

<script>
export default {
  random() {
    Math.floor(Math.random() * 10);
  },

  methods: {},
};
</script>

<style>
body {
  background-color: black;
  font-family: "Righteous", sans-serif;
}
.card {
  border: 1px solid black;
  background-color: rgb(59, 59, 59);
  color: white;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  width: 410px;
  border-radius: 10px;
}
@media (max-width: 500px) {
  .card {
    width: 200px;
    font-size: 0.6rem;
  }
}
.cards {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 100px;
  position: absolute;
  z-index: -1;
}

@media (max-width: 900px) {
  .cards {
    flex-direction: column;

    align-items: center;
  }
}

#app section {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 100px;
}
.winner {
  position: absolute;
  top: 25%;
  padding: 40px;
  background-color: black;
  columns: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  margin: 0;
  padding: 0;
}

img {
  width: 400px;
  height: 250px;
  border-radius: 10px;
  border: 5px solid black;
}

@media (max-width: 500px) {
  img {
    width: 190px;
    height: 140px;
  }
}

.health-bar {
  background-color: green;
  padding: 20px 0;
  width: 100%;
  margin-right: 400px;
}

@media (max-width: 500px) {
  .health-bar {
    margin-right: 170px;
    margin-left: -10px;
    padding: 10px;
  }
}
h4,
h2 {
  text-align: center;
  text-transform: uppercase;
}

.attack {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
}

button {
  background-color: rgb(123, 65, 62);
  padding: 10px;
  border-radius: 10px;
  border: none;
  font-size: 20px;
  margin: 10px;
  font-family: inherit;
  color: white;
  width: 150px;
}

@media (max-width: 500px) {
  button {
    font-size: 0.7rem;
    width: 65px;
    margin: 10px;
  }
}

p {
  margin-left: 13px;
}
@media (max-width: 500px) {
  p {
    margin-left: 5px;
  }
}
.winner p {
  text-align: center;
  color: white;
  font-size: 50px;
}
</style>
