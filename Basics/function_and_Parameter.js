const course={
    courseName: "JavaScript",
    coursePrice: 1000,
    courseDuration: "6 months",
    courseDescription: "This is a JavaScript course",
    courseAuthor: "Sanskar Sharma"
}

// course.courseName = "Python"
console.log(course.courseName)
//yeh dono same kaam krte hain
const {courseAuthor}=course //destructuring hm ese const{courseAuthor: coursetitle} = course krke bhi kr skte hain
//cosole.log(coursetitle) yeh krke bhi kr skte hain
console.log(courseAuthor)


const navbar = ({company}) => {

}
navbar(company="Google")

{
    //yeh jason object h
}

// {
//    " name": "Sanskar",
//    " age": 20  
// }

//isme bhi api mil skti h
// [
//     {},
//     {},
//     {}
// ]



