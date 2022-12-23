import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'c7a5259488msh24a93026eadd98dp134ae5jsne397e5bec014',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })

    return data;
}