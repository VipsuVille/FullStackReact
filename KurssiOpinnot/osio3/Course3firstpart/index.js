const { response } = require('express')
const express = require('express')
const morgan = require('morgan')


morgan.token('bodyy', function(req) {
      return JSON.stringify(req.body)
  })
  const app = express()

  app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] -:response-time ms :bodyy'))

let persons = [
    {
        id: 1,
        name: "Arto Hellas",
        number: "040-123456"
    },
    {
        id: 2,
        name: "Ada Lovelace",
        number: "39-44-5323523"
    },
    {
        id: 3,
        name: "Dan Abramov",
        number: "12-43-234345"
    },
    {
        id: 4,
        name: "Mary Poppendick",
        number: "39-23-6423122"
    }
]

    app.get('/', (req, res) => {
        res.send('<h1>Hello World</h1>')
        console.log(req)
    })
    app.get('/api/persons', (req,res) => {
    res.json(persons)
})
app.get('/info', (req, res) => {
    res.send(`<ul><li>Phonebook has info for ${persons.length} people</li> </br> <li>${new Date}</li></ul>`)
})
    app.get('/api/persons/:id', (request, response) => {
        const id = Number(request.params.id)
        console.log(id)
        const note = persons.find(note => {
            console.log(note.id, typeof note.id, id, typeof id, note.id  === id) 
            return note.id === id
        })
        if (note) {
            response.json(note)
        } else {
            response.status(404).end()
        }
        })
  app.delete('/api/persons/:id', (request, response) => {
      const id = Number(request.params.id)
      persons = persons.filter(note => note.id !== id)
  
  response.status(204).end()
  })  
  const generateId = () => {
    const maxid = Math.floor(Math.random() * 1200);
    return maxid
  }
  const requestLogger = (request, responce, next) => {
      console.log('Method:' , request.method)
      console.log('Path:  ' , request.path)
      console.log('Body:  ' , request.body)
      console.log('---')
      next()
  }
 
  app.use(requestLogger)

  app.post('/api/persons', (request, response) => {
     const body = request.body
     if(!body.name) {
        return response.status(400).json ({
            error: 'name missing'
        })
    } else if (!body.number) {
        return response.status(400).json ({
            error: 'number missing'
        })
    } else if (persons.find(note => note.name === body.name)) {
        return response.status(400).json ( {
            error: 'name is already in phonebook'
        })
    }
    
      const note = {
          name: body.name,
          number: body.number,
          data: new Date(),
          id: generateId(),    
      }
      persons = persons.concat(note)
      response.json(note)

  })
  const unknownEndpoint = (request, response) => {
      response.status(404).send({
          error: 'unknown endpoint' 
      })
  }
app.use(unknownEndpoint)

const PORT = 3001
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`)
})