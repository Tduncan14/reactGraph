const {graphql,buildSchema} = require('graphql');


// create a mermory db


const db = {cars: [


  {
      id:'a',
      brand:'porsche',
      color:'black',
      doors:2,
      type:'Sedan'
  },
  
  {
    id:'b',
    brand:'lambo',
    color:'black',
    doors:2,
    type:'Coup'
},

{
    id:'c',
    brand:'ferrai',
    color:'yellow',
    doors:2,
    type:'Suv'
},

{
    id:'d',
    brand:'pontiac',
    color:'red',
    doors:4,
    type:'Suv'
},

{
    id:'e',
    brand:'wagon',
    color:'green',
    doors:4,
    type:'Coup'
},

{
    id:'f',
    brand:'caliver',
    color:'red',
    doors:4,
    type:'Coup'
}
  ]
}

// create the schema

const schema = buildSchema(`

   enum CarTypes {
    Sedan
    Suv
    Coup
   }

   type Car {
       id : ID!
       brand: String!
       color: String!
       doors: Int!
       type:CarTypes!
   }


   type Query {
       carsByTypes(type:CarTypes!) : [Car]
       carsById(id:ID!):Car


   }

`
)

const resolvers = () => {

 const  carsByTypes = args => {

    // console.log(   db.cars.filter(car => car.type === args.type))

    db.cars.filter(car => car.type === args.type)
 }


 const  carsById= args => {


    // console.log(db.cars.filter(car => car.id === args.id)[0])
  
    db.cars.filter(car => car.id === args.id)[0]
 }



 return {
     carsByTypes,
     carsById
 }




}


  const executeQuery = async () => {

   const queryByType = `
      {

        carsByTypes(type:Coup){

         brand
         color 
         type 
         id



         }

      }
   `

   const queryByID = `
     {
        carsById(id:"e") {

          brand
          type
          color
          id

         }
     }
   `

   
  const responseOne = await graphql(schema,queryByType,resolvers())

  console.log(queryByType)


  const responseTwo = await graphql(schema,queryByID,resolvers());

  console.log(queryByID)


  }


  executeQuery();






