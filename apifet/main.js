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
    let data2='';
    completedata.map((values)=>{
        data2 += `<div class="cardo">
        <h2 class="userid">${values.id}</h2>
        <p class="id">${values.userId}</p>
        <p class="title">${values.body}</p>
        <p class="complete">${values.title}</p>
        </div>`
    });
    document.getElementById("cardso").innerHTML=data2;
}).catch((err)=>{
    console.log(err);
}
)




