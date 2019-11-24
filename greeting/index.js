const { graphql , buildSchema} = require('graphql');



// build the schema

const schema = buildSchema(`

  type Query {
      greeting(name: String):String
  }

`
)


const resolvers = () => {

 const greeting = args => {



    return `Hello ${args.name}`
 }


  return {greeting}

}

const treek = 'treek'

const excuteQuery =  async () => {


 const result = await graphql(schema,'{greeting (name:"treek")}',resolvers())

  console.log(result)
}


excuteQuery()
