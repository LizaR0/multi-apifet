fetch('https://jsonplaceholder.typicode.com/users').then((data)=>{
    // console.log(data);
    return data.json();
}).then((completedata)=>{
    let data1='';
    completedata.map((values)=>{
        data1 += `<div class="card">
        <h2 class="userid">${values.id}</h2>
        <p class="id">${values.name}</p>
        <p class="title">${values.email}</p>
        <p class="complete">${values.phone}</p>
        <button type="button" onclick="viv()">post</button>
        </div>`
    });
    document.getElementById("cards").innerHTML=data1;
}).catch((err)=>{
    console.log(err);
}
)
fetch('https://jsonplaceholder.typicode.com/posts').then((data)=>{
// console.log(data);
return data.json();
}).then((completedata)=>{
    console.log(completedata);
}
)

function viv(){
//     let url= 'https://jsonplaceholder.typicode.com/users';
//     let url2= 'https://jsonplaceholder.typicode.com/posts';
    fetch('https://jsonplaceholder.typicode.com/posts').then((data)=>{
// console.log(data);
return data.json();

}).then((completedata)=>{
    // console.log(completedata);
    const userid = completedata.userId;
console.log(userid);
}
)
// const userid = completedata.userId;
// console.log(userid);
// fetch('https://jsonplaceholder.typicode.com/users').then((data)=>{
// // console.log(data);
// return data.json();
// }).then((completedata)=>{
//     console.log(completedata);
// }
// )
// for(index =1; index>1 ;index++){
//     if(completedata.id==completedata.userId){
// fetch('https://jsonplaceholder.typicode.com/posts').then((data)=>{
//     // console.log(data);
//     return data.json();
// }).then((completedata)=>{
//     let data2='';
//     completedata.map((values)=>{
//         data2 += `<div class="cardo">
//         // <h2 class="userid">${values.id}</h2>
//         // <p class="id">${values.userId}</p>
//         // <p class="title">${values.body}</p>
//         // <p class="complete">${values.title}</p>
//         // </div>`
//     });
//     document.getElementById("cardso").innerHTML=data2;
    
// }).catch((err)=>{
//     console.log(err);
// }

// )
//     }
// // }

}





