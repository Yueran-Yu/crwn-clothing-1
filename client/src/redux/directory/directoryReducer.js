const INITIAL_STATE = {
  // sections: [
  //   {
  //     title: 'hats',
  //     imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
  //     id: 1,
  //     linkUrl: 'shop/hats'
  //   },
  //   {
  //     title: 'jackets',
  //     imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
  //     id: 2,
  //     linkUrl: 'shop/jackets'
  //   },
  //   {
  //     title: 'sneakers',
  //     imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
  //     id: 3,
  //     linkUrl: 'shop/sneakers'
  //   },
  //   {
  //     title: 'womens',
  //     imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
  //     size: 'large',
  //     id: 4,
  //     linkUrl: 'shop/womens'
  //   },
  //   {
  //     title: 'mens',
  //     imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
  //     size: 'large',
  //     id: 5,
  //     linkUrl: 'shop/mens'
  //   }
  // ]

  sections: [
    {
      "id": "1396470977485",
      "title": "Women",
      "linkUrl": "shop/women",
      'size': 'large',
      "imageUrl": "https://media.kohlsimg.com/is/image/kohls/2994312_Forest_Night?&op_sharpen=1"
    },
    {
      "id": "1396470977619",
      "title": "Juniors",
      'size':'large',
      "linkUrl": "shop/juniors",
      "imageUrl": "https://media.kohlsimg.com/is/image/kohls/3005901_Light_Gray?&op_sharpen=1"
    },
    {
      "id": "1396470977564",
      "title": "Men",
      "linkUrl": "shop/men",
      'size': 'large',
      "imageUrl": "https://media.kohlsimg.com/is/image/kohls/2957101_Black?&op_sharpen=1"
    },
    {
      "id": "1396470977867",
      "title": "Shoes",
      "linkUrl": "shop/shoes",
      "imageUrl": "https://media.kohlsimg.com/is/image/kohls/2992344_Gray_Black_Orange?&op_sharpen=1"
    },
    {
      "id": "1396470977784",
      "title": "Toys",
      "linkUrl": "shop/toys",
      "imageUrl": "https://media.kohlsimg.com/is/image/kohls/2155676?&op_sharpen=1"
    },
    {
      "id": "1396470977658",
      "title": "Kids",
      "linkUrl": "shop/kids",
      "imageUrl": "https://media.kohlsimg.com/is/image/kohls/3072169_Navy?&op_sharpen=1"
    },
    {
      "id": "1396470977706",
      "title": "Baby",
      "linkUrl": "shop/baby",
      "imageUrl": "https://media.kohlsimg.com/is/image/kohls/2569086_Lagoon?&op_sharpen=1"
    }
  ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default directoryReducer;