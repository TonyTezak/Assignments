const xhr = new XMLHttpRequest()

xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

xhr.onreadystatechange = function (){
if(xhr.readyState === 4 && xhr.status === 200){
    const JSONdata = xhr.responseText
    const data = JSON.parse(JSONdata)
    showData(data.objects[0].pokemon)
}
}

function showData (arr) {
    for (let i = 0; i < arr.length; i++){
    const h1 = document.createElement('h1')
    h1.textContent = arr[i].name
    document.body.appendChild(h1)
    }
}


// {
//     "meta": {
//       "limit": 1,
//       "next": null,
//       "offset": 0,
//       "previous": null,
//       "total_count": 1
//     },
//     "objects": [
//       {
//         "created": "2013-11-09T15:14:48.957604",
//         "modified": "2013-11-09T15:14:48.957565",
//         "name": "national",
//         "pokemon": [
//           {
//             "name": "rattata",
//             "resource_uri": "api/v1/pokemon/19/"
//           },