export const getMovie = async (categoria) => {
    try {
        const respuesta = await fetch(`http://www.omdbapi.com/?apikey=1d7763de&s=act&type=${categoria}`);
        const data = await respuesta.json();
        console.log(data.Search)
        return data
    } catch (error) {
        console.log(error)
    }
}