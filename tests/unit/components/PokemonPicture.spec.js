import { shallowMount } from "@vue/test-utils";

import PokemonPicture from "@/components/PokemonPicture";

describe('PokemonPicture Component', () => {


    test('debe de hacer match con el snapshot', () => {
        
        // Estandar = Wrapper
        // Simular eventos, clicks, etc
        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId: 1,
                showPokemon:false,
            }
        })

        expect(wrapper.html()).toMatchSnapshot()
    });

    test('debe de mostrar la imagen oculta y el pokemon 100', () => {
        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId: 100,
                showPokemon:false,
            }
        })

        const [img1, img2] = wrapper.findAll('img')

        expect( img1.exists() ).toBeTruthy()
        expect( img2 ).toBe(undefined)
        
        expect( img1.classes('hidden-pokemon') ).toBeTruthy()


        const url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg'

        expect(img1.attributes('src')).toBe(url);
    });

    test('debe de mostrar el pokemon si showPokemon:true', () => {
        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId: 100,
                showPokemon: true,
            }
        })

        const img = wrapper.find('img')

        // console.log(wrapper.html());

        expect( img.exists() ).toBeTruthy()
        
        expect( img.classes('hidden-pokemon') ).toBe(false)
        expect( img.classes('fade-in') ).toBe(true)
    });

})