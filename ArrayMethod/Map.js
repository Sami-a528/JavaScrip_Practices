let student = [{
    name: "sami",
    marks: 97
}, 
{
    name: "sai",
    marks: 96
}, 
{
    name: "sam",
    marks: 95
},];

let gpa = student.map((el)=>{
    return el.marks/10;
});
console.log(gpa);