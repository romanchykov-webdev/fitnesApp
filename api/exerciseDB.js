import axios from 'axios';
import {rapidApiKey} from '../constants'

const baseUrl = 'https://exercisedb.p.rapidapi.com'


//fetch
const apiCall = async (url, params) => {
    try {

        const options = {
            method: 'GET',
            url,
            params,
            headers: {
                'X-Rapidapi-Key': rapidApiKey,
                'X-Rapidapi-Host': 'exercisedb.p.rapidapi.com'

            }
        };
        const response = await axios(options);
        return response.data;

    } catch (err) {
        console.log('error', err.message)
    }
}

//get body parts
export const fetchExercisesByBodyPart=async (bodyPart)=>{

    const data=await apiCall(baseUrl+`/exercises/bodyPart/${bodyPart}`);
    return data;

}