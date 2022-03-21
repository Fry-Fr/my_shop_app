const products = [
  {
    id: 1,
    quantity: 0,
    item_type: 'trees',
    image_url: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    price: '$10.99',
    item_name: 'Bonsai',
    description: 'Japanese "bonsai" only attempts to produce small trees that mimic the shape of real life trees.'
  },
  {
    id: 2,
    quantity: 0,
    item_type: 'seeds',
    image_url: 'https://images.unsplash.com/photo-1508748169069-82590c9f26e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
    price: '$3.99',
    item_name: 'Seeds',
    description: 'Seeds are an embryonic plant enclosed in a protective outer covering.'
  },
  {
    id: 3,
    quantity: 0,
    item_type: 'seedlings',
    image_url: 'https://images.unsplash.com/photo-1644826447754-ec3a4fa82b7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=985&q=80',
    price: '$7.99',
    item_name: 'Seedlings',
    description: 'A young sporophyte developing out of a plant embryo from a seed.'.repeat(2)
  },
  {
    id: 4,
    quantity: 0,
    item_type: 'trees',
    image_url: 'https://images.unsplash.com/photo-1631551807946-14b5fda1123b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    price: '$80.99',
    item_name: 'Australia tree',
    description: 'Northern Territory, Australia'
  },
  {
    id: 5,
    quantity: 0,
    item_type: 'trees',
    image_url: 'https://images.unsplash.com/photo-1610087557362-e070d3c5d07d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    price: '$30.00',
    item_name: 'Maldives',
    description: 'Trees from the Maldives'
  },
  {
    id: 6,
    quantity: 0,
    item_type: 'flowers',
    image_url: 'https://images.unsplash.com/photo-1469259943454-aa100abba749?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    price: '$8.99',
    item_name: 'Flowers',
    description: 'Floral'
  },
  {
    id: 7,
    quantity: 0,
    item_type: 'flowers',
    image_url: 'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1004&q=80',
    price: '$8.99',
    item_name: 'Roses',
    description: 'Floral'
  },
  {
    id: 8,
    quantity: 0,
    item_type: 'flowers',
    image_url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    price: '$10.99',
    item_name: 'Yellow Flowers',
    description: 'Floral arrangement'
  },
  {
    id: 9,
    quantity: 0,
    item_type: 'seedlings',
    image_url: 'https://images.unsplash.com/photo-1505235687559-28b5f54645b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80',
    price: '$10.99',
    item_name: 'Seedling',
    description: 'seedling baby plant'
  },
  {
    id: 10,
    quantity: 0,
    item_type: 'seedlings',
    image_url: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    price: '$10.99',
    item_name: 'Seedling',
    description: 'seedling baby sprout a garden'
  },
  {
    id: 11,
    quantity: 0,
    item_type: 'seeds',
    image_url: 'https://images.unsplash.com/photo-1542990253-a781e04c0082?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1694&q=80',
    price: '$6.99',
    item_name: 'Assortment Seeds/Nuts',
    description: 'Seeds and nuts for consumption.'
  },
  {
    id: 12,
    quantity: 0,
    item_type: 'seeds',
    image_url: 'https://images.unsplash.com/photo-1604768802835-899055f0e245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    price: '$6.99',
    item_name: 'Chai Seeds',
    description: 'Seeds are good.'
  },
];

export default products;
