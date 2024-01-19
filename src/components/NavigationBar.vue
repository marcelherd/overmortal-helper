<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav>
    <header>
      <h1>
        <RouterLink to="/">Over<span>mortal</span> Helper</RouterLink>
      </h1>
    </header>
    <main>
      <h2>Weekly Events</h2>
      <ul>
        <li>
          <span class="pi pi-globe"></span>
          <RouterLink to="/events/adventure">Adventure</RouterLink>
        </li>
        <li>
          <span class="pi pi-twitter"></span>
          <RouterLink to="/events/beastwaves">Beastwaves</RouterLink>
        </li>
        <li>
          <span class="pi pi-star"></span>
          <RouterLink to="/events/starscraper">Starscraper</RouterLink>
        </li>
      </ul>
      <h2>Guides</h2>
      <ul>
        <li><RouterLink to="/">Technique Tier List</RouterLink></li>
      </ul>
    </main>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 100%;
  border-right: 1px solid var(--surface-border);
  padding: 2em 1em;
}

nav header {
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: start;
}

nav header h1 {
  margin: 0;
}

nav header h1 a {
  letter-spacing: -1px;
  text-decoration: none;
  color: inherit;
}

nav header h1 a:hover {
  color: var(--primary-500);
}

nav header h1 span {
  color: var(--primary-500);
}

main h2 {
  font-size: 1em;
  margin-bottom: 0.5em;
}

main ul {
  list-style: none;
  margin-bottom: 2em;
  padding: 0 1em;
}

main ul li {
  padding: 0.25em 0;
}

main ul li .pi + a {
  margin-left: 8px;
}
</style>
