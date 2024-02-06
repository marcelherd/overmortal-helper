<script setup lang="ts">
import { computed, ref, type Ref } from 'vue';

import type { ShoppingCart } from '@/modules/overmortal/events/types';
import {
  shop,
  simulateRequiredConstructions,
  type StarscraperSimulationResults,
} from '@/modules/overmortal/events/starscraper';
import { SimulationScenarios, type SimulationScenario } from '@/modules/overmortal/simulation';

const cart: Ref<ShoppingCart> = ref([
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
]);

const initialAstralPearls = ref(0);
const minimumFloorToSimulate = ref(0);
const iterations = ref(1);
const simulationScenario: Ref<SimulationScenario> = ref(SimulationScenarios.Average);

const checkoutPrice = computed(() => {
  let price = 0;
  for (let floorIndex = 0; floorIndex < cart.value.length; floorIndex++) {
    for (let offerIndex = 0; offerIndex < cart.value[floorIndex].length; offerIndex++) {
      price += cart.value[floorIndex][offerIndex] * shop[floorIndex].offers[offerIndex].price;
    }
  }
  return price;
});

const results: Ref<StarscraperSimulationResults | null> = ref(null);

const onClickRunSimulation = () => {
  results.value = simulateRequiredConstructions(cart.value, {
    initialAstralPearls: initialAstralPearls.value,
    minimumFloors: minimumFloorToSimulate.value,
    simulationScenario: simulationScenario.value,
  });
};
</script>

<template>
  <main>
    <h2>Starscraper</h2>
    <p>&raquo; Please choose which items you would like to exchange for:</p>
    <div class="shop">
      <div v-for="(floor, floorIndex) in shop" :key="floorIndex" class="floor">
        <div v-for="(offer, offerIndex) in floor.offers" :key="offerIndex" class="offer">
          <span style="text-align: right">[{{ offer.price }}]</span>
          <span style="text-align: center">{{ offer.quantity }}x {{ offer.item }}</span>
          <span style="text-align: left">(Max: {{ offer.limit }})</span>
          <input type="number" v-model="cart[floorIndex][offerIndex]" min="0" :max="offer.limit" />
        </div>
      </div>
    </div>
    <p><strong>Total:</strong> {{ checkoutPrice }} Astral Pearls</p>
    <div class="settings">
      <p>&raquo; Please provide additional details to run the simulation:</p>
      <div class="settings__inputs">
        <div>
          <label for="initialAstralPearls">Startiung Astral Pearls from event shop:</label>
          <input id="initialAstralPearls" type="number" v-model="initialAstralPearls" />
        </div>
        <div>
          <label for="minimumFloorToSimulate">Minimum floors to simulate:</label>
          <input id="minimumFloorToSimulate" type="text" v-model="minimumFloorToSimulate" />
        </div>
        <div>
          <label for="simulationScenario">Simulation scenario:</label>
          <select id="simulationScenario" type="text" v-model="simulationScenario">
            <option
              v-for="scenario in Object.values(SimulationScenarios)"
              :key="scenario"
              :value="scenario">
              {{ scenario }}
            </option>
          </select>
        </div>
        <div v-if="simulationScenario === SimulationScenarios.Average">
          <label for="iterations">No. of simulations to run (work in progress):</label>
          <input id="iterations" type="number" v-model="iterations" min="1" max="100000" disabled />
        </div>
      </div>
    </div>
    <button @click="onClickRunSimulation">Run simulation</button>
    <div v-if="results" class="results">
      <p>Required constructions: {{ results.constructions }}</p>
      <p>Living Earth acquired: {{ results.acquiredLivingEarth }}</p>
      <p>Guaranteed rewards from challenges: {{ results.guaranteedRewards }}</p>
      <p>
        Random rewards from {{ results.goldenRoomsConstructed }} golden rooms:
        {{ results.goldenRoomRewards }}
      </p>
    </div>
  </main>
</template>

<style scoped>
.shop {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.floor {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
}

.offer {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 50px 1fr 75px 40px;
}

.settings {
  margin: 32px 0;
}

.settings__inputs {
  display: flex;
  flex-direction: column;
}

.settings__inputs div {
  display: grid;
  grid-template-columns: 350px 100px;
  grid-gap: 10px;
}

.results {
  display: flex;
  flex-direction: column;
  margin-top: 32px;
}

.results p {
  margin: 0;
  padding: 0;
}
</style>
