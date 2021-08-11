import axios from 'axios'
const baseUrl = 'http://localhost:3001/notes'

const getAll = () => {
    const request =  axios.get(baseUrl)
    const nonEx = {
        id: 10000,
        content: 'This note is no t saved',
        date: '213-23123-213213-4',
        important: true,
    }
    return request.then(response => response.data.concat(nonEx))
}
const create = newObject => {
    const request =  axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const update = (id, newObject) => {
    const request =  axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

export default { getAll, create, update }