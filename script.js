const card = document.querySelector("#cards");

async function getRandomList(){

    try {
        let response = await fetch(`https://blog-api-t6u0.onrender.com/posts`)

        let data = await response.json();

        console.log(data);

        card.innerHTML = data.map((el,index) => {
            return `<div class="card" style="width: 18rem;">
            <img src="https://loremflickr.com/640/480/${index}" class="card-img-top" alt="...">
            <div class="card">
                <h5 class="card-title">${el.title}</h5>
                <p class="card-text">${el.body}</p>
            </div>
        </div>`}).join("")
 
    } catch (error) {
        console.log(error);
    } finally {
        console.log("well done!");
    }

} 

getRandomList();