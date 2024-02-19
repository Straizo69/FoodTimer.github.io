

document.addEventListener('DOMContentLoaded', function () {
    const foodCardsContainer = document.getElementById('food-cards');
    const jsonData = [
        {
            "id": 1,
            "name": "Салат Цезар",
            "image": "assets/ceasar_salad.jpg",
            "description": "Смачний салат з куркою, листям салату, грінками і соусом Цезар.",
            "category": "Обід",
            "buttonText": "Детальніше"
        },
        {
            "id": 2,
            "name": "Паста Болоньєзе",
            "image": "assets/pasta_bolognese.jpg",
            "description": "Ароматна паста з м'ясним соусом Болоньєзе.",
            "category": "Вечеря",
            "buttonText": "Детальніше"
        },
        {
            "id": 3,
            "name": "Омлет з овочами",
            "image": "assets/omlette.jpg",
            "description": "Ніжний омлет із свіжими овочами.",
            "category": "Сніданок",
            "buttonText": "Детальніше"
        },
        {
            "id": 4,
            "name": "Фруктовий салат",
            "image": "assets/fruit_salad.jpg",
            "description": "Свіжий фруктовий салат з ананасами, ягодами та гранатом.",
            "category": "Сніданок",
            "buttonText": "Детальніше"
        },
        {
            "id": 5,
            "name": "Тост з авокадо",
            "image": "assets/avocado_toast.jpg",
            "description": "Хрусткий тост із пюре авокадо та томатами.",
            "category": "Сніданок",
            "buttonText": "Детальніше"
        },
        {
            "id": 6,
            "name": "Куряча паста з руколою",
            "image": "assets/chicken_pasta.jpg",
            "description": "Паста з курячим м'ясом та свіжою руколою.",
            "category": "Обід",
            "buttonText": "Детальніше"
        },
        {
            "id": 7,
            "name": "Лосось з картоплею",
            "image": "assets/salmon_potatoes.jpg",
            "description": "Ніжний лосось із смаженою картоплею.",
            "category": "Обід",
            "buttonText": "Детальніше"
        },
        {
            "id": 8,
            "name": "Грецький салат",
            "image": "assets/greek_salad.jpg",
            "description": "Класичний грецький салат з оливками та фето.",
            "category": "Обід",
            "buttonText": "Детальніше"
        },
        {
            "id": 9,
            "name": "Піца з куркою",
            "image": "assets/chicken_pizza.jpg",
            "description": "Смачна піца з курячим м'ясом та соусом.",
            "category": "Обід",
            "buttonText": "Детальніше"
        },
        {
            "id": 10,
            "name": "Тунцевий стейк",
            "image": "assets/tuna_steak.jpg",
            "description": "Стейк із свіжого тунця з теріякі соусом.",
            "category": "Обід",
            "buttonText": "Детальніше"
        },
        {
            "id": 11,
            "name": "Курячі котлети",
            "image": "assets/chicken_cutlets.jpg",
            "description": "Соковиті курячі котлети зі смаженою картошкою.",
            "category": "Вечеря",
            "buttonText": "Детальніше"
        },
        {
            "id": 12,
            "name": "Ризотто з грибами",
            "image": "assets/mushroom_risotto.jpg",
            "description": "Ароматне ризотто із свіжими грибами.",
            "category": "Вечеря",
            "buttonText": "Детальніше"
        },
        {
            "id": 13,
            "name": "Авокадо та креветки",
            "image": "assets/shrimp_avocado_salad.jpg",
            "description": "Легкий салат з авокадо та креветками.",
            "category": "Вечеря",
            "buttonText": "Детальніше"
        },
        {
            "id": 14,
            "name": "Печений лосось з овочами",
            "image": "assets/baked_salmon.jpg",
            "description": "Печений лосось із свіжими овочами.",
            "category": "Вечеря",
            "buttonText": "Детальніше"
        },
        {
            "id": 15,
            "name": "Паста з креветками",
            "image": "assets/shrimp_pasta.jpg",
            "description": "Паста із соковитими креветками та томатним соусом.",
            "category": "Вечеря",
            "buttonText": "Детальніше"
        },
        {
            "id": 16,
            "name": "Омлет з шпинатом",
            "image": "assets/spinach_omlette.jpg",
            "description": "Омлет із свіжим шпинатом та сиром.",
            "category": "Сніданок",
            "buttonText": "Детальніше"
        },
        {
            "id": 17,
            "name": "Картошка по-селянськи",
            "image": "assets/potato_casserole.jpg",
            "description": "Картопля по-селянськи зі сметаною та сиром.",
            "category": "Обід",
            "buttonText": "Детальніше"
        },
        {
            "id": 18,
            "name": "Спагеті з котлетами",
            "image": "assets/meatball_spaghetti.jpg",
            "description": "Спагеті з м'ясними котлетами та томатним соусом.",
            "category": "Вечеря",
            "buttonText": "Детальніше"
        }
       
    ];

    renderFoodCards(jsonData);
});

function renderFoodCards(data) {
    const foodCardsContainer = document.getElementById('food-cards');

    data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('food-card');

        const image = document.createElement('img');
        image.src = item.image;
        image.alt = item.name;

        const name = document.createElement('h2');
        name.textContent = item.name;

        const description = document.createElement('p');
        description.textContent = item.description;

        const button = document.createElement('button');
        button.textContent = item.buttonText;

        button.addEventListener('click', function() {
            window.location.href = `food${item.id}.html`;
        });
        

        card.style.width = "200px";
        card.style.height = "230px";

        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(description);
        card.appendChild(button);

        foodCardsContainer.appendChild(card);
    });
}
function searchFood() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const foodCards = document.querySelectorAll('.food-card');

    foodCards.forEach(card => {
        const name = card.querySelector('h2').textContent.toLowerCase();

        if (name.includes(searchTerm)) {
            card.style.display = 'block'; 
        } else {
            card.style.display = 'none'; 
        }
    });
}
function filterByMealType() {
    const selectedMealType = document.getElementById('mealType').value.toLowerCase();
    const foodCards = document.querySelectorAll('.food-cards');

    foodCards.forEach(card => {
        const category = card.querySelector('p').textContent.toLowerCase();

        if (selectedMealType === 'all' || category.includes(selectedMealType)) {
            card.style.display = 'block'; 
        } else {
            card.style.display = 'none'; 
        }
    });
}


// script.js




