// // function func1(function2)
// // {
// //     setTimeout(function2,2000,10,100);
// //     console.log("function1");
// // }

// // function func2(data,data2){
// //     console.log(`function2 : ${data} : ${data2}`);
// // }

// // func1(func2);

// function success() {
//   console.log("Successful");
// }

// function fail() {
//   console.log("Failed");
// }

// function err() {
//   console.log("Error Detected");
// }

// function exec(data, callback) {
//   if (data) {
//     console.log(`Balance : ${data}`);
//   }

//   callback();
// }

// function trigger(data) {
//   if (data > 0) {
//     exec(data, success);
//   } else if (data <= 0) {
//     exec(data, fail);
//   } else {
//     exec(0, err);
//   }
// }

// let data = require("Enter the data : ")

// trigger(data);



// async function api(apilink) 
// {
//     try {
//         const response = await fetch(apilink)

//         const data  = await response.json()

//         return data;
//     } catch (error) {
//         console.log(error)
//     }    
// }

// async function callback(){
//     const data = await api("https://66e526e25cc7f9b6273c6b87.mockapi.io/register")
//     console.log(data)
// }

// callback()




//Basic data fetching and displaying the fetched data...
// async function API(apiLink)
// {
//     try {
//         const response =  await fetch(apiLink);
//         const data = await response.json();

//         const list = document.getElementById('data-list');

//         const print_list = data.map(obj => {
//             return `
//             <h4>Name : ${obj.name}</h4>
//             <p>Email : ${obj.email}</p>
//             <p>Id : ${obj.id}</p>
//             <h5>Active : ${obj.isActive}</h5>
//             `;  
//         })  

//         list.innerHTML = print_list.join('')
        
//     } catch (error) {
//         console.log(error)
//     }
// }

// const data = API("https://66e526e25cc7f9b6273c6b87.mockapi.io/register");

// console.log(data);






//Filter method :-
async function demo()
{
    try {
        const res = await fetch("https://66e526e25cc7f9b6273c6b87.mockapi.io/register");

        const data = await res.json();

        return data;
    } catch (error) {
        console.log(error)
        
    }
}


async function func() {
    const data = await demo();

    const activeusers = data.filter(user => user.id) //if one of the key value is matched then it returns the all the object of that particular index.

    // console.log(activeusers)

    const structureddatamap = activeusers.map((datas) => {
        console.table(datas)
        console.log(datas   .name)
    }); //mapping the fetched data in key-value pair form.
}

func();