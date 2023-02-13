import { shallowMount, mount } from "@vue/test-utils";
import PokemonPage from '@/pages/PokemonPage';
import { pokemons } from "../mocks/pokemons.mock";

describe('PokemonPage Component', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(PokemonPage);
    });

    test('debe de hacer match con el snapshop', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    test('debe de llmar el  mixPokemonArray al montar', () => {
        const mixPokemoArraySpy = jest.spyOn(PokemonPage.methods, 'mixPokemonArray')
        shallowMount(PokemonPage);

        expect(mixPokemoArraySpy).toHaveBeenCalled();
    })

    test('debe de hacer match con el snapshot cuando cargan los pokemon', () => {
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswe: false,
                    message: ''
                }
            }
        });

        expect(wrapper.html()).toMatchSnapshot();
    })

    test('debe de mostrar los componentes de PokemonPiture y PokemonOption', () => {

        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswe: false,
                    message: ''
                }
            }
        });

        const picture = wrapper.find('pokemon-picture-stub')
        const option = wrapper.find('pokemon-options-stub')

        expect(picture.exists).toBeTruthy();
        expect(option.exists).toBeTruthy();

        expect(picture.attributes('pokemonid')).toBe('1');
        expect(option.attributes('pokemons')).toBeTruthy()
    })

    test('Prueba de checkAnswer', async ()=> {
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswe: false,
                    message: ''
                }
            }
        });

        await wrapper.vm.checkAnswer( pokemons[0].id)

        expect(wrapper.find('h2').exists()).toBeTruthy();
        expect(wrapper.vm.showPokemon).toBe(true);

        await wrapper.vm.checkAnswer(1);
        expect(wrapper.vm.message).toBe(`Correcto, ${ pokemons[0].name}`)
    })
})