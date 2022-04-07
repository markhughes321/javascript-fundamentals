// Template Literals 
const name = 'Mark';
const age = 28;
const job = 'Test Automation Engineer'
const city = 'Miami'
let html;

// Without template strings (es5)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + ' </li><li> ' + job
+ ' </li><li>City: ' + city + ' </li></ul>';

document.body.innerHTML = html;

// With template strings (es6)
function hello() {
  return 'hello';
}
html2 = `
  <ul> 
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>Number: ${2 + 2}</li>
    <li>Function: ${hello()}</li>
    <li>Function: ${age > 30 ? 'Over 30' : 'Under 30'}</li>
  </ul>
`
document.body.innerHTML = html2;

