import { VueWrapper, shallowMount } from '@vue/test-utils';
import PokemonOptions from '@/components/PokemonOptions';
import {pokemons} from '../mocks/pokemons.mock';

describe('PokemonOptions component', () => {

    let wrapper;

    beforeEach(()=> {
        wrapper = shallowMount(PokemonOptions, {
            props: {
                pokemons: pokemons
            }
        })
    })

    test('debe de hacer match con el snapshot',() => {
        expect(wrapper.html()).toMatchSnapshot(); 
    })

    test('debe de mostrar las 4 opciones correctamente', () => {
        const liTags = wrapper.findAll('li');
        expect(liTags.length).toBe(4);

        expect(liTags[0].text()).toBe('bulbasaur')
        expect(liTags[1].text()).toBe('ivysaur')
        expect(liTags[2].text()).toBe('venusaur')
        expect(liTags[3].text()).toBe('charmander')
    })

    test('debe de emitir "selection" con sus respectivos parametros al hacer click', () => {
        const [l1,l2,l3,l4] = wrapper.findAll('li');

        l1.trigger('click');
        l2.trigger('click');
        l3.trigger('click');
        l4.trigger('click');

        expect(wrapper.emitted('selection').length).toBe(4);
        expect(wrapper.emitted('selection')[0]).toEqual([1]);
        expect(wrapper.emitted('selection')[1]).toEqual([2]);
        expect(wrapper.emitted('selection')[2]).toEqual([3]);
        expect(wrapper.emitted('selection')[3]).toEqual([4]);

    })

});