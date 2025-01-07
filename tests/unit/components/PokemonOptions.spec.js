import { shallowMount } from "@vue/test-utils";

import PokemonOptions from "@/components/PokemonOptions";

import { pokemons } from "../mocks/pokemons.mock";

describe('PokemonOptions Component', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(PokemonOptions, {
            props: {
                pokemons
            }
        })
    })


    test('debe de hacer match con el snapshot', () => {
        
        // Estandar = Wrapper
        // Simular eventos, clicks, etc
        // const wrapper = shallowMount(PokemonOptions, {
        //     props: {
        //         pokemons: []
        //     }
        // })

        console.log(wrapper.html());

        expect(wrapper.html()).toMatchSnapshot();

        // expect(wrapper.html()).toMatchInlineSnapshot();
    });

    test('debe de mostrar las 4 opciones correctamente', () => {

        const liTags = wrapper.findAll('li');

        expect(liTags.length).toBe(4);

        expect(liTags[0].text()).toBe(pokemons[0].name);
        expect(liTags[1].text()).toBe(pokemons[1].name);
        expect(liTags[2].text()).toBe(pokemons[2].name);
        expect(liTags[3].text()).toBe(pokemons[3].name);

    });

    test('debe de emitir "selection" con sus respectivos parametros al hacer click', () => {

        const [li1, li2, li3, li4] = wrapper.findAll('li');

        li1.trigger('click');
        li2.trigger('click');
        li3.trigger('click');
        li4.trigger('click');

        expect(wrapper.emitted('selection').length).toBe(4);
        expect(wrapper.emitted('selection')).toEqual([[1], [2], [3], [4]]);

    });

})