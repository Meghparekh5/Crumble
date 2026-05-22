const products = [
  {
    id: 1,
    name: "Vanilla Cake",
    category: "Cakes",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    desc: "Soft vanilla sponge cake with creamy frosting.",
    caramelAddon: 75,
    sizes: [
      {
        label: "250-300gm",
        price: 250,
      },
      {
        label: "500gm",
        price: 400,
      },
      {
        label: "1kg",
        price: 750,
      },
    ],
  },

  {
    id: 2,
    name: "Chocolate Cake",
    category: "Cakes",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
    desc: "Rich chocolate cake with premium cocoa flavour.",
    caramelAddon: 75,
    sizes: [
      {
        label: "250-300gm",
        price: 300,
      },
      {
        label: "500gm",
        price: 450,
      },
      {
        label: "1kg",
        price: 850,
      },
    ],
  },

  {
    id: 3,
    name: "Chocolate Mocha",
    category: "Cakes",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187",
    desc: "Coffee infused mocha cake with creamy texture.",
    caramelAddon: 75,
    sizes: [
      {
        label: "250-300gm",
        price: 350,
      },
      {
        label: "500gm",
        price: 500,
      },
      {
        label: "1kg",
        price: 950,
      },
    ],
  },

  {
    id: 4,
    name: "Truffle Cake",
    category: "Cakes",
    image:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b",
    desc: "Smooth truffle cake with rich chocolate layers.",
    caramelAddon: 75,
    sizes: [
      {
        label: "250-300gm",
        price: 350,
      },
      {
        label: "500gm",
        price: 550,
      },
      {
        label: "1kg",
        price: 1050,
      },
    ],
  },

  {
    id: 5,
    name: "Pineapple Cake",
    category: "Cakes",
    image:
      "https://images.unsplash.com/photo-1535141192574-5d4897c12636",
    desc: "Fresh pineapple flavour with creamy layers.",
    caramelAddon: 75,
    sizes: [
      {
        label: "250-300gm",
        price: 350,
      },
      {
        label: "500gm",
        price: 600,
      },
      {
        label: "1kg",
        price: 1150,
      },
    ],
  },

  {
    id: 6,
    name: "Butterscotch Cake",
    category: "Cakes",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777",
    desc: "Crunchy butterscotch cake with caramel notes.",
    caramelAddon: 75,
    sizes: [
      {
        label: "250-300gm",
        price: 350,
      },
      {
        label: "500gm",
        price: 600,
      },
      {
        label: "1kg",
        price: 1150,
      },
    ],
  },

  {
    id: 7,
    name: "Strawberry Cake",
    category: "Cakes",
    image:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3",
    desc: "Fresh strawberry cake with smooth cream topping.",
    caramelAddon: 75,
    sizes: [
      {
        label: "250-300gm",
        price: 350,
      },
      {
        label: "500gm",
        price: 600,
      },
      {
        label: "1kg",
        price: 1150,
      },
    ],
  },

  {
    id: 8,
    name: "Nutella Cake",
    category: "Cakes",
    image:
      "https://images.unsplash.com/photo-1621303837174-89787a7d4729",
    desc: "Chocolate Nutella cake loaded with rich flavour.",
    caramelAddon: 75,
    sizes: [
      {
        label: "250-300gm",
        price: 350,
      },
      {
        label: "500gm",
        price: 600,
      },
      {
        label: "1kg",
        price: 1150,
      },
    ],
  },

  {
    id: 9,
    name: "Walnut Brownie",
    category: "Desserts",
    image:
      "https://images.unsplash.com/photo-1607920591413-4ec007e70023",
    desc: "Fudgy walnut brownies with premium chocolate.",
    sizes: [
      {
        label: "6pcs",
        price: 280,
      },
      {
        label: "8pcs",
        price: 380,
      },
      {
        label: "12pcs",
        price: 570,
      },
    ],
  },

  {
    id: 10,
    name: "Hazelnut Brownie",
    category: "Desserts",
    image:
      "https://images.unsplash.com/photo-1617305855058-336d24456869",
    desc: "Premium hazelnut brownies with soft texture.",
    sizes: [
      {
        label: "6pcs",
        price: 330,
      },
      {
        label: "8pcs",
        price: 440,
      },
      {
        label: "12pcs",
        price: 660,
      },
    ],
  },

  {
    id: 11,
    name: "Cookie Pie",
    category: "Desserts",
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e",
    desc: "Fresh baked cookie pie with gooey chocolate filling.",
    sizes: [
      {
        label: "500gm",
        price: 450,
      },
    ],
  },

  {
    id: 12,
    name: "Choco Cookie Bar",
    category: "Desserts",
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35",
    desc: "Crunchy chocolate cookie bars for snack lovers.",
    sizes: [
      {
        label: "Regular",
        price: 180,
      },
    ],
  },
];

export default products;