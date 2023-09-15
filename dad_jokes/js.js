const joke=document.getElementById('joke')
const jokeBtn=document.getElementById('jokeBtn')

jokeBtn.addEventListener('click',generateJoke)

generateJoke()


//method 1
 async function generateJoke(){

    const config={
        headers:{
            'Accept':'application/json'
        }
    }
     const res= await fetch('https://icanhazdadjoke.com/',config)
     const data=await res.json()
    joke.innerHTML=data.joke
    }


    //method 2
// function generateJoke(){

//     const config={
//         headers:{
//             'Accept':'application/json'
//         }
//     }
//     fetch('https://icanhazdadjoke.com/',config).then(res=>res.json()).then((data)=>{
//         joke.innerHTML=data.joke
//     })
// }