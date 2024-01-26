<script setup lang="ts">
import { ref, computed } from 'vue';
import InputNumber from 'primevue/inputnumber';

import { challenge } from '@/modules/overmortal/events/starscraper';
import { getCumulativeRewardsFromChallenge } from '@/modules/overmortal/events/calculator';

const constructions = ref(0);

const rewards = computed(() => getCumulativeRewardsFromChallenge(challenge, constructions.value));

console.log('rewards', rewards);
</script>

<template>
  <main>
    <h2>Starscraper</h2>

    <div class="input-group">
      <label for="constructionsInput" class="font-bold block mb-2">Constructions</label>
      <InputNumber v-model="constructions" inputId="constructionsInput" />
    </div>

    <p>Rewards</p>

    <p v-for="[item, quantity] of Object.entries(rewards)" :key="item">
      {{ quantity }}x {{ item }}
    </p>
  </main>
</template>

<style scoped>
.input-group {
  display: flex;
  flex-direction: column;
}
</style>
