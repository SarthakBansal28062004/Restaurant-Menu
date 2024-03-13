const menu = [
    {
        id: 1,
        title: "Red Sauce Pasta",
        category: "snacks",
        img: "./Images/Pasta.jpeg",
        desc: "A classic Italian dish featuring pasta coated in a tangy, tomato-based sauce, often complemented with herbs, vegetables, and meats 🍝",
    },
    {
        id: 2,
        title: "White Sauce Pasta",
        category: "snacks",
        img: "./Images/white-pasta.jpeg",
        desc: "An indulgent pasta dish with a creamy, buttery sauce made from milk and flour, typically mixed with cheese and garlic for added flavor 🍝",
    },
    {
        id: 3,
        title: "Vegetarian Chowmein",
        category: "snacks",
        img: "./Images/chowmein.jpeg",
        desc: "A popular noodle dish made with wheat noodles, vegetables, seasoned with soy sauce and other spices for a savory flavor 🍜",
    },
    {
        id: 36,
        title: "Cream of Mushroom Soup",
        category: "soups",
        img: "./Images/comsoup.jpeg",
        desc: "A creamy and velvety soup made with mushrooms, onions, garlic, and cream, blended to a smooth consistency, offering a rich and earthy flavor, often garnished with fresh herbs 🍲",
    },
    {
        id: 17,
        title: "Iced Tea",
        category: "drinks",
        img: "./Images/icedtea.jpeg",
        desc: "A chilled beverage made by steeping tea leaves in hot water, then chilling it and serving it over ice, often sweetened and flavored with lemon, offering a refreshing and revitalizing drink option 🧊",
    },
    {
        id: 26,
        title: "Idli Sambar",
        category: "breakfast",
        img: "./Images/idli.jpeg",
        desc: "A South Indian breakfast staple consisting of steamed rice cakes (idli) served with a spicy and tangy lentil-based vegetable stew (sambar), often accompanied by coconut chutney, offering a nutritious and satisfying meal 🥘",
    },
    {
        id: 42,
        title: "Chana Masala",
        category: "lunch",
        img: "./Images/chanamasala.jpeg",
        desc: "A popular North Indian dish made with chickpeas cooked in a spiced tomato-based gravy, flavored with ginger, garlic, onions, and a blend of aromatic spices, often served with rice or bread such as bhature or naan🥘",
    },
    {
        id: 4,
        title: "Butter Chicken",
        category: "dinner",
        img: "./Images/butterchicken.jpeg",
        desc: "A popular Indian dish featuring tender chicken cooked in a creamy, buttery tomato-based sauce, infused with aromatic spices, creating a savory and comforting culinary experience 🍗",
    },
    {
        id: 5,
        title: "Vegetarian Burger",
        category: "snacks",
        img: "./Images/burger.jpeg",
        desc: "A delicious vegetarian sandwich, typically consisting of a vegetable patty served in a bun with various toppings such as lettuce, tomato, onions, and sauces, offering a satisfying and flavorful meal option 🍔",
    },
    {
        id: 6,
        title: "Chocolate Cake",
        category: "desserts",
        img: "./Images/chococake.jpeg",
        desc: "A decadent dessert made with rich chocolate batter, often layered with creamy frosting or ganache, creating a moist and indulgent treat loved by many 🥮",
    },
    {
        id: 7,
        title: "Dal Makhani",
        category: "dinner",
        img: "./Images/dalmakhni.jpeg",
        desc: " A creamy and flavorful lentil dish, slow-cooked with spices, butter, and cream, resulting in a rich and comforting vegetarian curry, often served with rice or bread 🥘",
    },
    {
        id: 8,
        title: "Shahi Paneer",
        category: "dinner",
        img: "./Images/shahipaneer.jpeg",
        desc: "A royal vegetarian dish from India, made with paneer (Indian cottage cheese) cooked in a creamy, tomato-based sauce, enriched with aromatic spices, cream, and nuts 🥧",
    },
    {
        id: 9,
        title: "Mix Veg",
        category: "dinner",
        img: "./Images/mixveg.jpeg",
        desc: "A delightful vegetarian dish made with a variety of seasonal vegetables, cooked in a spiced gravy, offering a colorful and nutritious blend of flavors and textures, often enjoyed with rice or bread 🍛",
    },
    {
        id: 10,
        title: "Malai Chaap",
        category: "dinner",
        img: "./Images/malaichaap.jpeg",
        desc: "A vegetarian dish made with marinated pieces of chaap (textured vegetable protein) cooked in a creamy, flavorful sauce, infused with spices and cream, creating a luscious and satisfying meal option 🍱",
    },
    {
        id: 11,
        title: "Vegetarian Biriyani",
        category: "dinner",
        img: "./Images/biriyani.jpeg",
        desc: "A fragrant and flavorful rice dish made with long-grain basmati rice, mixed with assorted vegetables, aromatic spices, and herbs, creating a delicious and wholesome one-pot meal 🍚",
    },
    {
        id: 12,
        title: "Lemon Mojito",
        category: "drinks",
        img: "./Images/mojito.jpeg",
        desc: "A refreshing cocktail made with rum, lime juice, sugar, mint leaves, and soda water, creating a crisp and tangy drink with a hint of sweetness, perfect for hot summer days 🍹",
    },
    {
        id: 13,
        title: "Mimosa",
        category: "drinks",
        img: "./Images/mimosa.jpeg",
        desc: "A simple yet elegant cocktail made with champagne (or sparkling wine) and chilled citrus juice, typically orange juice, creating a light and bubbly drink, often enjoyed during brunch or special occasions 🍷",
    },
    {
        id: 14,
        title: "Tangy Jaljeera",
        category: "drinks",
        img: "./Images/jaljeera.jpeg",
        desc: "A refreshing Indian beverage made with cumin, mint, tamarind, and spices, mixed with cold water, offering a tangy, spicy, and slightly sweet flavor profile, popular as a summer cooler and digestive 🍸",
    },
    {
        id: 15,
        title: "Margarita",
        category: "drinks",
        img: "./Images/margarita.jpeg",
        desc: "A classic cocktail made with tequila, lime juice, and orange liqueur, served with a salted rim, offering a balance of tartness, sweetness, and a kick of tequila, popular for its bold and zesty flavor 🥂",
    },
    {
        id: 16,
        title: "Cosmopolitian",
        category: "drinks",
        img: "./Images/cosmopolitian.jpeg",
        desc: "A sophisticated cocktail made with vodka, triple sec, cranberry juice, and fresh lime juice, shaken with ice and strained into a martini glass, known for its vibrant pink color and fruity yet tart taste 🍾",
    },
    {
        id: 18,
        title: "Cheesy French Fries",
        category: "snacks",
        img: "./Images/cheesefrenchfries.jpeg",
        desc: "A delicious snack or side dish made by frying potato strips until crispy and then topping them with melted cheese, creating a savory and indulgent treat loved by cheese enthusiasts 🍟",
    },
    {
        id: 19,
        title: "Vegetarian Pizza",
        category: "snacks",
        img: "./Images/vegpizza.jpeg",
        desc: "A popular pizza variant topped with a variety of fresh vegetables such as bell peppers, onions, tomatoes, mushrooms, and olives, along with a generous amount of melted cheese 🍕",
    },
    {
        id: 20,
        title: "Ice Cream",
        category: "desserts",
        img: "./Images/icecream.jpeg",
        desc: "A frozen dessert made from dairy products, such as cream and milk, combined with sweeteners and flavors, churned to incorporate air and create a smooth and creamy texture 🍨",
    },
    {
        id: 21,
        title: "Ras Malai",
        category: "desserts",
        img: "./Images/rasmalai.jpeg",
        desc: "A traditional Indian dessert made with soft cheese dumplings (paneer) soaked in sweetened, thickened milk, flavored with cardamom, saffron, and nuts, offering a creamy and luxurious dessert experience 🍮",
    },
    {
        id: 22,
        title: "Shahi Tukra",
        category: "desserts",
        img: "./Images/shahitukra.jpeg",
        desc: "A royal Indian dessert made with deep-fried bread slices soaked in a sweet, saffron-infused milk syrup, garnished with nuts and dried fruits, offering a rich and indulgent treat with a hint of floral aroma 🍭",
    },
    {
        id: 23,
        title: "Gulab Jamun",
        category: "desserts",
        img: "./Images/gulabjamun.jpeg",
        desc: "A popular Indian dessert made from deep-fried dough balls soaked in a sweet syrup flavored with rose water, cardamom, and saffron offering a creamy and luxurious dessert experience🍩",
    },
    {
        id: 24,
        title: "Puff Pastry",
        category: "desserts",
        img: "./Images/puffpastry.jpeg",
        desc: "A light and flaky pastry made by repeatedly folding dough and butter to create multiple layers, resulting in a crispy and buttery texture, used in sweet dishes such as croissants, turnovers, and tarts 🍰",
    },
    {
        id: 25,
        title: "Parantha",
        category: "breakfast",
        img: "./Images/parantha.jpeg",
        desc: "A popular Indian flatbread made by rolling out dough into thin rounds, stuffing it with various fillings like spiced potatoes, paneer, or vegetables, often served with yogurt, pickles, or chutney 🫓",
    },
    {
        id: 27,
        title: "Classic English Breakfast",
        category: "breakfast",
        img: "./Images/engbreak.jpeg",
        desc: "A hearty and traditional British breakfast spread typically including fried or scrambled eggs, bacon, sausages, baked beans, grilled tomatoes, mushrooms, and toast, offering a filling and savory meal to start the day 🥩",
    },
    {
        id: 28,
        title: "French Scrambled Eggs",
        category: "breakfast",
        img: "./Images/frenchegg.jpeg",
        desc: " A creamy and luxurious version of scrambled eggs made by gently cooking eggs over low heat with butter, cream, or milk, resulting in soft, fluffy curds with a rich and velvety texture seasoned with salt, pepper, and herbs 🥚",
    },
    {
        id: 29,
        title: "Poha",
        category: "breakfast",
        img: "./Images/poha.jpeg",
        desc: "A popular Indian breakfast dish made with flattened rice flakes, tempered with mustard seeds, curry leaves, turmeric, onions, and peanuts, often enjoyed with a squeeze of lemon and garnished with fresh cilantro 🍛",
    },
    {
        id: 30,
        title: "Sunny Side Omelette",
        category: "breakfast",
        img: "./Images/egg.jpeg",
        desc: "A simple and classic omelette made by frying an egg on one side until the white is set but the yolk remains runny, creating a sunny-side-up appearance, often seasoned with salt, pepper, and herbs for added flavor 🍳",
    },
    {
        id: 31,
        title: "French Onion Soup",
        category: "soups",
        img: "./Images/fosoup.jpeg",
        desc: "A rich and flavorful soup made with caramelized onions, beef broth, and herbs, topped with a toasted baguette slice and melted cheese, offering a savory and indulgent flavor profile 🍲",
    },
    {
        id: 32,
        title: "Tomato Soup",
        category: "soups",
        img: "./Images/tomatosoup.jpeg",
        desc: "A comforting and flavorful soup made with ripe tomatoes, onions, garlic, and herbs, blended to a smooth consistency, offering a warm and tangy flavor, often served with a dollop of cream or croutons 🍲",
    },
    {
        id: 33,
        title: "Chicken Noodle Soup",
        category: "soups",
        img: "./Images/cnsoup.jpeg",
        desc: "A classic soup made with chicken broth, diced chicken, vegetables, and noodles, seasoned with herbs and spices, offering a comforting and nourishing meal, often enjoyed during cold weather 🍲",
    },
    {
        id: 34,
        title: "Lentil Soup",
        category: "soups",
        img: "./Images/lentil.jpeg",
        desc: "A nutritious and comforting soup made with lentils, vegetables, and spices, simmered until the lentils are tender and flavored with aromatics like garlic, onions, and cumin, offering a hearty and satisfying meal 🍲",
    },
    {
        id: 35,
        title: "Corn Chowder",
        category: "soups",
        img: "./Images/cornsoup.jpeg",
        desc: "A hearty soup made with sweetcorn, potatoes, onions, and sometimes bacon, cooked in a creamy broth seasoned with herbs and spices, offering a rich and comforting flavor with chunks of tender vegetables. 🍲",
    },
    {
        id: 37,
        title: "Rajma Chawal",
        category: "lunch",
        img: "./Images/rajmachawal.jpeg",
        desc: "A popular North Indian dish consisting of red kidney beans (rajma) cooked in a spiced tomato-based gravy, served with steamed rice (chawal), offering a hearty and comforting meal 🥘",
    },
    {
        id: 38,
        title: "Kadai Paneer",
        category: "lunch",
        img: "./Images/kadaipaneer.jpeg",
        desc: "A flavorful Indian dish made with paneer (Indian cottage cheese) cooked with bell peppers, onions, tomatoes, and a blend of spices, giving it a rich and aromatic flavor, often served with roti or rice 🥘",
    },
    {
        id: 39,
        title: "Palak Paneer",
        category: "lunch",
        img: "./Images/palakpaneer.jpeg",
        desc: "A nutritious and creamy Indian dish made with paneer (Indian cottage cheese) cooked in a spiced spinach (palak) gravy, offering a vibrant green color and a blend of savory flavors, often served with naan or rice. 🥘",
    },
    {
        id: 40,
        title: "Veg Pulao",
        category: "lunch",
        img: "./Images/vegpulao.jpeg",
        desc: "A fragrant and flavorful rice dish made with basmati rice, mixed vegetables, and aromatic spices, cooked together to create a delicious one-pot meal, often garnished with fried onions and nuts 🍚",
    },
    {
        id: 41,
        title: "Carrot Rice",
        category: "lunch",
        img: "./Images/carrotrice.jpeg",
        desc: "A simple and nutritious rice dish made with grated carrots, rice, and a blend of spices, offering a colorful and flavorful variation to plain rice, often served with raita or a side salad 🍚",
    }
];

