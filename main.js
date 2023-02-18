// Function 1: getMenu()
function getMenu() {
    fetch('https://free-food-menus-api-production.up.railway.app/burgers')
        .then(response => response.json())
        .then(data => {
            const menuList = document.getElementById('menu-list');
            const images = document.getElementById('image');

            data.forEach(item => {
                console.log(item)
                const div = document.createElement('img');;
                div.innerHTML = `${item.img}`
                const li = document.createElement('li');
                li.innerHTML = `<img src="${item.img}" alt="${item.name}" class="images"> ${item.name} - ${item.price} <p>${item.dsc}</p> <p>${item.country}</p>`;
                images.appendChild(div)
                menuList.appendChild(li);
            });
        })
        .catch(error => console.error(error));
}

getMenu();

// Function 2: takeOrder()
function takeOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const burgers = ["Cheeseburger", "Bacon Burger", "Veggie Burger"];
            const order = {};
            burgers.forEach((burger) => {
                const quantity = Math.floor(Math.random() * 3) + 1;
                order[burger] = quantity;
            });
            console.log("Order placed:", order);
            // alert("Order placed:", order);
            resolve(order);
        }, 2500);
    });
}

// Function 3: orderPrep()
function orderPrep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const orderStatus = { order_status: true, paid: false };
            console.log("Order status:", orderStatus);
            resolve(orderStatus);
        }, 1500);
    });
}

// Function 4: payOrder()
function payOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const orderStatus = { order_status: true, paid: true };
            console.log("Payment status:", orderStatus);
            resolve(orderStatus);
        }, 1000);
    }).then((orderStatus) => {
        if (orderStatus.paid) {
            thankyouFnc();
        }
    });
}

// Function 5: thankyouFnc()
function thankyouFnc() {
    alert("Thank you for your order!");
}
