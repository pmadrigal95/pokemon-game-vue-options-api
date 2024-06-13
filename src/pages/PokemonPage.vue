<template>

  <h1 v-if="!pokemon">Espere por favor ...</h1>

  <div v-else>
    <h1>¿Quién es este pokémon?</h1>

    <!--img-->
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />

    <!--Opciones-->
    <PokemonOptions :pokemons="pokemonArr" @selection="checkAnswer" />

    <section v-if="showAnswer" class="fade-in container">
      <h2>{{ message }}</h2>

      <button @click="newGame">
        Nuevo Juego
      </button>
    </section>
  </div>
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
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: ''
    }
  },

  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions()

      const rndInt = Math.floor(Math.random() * 4)

      this.pokemon = this.pokemonArr[rndInt]
    },

    checkAnswer(selectedId) {
      if (selectedId === this.pokemon.id) {
        this.message = `Correcto, ${this.pokemon.name}`
      } else {
        this.message = `Oops, era ${this.pokemon.name}`
      }

      this.showPokemon = true;
      this.showAnswer = true;
    },

    newGame() {

      this.showPokemon = false
      this.showAnswer = false
      this.pokemon = null
      this.pokemonArr = []

      this.mixPokemonArray()
    }
  },

  mounted() {
    this.mixPokemonArray()
  },
}
</script>

<style scoped>
.container {
  display: grid;
  justify-content: center;
  margin-left: 38px;
}
</style>