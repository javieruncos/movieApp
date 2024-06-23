export const getMovie = async (categoria) => {
    try {
        const respuesta = await fetch(`http://www.omdbapi.com/?apikey=1d7763de&s=man&type=${categoria}`);
        const data = await respuesta.json();
        return data
    } catch (error) {
        console.log(error)
    }
}


export const  getModalId = async (id) => {
    try {
        const respuesta = await fetch(`http://www.omdbapi.com/?apikey=1d7763de&i=${id}`);
        const data = await respuesta.json();
        return data
    } catch (error) {
        console.log(error)
    }
}



export const getMovieCategoria = async (movie) => {
    try {
        const respuesta = await fetch(`http://www.omdbapi.com/?apikey=1d7763de&s=${movie}`);
        const data = await respuesta.json();
        return data
    } catch (error) {
        console.log(error)
    }
}