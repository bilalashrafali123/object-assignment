const products = [
    {
        name: "Laptop",
        price: 999.99,
        discription: "Powerful laptop for all your computing needs."
    },
    {
        name: "Headphones",
        price: 79.99,
        discription: "High-quality headphones for immersive audio experience."
    },
    {
        name: "Smartphone",
        price: 699.99,
        discription: "Advanced smartphone with cutting-edge features."
    },
    {
        name: "Tablet",
        price: 449.99,
        discription: "Portable tablet for entertainment and productivity."
    },
    {
        name: "Smartwatch",
        price: 249.99,
        discription: "Stay connected and track your fitness with this smartwatch."
    },
    {
        name: "Gaming Console",
        price: 399.99,
        discription: "Experience the thrill of gaming with this powerful console."
    },
    {
        name: "Camera",
        price: 599.99,
        discription: "Capture life's moments with stunning clarity and detail."
    },
    {
        name: "Wireless Speaker",
        price: 129.99,
        discription: "Enjoy your favorite music wirelessly with this speaker."
    },
    {
        name: "External Hard Drive",
        price: 129.99,
        discription: "Expand your storage and backup your files with ease."
    },
    {
        name: "Wireless Mouse",
        price: 29.99,
        discription: "Navigate your computer with precision and comfort."
    },
    {
        name: "Printer",
        price: 199.99,
        discription: "Print documents and photos with exceptional quality."
    },
    {
        name: "Desk Lamp",
        price: 49.99,
        discription: "Illuminate your workspace with adjustable brightness."
    },
    {
        name: "Fitness Tracker",
        price: 79.99,
        discription: "Monitor your health and track your workouts."
    },
    {
        name: "Bluetooth Earbuds",
        price: 99.99,
        discription: "Wireless earbuds for on-the-go audio enjoyment."
    },
    {
        name: "Portable Charger",
        price: 39.99,
        discription: "Charge your devices anywhere, anytime."
    },
    {
        name: "USB Flash Drive",
        price: 19.99,
        discription: "Store and transfer your files conveniently."
    },
    {
        name: "Monitor",
        price: 299.99,
        discription: "Upgrade your display for enhanced productivity."
    },
    {
        name: "Keyboard",
        price: 49.99,
        discription: "Type comfortably with this reliable keyboard."
    },
    {
        name: "Computer Mousepad",
        price: 9.99,
        discription: "Enhance your mouse precision with this smooth pad."
    },
    {
        name: "Graphic Tablet",
        price: 199.99,
        discription: "Express your creativity with this digital drawing tablet."
    },
   
];

let screenRender = document.querySelector('#div')

for(i=0 ; i < products.length ; i++ ){

    console.log(products[i].name);
    screenRender.innerHTML += `
    <div class="main-card">
    <h1>Product: ${products[i].name}</h2>
    <h3>Price: ${products[i].price}$</h3>
    <h4">Discription: ${products[i].discription}</h4>
    </div>
    `

}