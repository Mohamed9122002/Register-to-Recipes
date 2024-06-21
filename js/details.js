//https://forkify-api.herokuapp.com/api/get?rId=47746
// ! =============> Global ===============>
const searchParams = location.search
// console.log(searchParams);
const params = new URLSearchParams(searchParams)
// console.log(params);
const id = params.get("id");
  // console.log(id);
// ! =============> Functions ===============>
(async () => {
    const api = await fetch(
      `https://forkify-api.herokuapp.com/api/get?rId=${id}`
    );
    const data = await api.json();
    console.log(data.recipe);
    displayData(data.recipe);
  }
)();


function displayData(data) {
  const detailsBox = `
    <div class="col-md-4">
   <figure>
       <img src="${data.image_url}" class="w-100" alt="details image" />
    </figure>
 </div>
 <div class="col-md-8">
    <div>
       <nav aria-label="breadcrumb">
          <ol class="breadcrumb" class="text-light">
             <li class="breadcrumb-item text-reset"><a class="btn btn-outline-info" href="./home.html">Home</a></li>
             <li class="breadcrumb-item text-info" aria-current="page">${data.title}</li>
          </ol>
       </nav>
    <div class="informationRecipes">
       <h1 class="title">${data.title}</h1>
       <div class ="publisher ms-5 text-white" ><span class="h5">Publisher:</span> ${data.publisher}</div>
     <div class ="ingredients">
        <p class="card-text lead ms-5 text-white"><span class="h5 me-2">Ingredients :</span> ${data.ingredients}</p>
     </div>
     <div class="nav-links d-flex mt-2">
        <li class=""><a class="btn btn-outline-info" target="_blank"  href="${data.source_url}">Description Recipe</a></li>
        <li class=""><a class="btn btn-outline-info" target="_blank" href="${data.publisher_url}">Publisher Recipe</a></li>
     </div>
    </div>
    </div>
 </div>

    `;
  document.getElementById("detailsData").innerHTML = detailsBox;
}


