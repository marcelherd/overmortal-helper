<script setup lang="ts">
import { ref, computed } from 'vue';
import InputNumber from 'primevue/inputnumber';

import { challenge, shop } from '@/modules/overmortal/events/starscraper';
import {
  getCumulativeRewardsFromChallenge,
  calculateRequiredItems,
} from '@/modules/overmortal/events/calculator';
import type { ShoppingCart } from '@/modules/overmortal/events/types';
import { Events } from '@/modules/overmortal/events/events';

const constructions = ref(0);
const result = ref('');

const rewards = computed(() => getCumulativeRewardsFromChallenge(challenge, constructions.value));

console.log('rewards', rewards);

const cart: ShoppingCart = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

const go = () => {
  const requiredItems = calculateRequiredItems(cart, Events.Starscraper);
  result.value = `The magic box says: ${requiredItems}`;
};
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

    <h3>Shop Calculator</h3>

    <table>
      <tr v-for="(floor, floorIndex) in shop" :key="floorIndex">
        <td v-for="(offer, offerIndex) in floor.offers" :key="offer.item">
          {{ offer.quantity }}x {{ offer.item }}
          <InputNumber
            v-model="cart[floorIndex][offerIndex]"
            showButtons
            buttonLayout="vertical"
            style="width: 4em">
            <template #incrementbuttonicon>
              <span class="pi pi-plus" />
            </template>
            <template #decrementbuttonicon>
              <span class="pi pi-minus" />
            </template>
          </InputNumber>
        </td>
      </tr>
    </table>

    <button @click="go">go</button>

    {{ result }}
  </main>
</template>

<style scoped>
.input-group {
  display: flex;
  flex-direction: column;
}
</style>
