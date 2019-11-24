const {graphql, buildSchema} = require('graphql');



const schema = buildSchema(`

 type Query {
     message: String
 }
`)

const resolvers =  () => {

  const message = () => {


  return 'hello treek'
 }

  return { message }


}

// excute the query

const executeQuery = async () => {

     const result = await graphql(schema,'{ message }', resolvers())

  
     console.log(result.data)


}

executeQuery()