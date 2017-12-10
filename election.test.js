const {
  candidatesObjToArray,
  filterInvalidVoters,
  runElection,
  getWinner,
  winnerMessage,
} = require('./election')

test('Convert candidates object to Array', () =>
  expect(candidatesObjToArray(candidates)).toEqual(
    Object.keys(candidates).map(candidate => candidates[candidate])
  ))

test('Remove invalid voters', () =>
  expect(filterInvalidVoters(voters)).toEqual([
    { name: 'Norman Beracha', age: 35, votingCard: [3, 4] },
    { name: 'Wei Li', age: 19, votingCard: [1, 2] },
    { name: 'Sam MacKinnon', age: 59, votingCard: [1, 4] },
  ]))

test('running the election should add votes to the candidates', () => {
  const validVoters = [
    { name: 'Norman Beracha', age: 35, votingCard: [3, 4] },
    { name: 'Wei Li', age: 19, votingCard: [1, 2] },
    { name: 'Sam MacKinnon', age: 59, votingCard: [1, 4] },
  ]
  expect(runElection(validVoters, candidates)).toEqual({
    1: {
      name: 'Tamara Faiza',
      age: 46,
      votingCard: [1, 1],
      party: 'Pizza Party',
      numVotes: 2,
    },
    2: {
      name: 'Aylin Duke',
      age: 39,
      votingCard: [2, 2],
      party: 'Foam Party',
      numVotes: 0.5,
    },
    3: {
      name: 'Clay Roderick',
      age: 54,
      votingCard: [3, 4],
      party: 'Flat Earth Party',
      numVotes: 1,
    },
    4: {
      name: 'Nour al-Din',
      age: 32,
      votingCard: [4, 3],
      party: 'Pizza Party',
      numVotes: 1,
    },
  })
})

test('getWinner should return the winning candidate', () => {
  const candidatesAfterElection = {
    1: {
      name: 'Tamara Faiza',
      age: 46,
      votingCard: [1, 1],
      party: 'Pizza Party',
      numVotes: 20,
    },
    2: {
      name: 'Aylin Duke',
      age: 39,
      votingCard: [2, 2],
      party: 'Foam Party',
      numVotes: 15,
    },
    3: {
      name: 'Clay Roderick',
      age: 54,
      votingCard: [3, 4],
      party: 'Flat Earth Party',
      numVotes: 15,
    },
    4: {
      name: 'Nour al-Din',
      age: 32,
      votingCard: [4, 3],
      party: 'Pizza Party',
      numVotes: 19,
    },
  }
  expect(getWinner(candidatesAfterElection)).toEqual({
    name: 'Tamara Faiza',
    age: 46,
    votingCard: [1, 1],
    party: 'Pizza Party',
    numVotes: 20,
  })
})

test('winnerMessage should return a message with the name of the winner and number of votes received', () => {
  const winner = {
    name: 'Tamara Faiza',
    age: 46,
    votingCard: [1, 1],
    party: 'Pizza Party',
    numVotes: 20,
  }
  expect(winnerMessage(winner)).toEqual(
    'Tamara Faiza has won the election with 20 votes!'
  )
})

const voters = [
  { name: 'Jane Finnegan', age: 19, votingCard: [1, 1] },
  { name: 'Salome Kadek', age: 22, votingCard: [2, 1, 3] },
  { name: 'Norman Beracha', age: 35, votingCard: [3, 4] },
  { name: 'Wei Li', age: 19, votingCard: [1, 2] },
  { name: 'Sam MacKinnon', age: 59, votingCard: [1, 4] },
]
const candidates = {
  1: {
    name: 'Tamara Faiza',
    age: 46,
    votingCard: [1, 1],
    party: 'Pizza Party',
    numVotes: 0,
  },
  2: {
    name: 'Aylin Duke',
    age: 39,
    votingCard: [2, 2],
    party: 'Foam Party',
    numVotes: 0,
  },
  3: {
    name: 'Clay Roderick',
    age: 54,
    votingCard: [3, 4],
    party: 'Flat Earth Party',
    numVotes: 0,
  },
  4: {
    name: 'Nour al-Din',
    age: 32,
    votingCard: [4, 3],
    party: 'Pizza Party',
    numVotes: 0,
  },
}