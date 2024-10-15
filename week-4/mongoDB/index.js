 // bolierplate code for making database and then inserting data

//defining user schema
const UserSchema = new mongoose.schema({
  title: "",
  description : ""
})

//creating user schema 
const user = mogoose.model('user', UserSchema);

//inserting data  in user 
user.create({...data});

//getting data  from database 
user.findById(Id)
user.findOne({ username: ""});
user.find({});

//updating 
user.UpdateOne({id},{ $push :  {purchasedCourses : courseId}});
user.

// deleting
user.deleteMany({});
user.deleteOne({username : ""}); 