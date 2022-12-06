import {Banner} from 'features';
import {render,screen} from '@testing-library/react'

describe ("Testeando <Banner />", ()=>{
    test("debe mostrar el banner", ()=>{

        const mockedMovies = [{
            id: 123,
            backdropHigh: "https://image.tmdb.org/t/p/original/kpUre8wWSXn3D5RhrMttBZa6w1v.jpg",
            title: "Mocked Movie",
            description:"Esto es una pelicula mockeada"
        },
        {
            id: 456,
            backdropHigh: "https://www.bauldecursos.com/wp-content/uploads/2017/03/textos-libres.jpg",
            title: "Segunda Mocked Movie",
            description:"Segundo mock"
        }]
        render(<Banner movies={mockedMovies}/>)
        screen.debug()
        //expect(setInterval).toHaveBeenCalled();
        expect(screen.getByRole("img").toBeNotNull())
    })
})