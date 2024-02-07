<script setup lang="ts">
import { computed, ref, type Ref } from 'vue';

import type { ShoppingCart } from '@/modules/overmortal/events/types';
import { shop } from '@/modules/overmortal/events/beastwaves';

const cart: Ref<ShoppingCart> = ref([
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
]);

const checkoutPrice = computed(() => {
  let price = 0;
  for (let floorIndex = 0; floorIndex < cart.value.length; floorIndex++) {
    for (let offerIndex = 0; offerIndex < cart.value[floorIndex].length; offerIndex++) {
      price += cart.value[floorIndex][offerIndex] * shop[floorIndex].offers[offerIndex].price;
    }
  }
  return price;
});
</script>

<template>
  <main>
    <h2>Beastwaves</h2>
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
    <p><strong>Total:</strong> {{ checkoutPrice }} Monster Souls</p>
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
</style>
