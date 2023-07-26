const fastify = require('fastify')()
const cors = require('fastify-cors')

const questions = [{
  caption: 'Подія натискання на елемент називається click?',
  correctAnswer: true
},

{
  caption: 'Усередині розмітки не можна додати обробник події?',
  correctAnswer: false
},

{
  caption: 'Припинити спливання події можна за допомогою метода stopImmediatePropagation?',
  correctAnswer: false
},

{
  caption: 'Припинити спливання події можна за допомогою метода stopPropagation?',
  correctAnswer: true
}]

server.register(cors)

server.get('/questions', (_request, reply) => {
  reply.send(questions)
})

server.post('/submit', (request, reply) => {
  const userAnswers = request.body.answers

  let correctAnswers = 0
  for (let i = 0; i < questions.length; i++) {
    if (userAnswers[i] === questions[i].correctAnswer) {
      correctAnswers++
    }
  }

  reply.send({ correctAnswers })
})

const start = async () => {
  try {
    await fastify.listen(3000)
    console.log('Server started on port 3000')
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

start()
