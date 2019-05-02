const db = require('./db')
const Query = {
   greeting:() => {
      return "welcome to the graphql session !!!"
   },
   students:() => db.students.list(),

   studentById:(root,args,context,info) => {
    //args will contain parameter passed in query
    return db.students.get(args.id);
 }
}


module.exports = {Query}


 
