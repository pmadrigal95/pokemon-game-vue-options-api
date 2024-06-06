<template>
  <h1>¿Quién es este pokémon?</h1>

  <!--img-->
  <PokemonPicture :pokemonId="4" :showPokemon="false" />

  <!--Opciones-->
  <PokemonOptions :pokemons="pokemonArr" />
</template>

<script>
import getPokemonOptions from "@/helpers/getPokemonOptions";

import PokemonPicture from '@/components/PokemonPicture'

import PokemonOptions from '@/components/PokemonOptions'

export default {

  components: {
    PokemonPicture,
    PokemonOptions,
  },

  data() {
    return {
      pokemonArr: []
    }
  },

  methods: {
   async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions()
    }
  },

  mounted() {
    this.mixPokemonArray()
  },
}
</script>

<style></style>