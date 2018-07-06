<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex v-for="i in 1" :key="`1${i}`">
        <Loader01></Loader01>
      </v-flex>
      <v-flex v-for="i in 1" :key="`1${i}`">
        <Loader02></Loader02>
      </v-flex>
      <v-flex v-for="i in 1" :key="`1${i}`">
        <Loader03></Loader03>
      </v-flex>
      <v-flex v-for="i in 1" :key="`1${i}`">
        <Loader04></Loader04>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style>
  .container.grid-list-md {
    padding: 5em;
  }
</style>

<script>
import Loader01 from '@/components/Loaders/Loader01'
import Loader02 from '@/components/Loaders/Loader02'
import Loader03 from '@/components/Loaders/Loader03'
import Loader04 from '@/components/Loaders/Loader04'

export default {
  name: 'LoaderDisplay',
  data() {
    return {

    }
  },
  components: {
    Loader01,
    Loader02,
    Loader03,
    Loader04,
  }
}
</script>