const items = document.querySelector(".items");
const options = document.querySelector(".options");

window.addEventListener("DOMContentLoaded",function(){
    displayMenuItems(menu);
    displayMenuButtons();
});

function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){
        return `<div class="item">
        <h4>${item.title} 🍎</h4>
        <img class="image" src=${item.img}>
        <hr>
        <p>${item.desc}</p>
        <hr>
        <div class="buttons">
            <button class="recipe">Order Now</button>
            <button class="like recipe"><i class="fa fa-solid fa-heart style=color:#ff0000"></i></button>
        </div>
    </div>`;
    });
    displayMenu = displayMenu.join("");
    items.innerHTML = displayMenu;
};

function displayMenuButtons(){
    const categories = menu.reduce(function(values,item){
        if(!values.includes(item.category)){
            values.push(item.category);
        }
        return values;
    },["all"]);
    const categoryBtns = categories.map(function(category){
        return ` <button class="${category} filter" data-id=${category}>${category}</button>`
    }).join("");
    console.log(categoryBtns);
    options.innerHTML = categoryBtns;
    const filterBtns = document.querySelectorAll(".filter");
    filterBtns.forEach(function(btn){
        btn.addEventListener("click", function(e){
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function(menuItem){
                if(menuItem.category === category){
                    return menuItem;
                }
            });
            if(category === "all"){
                displayMenuItems(menu);
            }else{
                displayMenuItems(menuCategory);
            }
        });
    });
}