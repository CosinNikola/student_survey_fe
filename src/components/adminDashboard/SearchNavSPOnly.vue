<template>
  <div class="search-nav">
    <ul class="search-nav__list">
      <li class="search-nav__item">
        <router-link class="search-nav__link" :to="routes[0]">
          Pretraga po studijskom programu
        </router-link>
      </li> <li class="search-nav__item">
      <router-link class="search-nav__link" :to="routes[1]">
        Pretraga po studijskom programu i godini studija
      </router-link>
    </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "SearchNavSPOnly",
  props: ["routes"]
};
</script>


<style scoped>
.search-nav__item {
  display: inline;
  font-weight: bold;
  border-right: 2px solid rgb(50,50,50);
  margin-right: 10px;
  padding-right: 10px;
}

.search-nav__link {
  text-decoration: none;
  color: rgb(50,50,50);
}

.search-nav__link:hover {
  text-decoration: underline;
}

.search-nav__list {
  padding-left: 0;
}
</style>