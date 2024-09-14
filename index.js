
let cards = [];
let container = document.querySelector(".sct3-container");


axios.get("https://fakestoreapi.com/products")
    .then((res) => {
        cards = res.data; 
        getData(cards);   
    });

   
function getData(item) {
    container.innerHTML = '';
    item.forEach((item) => {
        container.innerHTML += `
        <div class="box">
            <div class="sct3-img">
                <img  src="${item.image}" alt="">
            </div>

            <div class="container-text">
                <p class="description">${item.title}</p>
                <div class="container-stars">
                    <span>${item.rating.rate}</span>
                    <div class="icons-stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <span>(${item.rating.count})</span>
                </div>
                <div class="container-ratings">
                    <i class="fa-solid fa-arrow-trend-down"></i>
                    <span>Son 30 Günün En Düşük Fiyatı!</span>
                </div>

                <div class="container-prices">
                    <span class="deleted">439 TL</span>
                    <span class="new-price">${item.price} TL</span>
                </div>

            </div>
            <i class=" fav-icon fa-regular fa-heart"></i>
        </div>
        `;
    });
}




const searchInput = document.querySelector("#search-card");
searchInput.addEventListener("input", getValue);

function getValue() {
    const value = searchInput.value.toLowerCase();
    const filterData = cards.filter(item => item.title.toLowerCase().includes(value)); 

    if (filterData.length === 0) {
        container.innerHTML = ` <p style="font-size: 24px; font-weight: bold; color: black;"> No  Cards  Here</p>`;
    } else {
        getData(filterData); 
    }
}

getValue();  








