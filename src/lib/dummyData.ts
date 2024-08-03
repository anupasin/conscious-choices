// src/lib/dummyData.ts

export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  category: string;
  imageUrl: string;
}

export const dummyProducts: Product[] = [
  {
    id: '1',
    name: 'Organic Cotton T-Shirt',
    description: 'Comfortable and eco-friendly t-shirt made from 100% organic cotton.',
    longDescription: 'Our organic cotton t-shirt is made from 100% GOTS certified organic cotton. It is soft, breathable, and comfortable to wear. The t-shirt is designed to be a versatile addition to your wardrobe, perfect for casual wear or layering. It is also machine washable and can be tumble dried on low heat. Our organic cotton t-shirt is a sustainable choice that is kind to the environment and your skin.',
    price: 29.99,
    category: 'Clothing',
    imageUrl: '/images/organic-tshirt.jpg',
  },
  {
    id: '2',
    name: 'Handmade Jute Bag',
    description: 'Durable and stylish bag made from natural jute fibers.',
    longDescription: 'Our handmade jute bag is made from natural jute fibers, which are harvested from the leaves of the jute plant. The bag is durable, water-resistant, and has a unique texture that makes it a stylish addition to your accessories. The bag has a spacious interior, with a zipper closure and a detachable shoulder strap. It is also machine washable and can be tumble dried on low heat. Our jute bag is a sustainable choice that is kind to the environment and your style.',
    price: 39.99,
    category: 'Accessories',
    imageUrl: '/images/jute-bag.jpg',
  },
  {
    id: '3',
    name: 'Organic Coconut Oil Soap',
    description: 'Gentle and moisturizing soap made with organic coconut oil.',
    longDescription: 'Our organic coconut oil soap is made with organic coconut oil, which is rich in nutrients and has moisturizing properties. The soap is gentle on the skin and leaves it feeling soft and nourished. It is also free from harsh chemicals and synthetic ingredients. Our organic coconut oil soap is a sustainable choice that is kind to the environment and your skin.',
    price: 9.99,
    category: 'Beauty',
    imageUrl: '/images/coconut-soap.jpg',
  },
  {
    id: '4',
    name: 'Bamboo Toothbrush',
    description: 'Eco-friendly toothbrush with a biodegradable bamboo handle.',
    longDescription: 'Our bamboo toothbrush is made from sustainable bamboo, which is a fast-growing and renewable resource. The handle is biodegradable, which means it will break down naturally in a compost pile. The bristles are made from nylon, which is a durable and effective material. Our bamboo toothbrush is a sustainable choice that is kind to the environment and your oral health.',
    price: 4.99,
    category: 'Personal Care',
    imageUrl: '/images/bamboo-toothbrush.jpg',
  },
  {
    id: '5',
    name: 'Reusable Beeswax Wraps',
    description: 'Sustainable alternative to plastic wrap, made from beeswax and cotton.',
    longDescription: 'Our reusable beeswax wraps are a sustainable alternative to plastic wrap. They are made from beeswax, which is a natural preservative, and cotton, which is a renewable resource. The wraps are easy to use and can be reused multiple times. They are also machine washable and can be dried on a rack. Our beeswax wraps are a sustainable choice that is kind to the environment and your kitchen.',
    price: 14.99,
    category: 'Kitchen',
    imageUrl: '/images/beeswax-wraps.jpg',
  },
  {
    id: '6',
    name: 'Recycled Paper Notebook',
    description: 'Notebook made from 100% recycled paper, perfect for sustainable note-taking.',
    longDescription: 'Our recycled paper notebook is made from 100% post-consumer waste paper. The paper is sourced from responsible mills that practice sustainable forest management. The notebook is spiral-bound and has 100 pages of high-quality paper. It is also blank inside, so you can use it for your own notes, sketches, or doodles. Our recycled paper notebook is a sustainable choice that is kind to the environment and your creativity.',
    price: 12.99,
    category: 'Stationery',
    imageUrl: '/images/recycled-notebook.jpg',
  },
  {
    id: '7',
    name: 'Organic Herbal Tea Blend',
    description: 'Relaxing tea blend made from organic herbs, free from additives.',
    longDescription: 'Our organic herbal tea blend is a relaxing and refreshing drink made from a blend of organic herbs. The tea is free from additives, preservatives, and artificial flavors. The blend includes chamomile, lavender, lemon balm, and peppermint, which are known for their calming and soothing properties. Our organic herbal tea blend is a sustainable choice that is kind to the environment and your well-being.',
    price: 8.99,
    category: 'Food & Beverage',
    imageUrl: '/images/herbal-tea.jpg',
  },
  {
    id: '8',
    name: 'Natural Cork Yoga Mat',
    description: 'Non-slip yoga mat made from sustainable cork and natural rubber.',
    longDescription: 'Our natural cork yoga mat is made from sustainable cork and natural rubber. The cork is sourced from cork oak trees that are harvested in a sustainable manner. The rubber is derived from the sap of the rubber tree, which is a renewable resource. The mat is non-slip and provides excellent cushioning and support. It is also machine washable and can be dried on a rack. Our natural cork yoga mat is a sustainable choice that is kind to the environment and your practice.',
    price: 59.99,
    category: 'Fitness',
    imageUrl: '/images/cork-yoga-mat.jpg',
  },
  {
    id: '9',
    name: 'Eco-Friendly Laundry Detergent',
    description: 'Biodegradable and plant-based laundry detergent for a green clean.',
    longDescription: 'Our eco-friendly laundry detergent is biodegradable and plant-based. It is free from harsh chemicals and synthetic ingredients. The detergent is concentrated, which means it is more efficient and reduces waste. It is also safe for septic systems and is gentle on the skin. Our eco-friendly laundry detergent is a sustainable choice that is kind to the environment and your family.',
    price: 15.99,
    category: 'Household',
    imageUrl: '/images/laundry-detergent.jpg',
  },
  {
    id: '10',
    name: 'Solar-Powered Fairy Lights',
    description: 'Decorative lights powered by solar energy, perfect for outdoor spaces.',
    longDescription: 'Our solar-powered fairy lights are a beautiful and sustainable addition to your outdoor space. The lights are powered by solar energy, which means they are free from emissions and reduce your carbon footprint. The lights are also waterproof and can be used in a variety of settings, such as gardens, patios, and decks. Our solar-powered fairy lights are a sustainable choice that is kind to the environment and your decor.',
    price: 24.99,
    category: 'Outdoor',
    imageUrl: '/images/solar-fairy-lights.jpg',
  },
  {
    id: '11',
    name: 'Plant-Based Compostable Utensils',
    description: 'Eco-friendly utensils made from plant-based materials, fully compostable.',
    longDescription: 'Our plant-based compostable utensils are a sustainable alternative to plastic utensils. They are made from plant-based materials, such as cornstarch and sugarcane, which are renewable resources. The utensils are also fully compostable, which means they will break down naturally in a compost pile. Our plant-based compostable utensils are a sustainable choice that is kind to the environment and your conscience.',
    price: 6.99,
    category: 'Kitchen',
    imageUrl: '/images/compostable-utensils.jpg',
  },
  {
    id: '12',
    name: 'Organic Cotton Bed Sheets',
    description: 'Soft and breathable bed sheets made from 100% organic cotton.',
    longDescription: 'Our organic cotton bed sheets are soft, breathable, and comfortable to sleep on. They are made from 100% GOTS certified organic cotton, which is grown without the use of harmful pesticides or chemicals. The sheets are also machine washable and can be tumble dried on low heat. Our organic cotton bed sheets are a sustainable choice that is kind to the environment and your skin.',
    price: 89.99,
    category: 'Home',
    imageUrl: '/images/organic-bed-sheets.jpg',
  },
  {
    id: '13',
    name: 'Eco-Conscious Water Bottle',
    description: 'Reusable water bottle made from stainless steel, keeps drinks cold or hot.',
    longDescription: 'Our eco-conscious water bottle is made from stainless steel, which is a durable and long-lasting material. The bottle is also reusable, which means it reduces waste and saves resources. It keeps drinks cold for up to 24 hours and hot for up to 12 hours. The bottle is also leak-proof and has a comfortable grip. Our eco-conscious water bottle is a sustainable choice that is kind to the environment and your hydration.',
    price: 19.99,
    category: 'Accessories',
    imageUrl: '/images/eco-water-bottle.jpg',
  },
];
