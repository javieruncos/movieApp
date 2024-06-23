const keyMovie = import.meta.env.VITE_APP_KEY;


export const getMovie = async (categoria) => {
    try {
        const respuesta = await fetch(`https://www.omdbapi.com/?apikey=${keyMovie}&s=man&type=${categoria}`);
        const data = await respuesta.json();
        return data
    } catch (error) {
        console.log(error)
    }
}


export const  getModalId = async (id) => {
    try {
        const respuesta = await fetch(`https://www.omdbapi.com/?apikey=${keyMovie}&i=${id}`);
        const data = await respuesta.json();
        return data
    } catch (error) {
        console.log(error)
    }
}



export const getMovieCategoria = async (movie) => {
    try {
        const respuesta = await fetch(`https://www.omdbapi.com/?apikey=${keyMovie}&s=${movie}`);
        const data = await respuesta.json();
        return data
    } catch (error) {
        console.log(error)
    }
}