import { urlPeliculas } from '../helpers/urlPeliculas';

export const traerDatos = async (page) => {
    console.log(urlPeliculas + page)
const data = await fetch (urlPeliculas + page) //el fetch hace una peticion a un recurso que necesites
const resp = await data.json()

console.log(resp, 'traerDatos')
}