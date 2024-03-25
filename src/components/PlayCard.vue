<template>
  <section>
    <div class="cards">
      <form class="winner" v-if="monsterHealth <= 0 || playerHealth <= 0">
        <p>GAME OVER!</p>
        <button type="submit">New Game</button>
      </form>
      <div class="card monster-card">
        <h2>Monster</h2>
        <img
          src="https://st4.depositphotos.com/1026550/31416/i/450/depositphotos_314169934-stock-photo-grim-reaper-reaching-towards-the.jpg"
        />
        <div>
          <h4>Health</h4>
          <div
            class="health-bar monster-health"
            :style="monsterHealthBarStyle"
          ></div>
        </div>
        <div class="attack">
          <p>
            Long ago a kind-hearted soul, betrayed and murdered by those he
            trusted, now haunts the estate's crumbling halls. His spectral form,
            twisted by bitterness and sorrow, wanders aimlessly, seeking solace
            and revenge in the whispers of the night.
          </p>
        </div>
      </div>
      <div class="card player-card">
        <h2>Player</h2>
        <img
          src="https://alongextendedparty1.files.wordpress.com/2021/12/20210119-article-preview-the-last-alliance.png"
        />
        <div>
          <h4>Health</h4>
          <div
            class="health-bar player-health"
            :style="playerHealthBarStyle"
          ></div>
        </div>
        <div class="attack">
          <button @click="playerAttack">Attack</button>
          <button @click="heal">Heal</button>
          <button @click="specialAttack" :disabled="rounds % 3 !== 0">
            Special Attack
          </button>
          <button @click="surrender">Surrender</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      isWinner: false,
      divIsVisible: false,
      rounds: 0,
    };
  },
  computed: {
    monsterHealthBarStyle() {
      if (this.monsterHealth <= 0) {
        return { width: "0%" };
      } else {
        return { width: this.monsterHealth + "%" };
      }
    },

    playerHealthBarStyle() {
      if (this.playerHealth > 100) {
        return { width: "100%" };
      } else if (this.playerHealth <= 0) {
        return { width: "0%" };
      } else {
        return { width: this.playerHealth + "%" };
      }
    },
  },
  methods: {
    playerAttack() {
      this.round++;
      this.monsterHealth -= Math.floor(Math.random() * 10);
      this.monsterAttack();
    },

    heal() {
      this.round++;
      this.playerHealth += Math.floor(Math.random() * 10);
    },

    specialAttack() {
      this.round++;
      this.monsterHealth -= Math.floor(Math.random() * 20);
      this.monsterAttack();
    },

    surrender() {
      this.playerHealth = 0;
    },

    monsterAttack() {
      this.playerHealth -= Math.floor(Math.random() * 10);
    },
  },

  winner() {
    if (this.monsterHealth <= 0 || this.playerHealth <= 0) {
      this.isWinner = true;
      this.divIsVisible = !this.divIsVisible;
    }
  },
};
</script>
