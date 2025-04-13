const products = {
    fruits: [
      {
        name: "Mango",
        image: "images/mango.jpg", // Replace with the actual image URL
        description: "Fresh and ripe Mangoes.",
        price: "₱50.00"
      },
      {
        name: "Banana",
        image: "images/banana.jpg", // Replace with the actual image URL
        description: "Sweet and healthy Bananas.",
        price: "₱30.00"
      },
      {
        name: "Papaya",
        image: "images/papaya.jpg", // Replace with the actual image URL
        description: "Fresh, ripe Papayas.",
        price: "₱40.00"
      },
      {
        name: "Lanzones",
        image: "images/lanzones.jpg", // Replace with the actual image URL
        description: "Sweet and delicious Lanzones.",
        price: "₱60.00"
      },
      {
        name: "Rambutan",
        image: "images/rambutan.jpg", // Replace with the actual image URL
        description: "Fresh Rambutans with a sweet taste.",
        price: "₱70.00"
      },
      {
        name: "Calamansi",
        image: "images/calamansi.jpg", // Replace with the actual image URL
        description: "Tangy and fresh Calamansi.",
        price: "₱20.00"
      },
      {
        name: "Dalandan",
        image: "images/dalandan.jpg", // Replace with the actual image URL
        description: "Fresh and juicy Dalandan oranges.",
        price: "₱35.00"
      },
      {
        name: "Guyabano",
        image: "images/guyabano.jpg", // Replace with the actual image URL
        description: "Sweet and sour Guyabano.",
        price: "₱80.00"
      },
      {
        name: "Jackfruit",
        image: "images/jackfruit.jpg", // Replace with the actual image URL
        description: "Sweet and fibrous Jackfruit.",
        price: "₱90.00"
      },
      {
        name: "Santol",
        image: "images/santol.jpg", // Replace with the actual image URL
        description: "Sour Santol fruit with a unique taste.",
        price: "₱50.00"
      }
    ],
    vegetables: [
      {
        name: "Eggplant",
        image: "images/eggplant.jpg",
        description: "Fresh and tender Eggplants.",
        price: "₱25.00"
      },
      {
        name: "Bitter Gourd",
        image: "images/bittergourd.jpg",
        description: "Bitter Gourd for your healthy meals.",
        price: "₱20.00"
      },
      {
        name: "Water Spinach",
        image: "images/waterspinach.jpg",
        description: "Fresh and nutritious Water Spinach.",
        price: "₱30.00"
      },
      {
        name: "String Beans",
        image: "images/stringbeans.jpg",
        description: "Crisp and fresh String Beans.",
        price: "₱28.00"
      },
      {
        name: "Bottle Gourd",
        image: "images/bottlegourd.jpg",
        description: "Fresh Bottle Gourd for your cooking.",
        price: "₱35.00"
      },
      {
        name: "Squash",
        image: "images/squash.jpg",
        description: "Sweet and fresh Squash.",
        price: "₱40.00"
      },
      {
        name: "Malunggay Leaves",
        image: "images/malunggay.jpg",
        description: "Nutritious and fresh Malunggay Leaves.",
        price: "₱25.00"
      },
      {
        name: "Okra",
        image: "images/okra.jpg",
        description: "Fresh and healthy Okra.",
        price: "₱30.00"
      },
      {
        name: "Winged Bean",
        image: "images/wingedbean.jpg",
        description: "Fresh Winged Beans for cooking.",
        price: "₱35.00"
      },
      {
        name: "Chinese Cabbage",
        image: "images/chinesecabbage.jpg",
        description: "Fresh Chinese Cabbage.",
        price: "₱20.00"
      }
    ],
    dairy: [
      {
        name: "Carabao’s Milk",
        image: "images/carabaosmilk.jpg",
        description: "Fresh and creamy Carabao's Milk.",
        price: "₱90.00"
      },
      {
        name: "Kesong Puti",
        image: "images/kesongputi.jpg",
        description: "Fresh local Kesong Puti cheese.",
        price: "₱75.00"
      },
      {
        name: "Pastillas de Leche",
        image: "images/pastillas.jpg",
        description: "Sweet and creamy Pastillas de Leche.",
        price: "₱50.00"
      },
      {
        name: "Evaporated Milk",
        image: "images/evaporatedmilk.jpg",
        description: "Smooth and creamy Evaporated Milk.",
        price: "₱45.00"
      },
      {
        name: "Condensed Milk",
        image: "images/condensedmilk.jpg",
        description: "Sweet Condensed Milk.",
        price: "₱50.00"
      },
      {
        name: "Fresh Cow’s Milk",
        image: "images/freshcowsmilk.jpg",
        description: "Fresh and nutritious Cow's Milk.",
        price: "₱80.00"
      },
      {
        name: "Local Butter",
        image: "images/localbutter.jpg",
        description: "Fresh, creamy local butter.",
        price: "₱60.00"
      },
      {
        name: "Yogurt Drink",
        image: "images/yogurtdrink.jpg",
        description: "Refreshing Yogurt Drink.",
        price: "₱40.00"
      },
      {
        name: "Cream Cheese",
        image: "images/creamcheese.jpg",
        description: "Smooth and creamy Cream Cheese.",
        price: "₱55.00"
      },
      {
        name: "Cheese Spread",
        image: "images/cheesesprea.jpg",
        description: "Delicious Cheese Spread.",
        price: "₱50.00"
      }
    ],
    meat: [
      {
        name: "Chicken",
        image: "images/chicken.jpg",
        description: "Fresh and tender Chicken.",
        price: "₱180.00"
      },
      {
        name: "Pork",
        image: "images/pork.jpg",
        description: "Fresh Pork cuts.",
        price: "₱220.00"
      },
      {
        name: "Beef",
        image: "images/beef.jpg",
        description: "Tender and fresh Beef.",
        price: "₱250.00"
      },
      {
        name: "Longganisa",
        image: "images/longganisa.jpg",
        description: "Delicious Filipino Longganisa.",
        price: "₱150.00"
      },
      {
        name: "Tocino",
        image: "images/tocino.jpg",
        description: "Sweet and savory Tocino.",
        price: "₱180.00"
      },
      {
        name: "Tapa",
        image: "images/tapa.jpg",
        description: "Filipino-style Tapa.",
        price: "₱200.00"
      },
      {
        name: "Lechon",
        image: "images/lechon.jpg",
        description: "Crispy and tender Lechon.",
        price: "₱350.00"
      },
      {
        name: "Dinuguan",
        image: "images/dinuguan.jpg",
        description: "Delicious Filipino Dinuguan.",
        price: "₱250.00"
      },
      {
        name: "Tinola Chicken Cuts",
        image: "images/tinolachickencuts.jpg",
        description: "Tender Chicken cuts for Tinola.",
        price: "₱220.00"
      },
      {
        name: "Adobo Marinated Pork",
        image: "images/adobomarinatedpork.jpg",
        description: "Pork Adobo marinated for your taste.",
        price: "₱230.00"
      }
    ],
    organic: [
      {
        name: "Organic Red Rice",
        image: "images/organicredrice.jpg",
        description: "Healthy Organic Red Rice.",
        price: "₱90.00"
      },
      {
        name: "Organic Bananas",
        image: "images/organicbananas.jpg",
        description: "Fresh Organic Bananas.",
        price: "₱35.00"
      },
      {
        name: "Organic Eggs",
        image: "images/organiceggs.jpg",
        description: "Fresh Organic Eggs.",
        price: "₱55.00"
      },
      {
        name: "Organic Kale",
        image: "images/organickale.jpg",
        description: "Fresh and nutritious Organic Kale.",
        price: "₱70.00"
      },
      {
        name: "Organic Lettuce",
        image: "images/organiclettuce.jpg",
        description: "Crisp Organic Lettuce.",
        price: "₱40.00"
      },
      {
        name: "Organic Lemongrass",
        image: "images/organiclemongrass.jpg",
        description: "Fresh Organic Lemongrass.",
        price: "₱30.00"
      },
      {
        name: "Organic Tomatoes",
        image: "images/organictomatoes.jpg",
        description: "Fresh Organic Tomatoes.",
        price: "₱50.00"
      },
      {
        name: "Organic Cucumbers",
        image: "images/organiccucumbers.jpg",
        description: "Fresh Organic Cucumbers.",
        price: "₱45.00"
      },
      {
        name: "Organic Garlic",
        image: "images/organicgarlic.jpg",
        description: "Fresh Organic Garlic.",
        price: "₱60.00"
      },
      {
        name: "Organic Carrots",
        image: "images/organiccarrots.jpg",
        description: "Fresh Organic Carrots.",
        price: "₱55.00"
      }
    ],
    bakery: [
      {
        name: "Ensaymada",
        image: "images/ensaymada.jpg",
        description: "Soft and buttery Ensaymada.",
        price: "₱50.00"
      },
      {
        name: "Pan de Sal",
        image: "images/pandesal.jpg",
        description: "Fresh Pan de Sal.",
        price: "₱25.00"
      },
      {
        name: "Cinnamon Roll",
        image: "images/cinnamonroll.jpg",
        description: "Delicious Cinnamon Rolls.",
        price: "₱60.00"
      },
      {
        name: "Baguette",
        image: "images/baguette.jpg",
        description: "Crisp and soft Baguette.",
        price: "₱45.00"
      },
      {
        name: "Mamon",
        image: "images/mamon.jpg",
        description: "Soft and fluffy Mamon.",
        price: "₱35.00"
      },
      {
        name: "Sliced Bread",
        image: "images/slicedbread.jpg",
        description: "Freshly baked Sliced Bread.",
        price: "₱30.00"
      },
      {
        name: "Pandesal with Cheese",
        image: "images/pandesalwithcheese.jpg",
        description: "Pandesal filled with Cheese.",
        price: "₱40.00"
      },
      {
        name: "Puto",
        image: "images/puto.jpg",
        description: "Soft and delicious Puto.",
        price: "₱20.00"
      },
      {
        name: "Torta",
        image: "images/torta.jpg",
        description: "Soft and creamy Torta.",
        price: "₱50.00"
      },
      {
        name: "Banana Cake",
        image: "images/bananacake.jpg",
        description: "Delicious Banana Cake.",
        price: "₱45.00"
      }
    ]
  };
  
  export default products;
  