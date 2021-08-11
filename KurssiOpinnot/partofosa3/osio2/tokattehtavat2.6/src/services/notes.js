import axios from 'axios'
const bareUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(bareUrl)
    return request.then(response => response.data)
}

const create = newObject => {
    const request = axios.post(bareUrl, newObject)
    return request.then(response => response.data)
}

const update = (id, newObject) => {
    const request = axios.put(`${bareUrl}/${id}`, newObject)
    return request.then(response => response.data)
}
const letsRemove = (id) => {
    console.log(id)
    return axios.delete(`${bareUrl}/${id}`)
}


export default {
    getAll: getAll,
    create: create,
    update: update,
    letsRemove: letsRemove
}
