const student = {
    name: "Sami",
    eng: 98,
    hindi: 96,
    math: 99,
    GetAvg(){
        let Avg = (this.eng + this.hindi + this.math) / 3;
        console.log(`${this.name} got avg marks = ${Avg}`);
    }
};
console.log(student.GetAvg());

function Getsvg(){
    console.log(this);
}
Getsvg();