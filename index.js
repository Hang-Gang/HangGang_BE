const server = require('./server/server')

const PORT = 8000 

server.listen(PORT, () => {
    console.log("Server is listening on port ", PORT)
})