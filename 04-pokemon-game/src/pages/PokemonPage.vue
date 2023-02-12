 <template>
  <div v-if="pokemon">
    <h1>¿Quié n es este pokémon?</h1>
    <PokemonPicture :pokemon-id="pokemon.id" :show-pokemon="showPokemon"/>
    <PokemonOptions 
      :pokemons="pokemonArr"
      @selection="checkAnswer"/> 

      <div v-if="showAnswe">
        <h2 class="fade-in">{{ message }}</h2>
        <button @click="newGame">
          Nuevo juego 
        </button>
      </div>
  </div>
  <h1 v-else> Espere por favor...</h1>
</template>

<script>
  import PokemonOptions from '@/components/PokemonOptions';
  import PokemonPicture from '@/components/PokemonPicture';

  import getPokemonOptions from '@/helpers/getPokemonOptions'

  export default {
    components: {
      PokemonOptions,
      PokemonPicture,
    },
    data() {
      return {
        pokemonArr: [],
        pokemon: null,
        showPokemon: false,
        showAnswe: false,
        message: ''
      }
    },
    methods: {
      async mixPokemonArray() {
        this.pokemonArr = await getPokemonOptions();

        const rndInt =  Math.floor(Math.random() *4);
        this.pokemon =  this.pokemonArr[rndInt];
      },
      checkAnswer(selectedId) {
        this.showPokemon = true;
        this.showAnswe = true;
        if(this.pokemon.id == selectedId){
          this.message = `Correcto, ${this.pokemon.name}`;
        }else{
          this.message = `Oops, era ${this.pokemon.name}`
        }
      },
      newGame() {
        this.showPokemon = false;
        this.showAnswe = false;
        this.pokemonArr = [];
        this.mixPokemonArray();
      }
    },  
    mounted() {
      this.mixPokemonArray();
    }
  }
</script>