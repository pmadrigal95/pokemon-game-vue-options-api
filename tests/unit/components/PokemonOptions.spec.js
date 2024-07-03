import { shallowMount } from "@vue/test-utils";

import PokemonOptions from "@/components/PokemonOptions";

describe('PokemonOptions Component', () => {


    test('debe de hacer match con el snapshot', () => {
        
        // Estandar = Wrapper
        // Simular eventos, clicks, etc
        const wrapper = shallowMount(PokemonOptions, {
            props: {
                pokemons: []
            }
        })

        expect(wrapper.html()).toMatchSnapshot()
    });

})