// ! =============> Global  ===============>
const username = localStorage.getItem("userName");
const user = document.getElementById("userName");
const baseUrl = "https://forkify-api.herokuapp.com/api/search";
const links = document.querySelectorAll(".menu a");
const loading = document.querySelector(".loading");
const search = document.getElementById("search");
const allRecipe = [
  "carrot",
  "broccoli",
  "asparagus",
  "cauliflower",
  "corn",
  "cucumber",
  "green pepper",
  "lettuce",
  "mushrooms",
  "onion",
  "potato",
  "pumpkin",
  "red pepper",
  "tomato",
  "beetroot",
  "brussel sprouts",
  "peas",
  "zucchini",
  "radish",
  "sweet potato",
  "artichoke",
  "leek",
  "cabbage",
  "celery",
  "chili",
  "garlic",
  "basil",
  "coriander",
  "parsley",
  "dill",
  "rosemary",
  "oregano",
  "cinnamon",
  "saffron",
  "green bean",
  "bean",
  "chickpea",
  "lentil",
  "apple",
  "apricot",
  "avocado",
  "banana",
  "blackberry",
  "blackcurrant",
  "blueberry",
  "boysenberry",
  "cherry",
  "coconut",
  "fig",
  "grape",
  "grapefruit",
  "kiwifruit",
  "lemon",
  "lime",
  "lychee",
  "mandarin",
  "mango",
  "melon",
  "nectarine",
  "orange",
  "papaya",
  "passion fruit",
  "peach",
  "pear",
  "pineapple",
  "plum",
  "pomegranate",
  "quince",
  "raspberry",
  "strawberry",
  "watermelon",
  "salad",
  "pizza",
  "pasta",
  "popcorn",
  "lobster",
  "steak",
  "bbq",
  "pudding",
  "hamburger",
  "pie",
  "cake",
  "sausage",
  "tacos",
  "kebab",
  "poutine",
  "seafood",
  "chips",
  "fries",
  "masala",
  "paella",
  "som tam",
  "chicken",
  "toast",
  "marzipan",
  "tofu",
  "ketchup",
  "hummus",
  "chili",
  "maple syrup",
  "parma ham",
  "fajitas",
  "champ",
  "lasagna",
  "poke",
  "chocolate",
  "croissant",
  "arepas",
  "bunny chow",
  "pierogi",
  "donuts",
  "rendang",
  "sushi",
  "ice cream",
  "duck",
  "curry",
  "beef",
  "goat",
  "lamb",
  "turkey",
  "pork",
  "fish",
  "crab",
  "bacon",
  "ham",
  "pepperoni",
  "salami",
  "ribs"
];
// console.log(username);
if (username) {
  user.innerHTML = username;
}

// ! =============> Events  ===============>
document.querySelector(".logout-btn").addEventListener("click", function() {
  layOut();
  location.href = "./index.html";
});
search.addEventListener("change", function(e) {
  // console.log(e.target.value);
  getRecipes(e.target.value);
});
// ! =============> add class active  ===============>
links.forEach(element => {
  element.addEventListener("click", function(e) {
    document.querySelector(".menu .active").classList.remove("active");
    element.classList.add("active");
    const category = element.dataset.category;
    console.log(category);
    getRecipes(category);
  });
  // console.log(element);
});
// ! =============> Functions ===============>
const getRecipes = async category => {
  loading.classList.remove("d-none");
  let recipe = await fetch(`${baseUrl}?q=${category}`);
  let data = await recipe.json();
  
  if (recipe.status !== 400) {
    displayRecipes(data.recipes);
  }
  loading.classList.add("d-none");

  console.log(data);
};
getRecipes("pizza");
const displayRecipes = data => {
  let result = "";
  for (let i = 0; i < data.length; i++) {
    // const element = array[index];
    // console.log(data[i].recipe_id);
    result += `
                    <div class="col-xl-4 col-lg-6 col-12 ">
                    <div>
                    <div class="card mb-4 shadow-sm ">
                        <img src="${data[i]
                          .image_url}" class="card-img-top w-100" alt="...">
                        <div class="card-body">
                            <h6 class="card-text ">${data[i].title}</h6>
                            <div class="d-flex justify-content-between align-items-center mt-4">
                                <div class="btn-group">
                                    <button onclick="showDetails(${data[i]
                                      .recipe_id})"  type="button" class="btn btn-sm btn-info">ViewRecipe</button>
                                </div>
                                <small class="">${data[i].publisher}</small>
                            </div>
                        </div>
                    </div>
                    </div>

            </div>
    `;
  }
  document.querySelector(".row").innerHTML = result;
};

const showDetails = id => {
  location.href = `./details.html?id=${id}`;
};

const layOut = () => {
  localStorage.removeItem("userName");
};

const displayAllRecipe = () => {
  let result = "";
  for (const recipe of allRecipe) {
    console.log(recipe);
    result += `
    <option value="${recipe}"/>
    `;
  }
  document.getElementById("category").innerHTML = result;
};
displayAllRecipe();
