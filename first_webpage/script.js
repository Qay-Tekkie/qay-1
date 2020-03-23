let name = 'Qay';
let courses = ['javascript', 'python'];
let allCourses = courses.length;

console.log(name);
if (allCourses % 2 === 0) {
    for (let i = 2; i <= 200; i += 2) {
        console.log(i);
    }

} else {
    for (let i = 1; i <= 200; i += 2) {
        console.log(i);
    }
}