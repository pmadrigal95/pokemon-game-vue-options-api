import { shallowMount, mount } from '@vue/test-utils';

import PokemonPage from '@/pages/PokemonPage';

import { pokemons } from '../mocks/pokemons.mock';

describe('PokemonPage Component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(PokemonPage);
    });

    test('debe de hacer match con el snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    test('debe de llamar mixPokemonArray al montar', () => {
        const mixPokemonArraySpy = jest.spyOn(PokemonPage.methods, 'mixPokemonArray');

        shallowMount(PokemonPage);

        expect(mixPokemonArraySpy).toHaveBeenCalled();
    });

    test('debe de hacer match con el snapshot cuando cargan los pokemons', () => {
        const wrapper = mount(PokemonPage, {
            data() {
                return {
                    pokemons: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false
                }
            }
        });

        expect(wrapper.html()).toMatchSnapshot();
    });

    test('debe de mostrar los componentes de PokemonPicture y PokemonOptions', () => {
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemons: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false
                }
            }
        });

        const picture = wrapper.find('pokemon-picture-stub');
        const options = wrapper.find('pokemon-options-stub');

        expect(picture.exists()).toBeTruthy();
        expect(options.exists()).toBeTruthy();
        expect(picture.attributes('pokemonid')).toBe('1');
        expect(options.attributes('pokemons')).toBeTruthy();
    });

    test('Pruebas con checkAnswer', async () => {
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemons: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false
                }
            }
        });

        await wrapper.vm.checkAnswer(1);

        expect(wrapper.find('h2').exists()).toBeTruthy();
        expect(wrapper.vm.showPokemon).toBe(true);
        expect(wrapper.vm.showAnswer).toBe(true);

        await wrapper.vm.checkAnswer(9);

        expect(wrapper.find('h2').exists()).toBeTruthy();
        expect(wrapper.vm.showPokemon).toBe(false);
        expect(wrapper.vm.showAnswer).toBe(true);
    });

    test('Pruebas en checkAnswer, cuando el pokemon seleccionado es igual al pokemon correcto', async () => {
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemons: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false
                }
            }
        });
    });
});