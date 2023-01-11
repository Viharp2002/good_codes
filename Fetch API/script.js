var btn = document.getElementById("myBtn");
var container = document.getElementById("container");
var li = `<tr><th>login</th><th>id</th></tr>`;

//using get Method
// function getData() {
//     url = "https://api.github.com/users"
//     fetch(url).then((response) => {
//         return response.json();
//     }).then((data) => {
//         data.forEach(element => {
//             li += `<tr>
//                <td>${element.login}</td>
//                <td>${element.id}</td>
//                </tr>`;
//         });
//         container.innerHTML = li;
//     });
// }

//using post Method
function getData() {
    url = "http://dummy.restapiexample.com/api/v1/update/";
    data = {
        "name": "Dzmitry",
        "salary": 1200,
        "age": 28
    }
    params = {
        method: 'post',
        headers: {
            'content-Type': 'application/json'
        },
        body: JSON.stringify(data) //if data is string then no need to convert it in string,if object or json is there ,then only use JSON.stringify(data)
    }
    fetch(url, params).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
    });
}
getData();
// getData();