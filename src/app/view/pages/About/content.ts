export const postData = {
  title: 'We are on About Page!',
  frontImage: {
    src: 'https://cdn-images-1.medium.com/max/2000/1*DOh8hikbDKQbziSE-LWKJg.jpeg',
    srcSet: 'https://cdn-images-1.medium.com/max/2000/1*DOh8hikbDKQbziSE-LWKJg.jpeg 1x',
    alt: 'tstFrontImage'
  },
  mainContent: [
    {
      type: <'paragraph'> 'paragraph',
      payload: 'Paragraph content'
    },
    {
      type: <'img'> 'img',
      payload: {
        src: 'https://cdn-images-1.medium.com/max/2000/1*PTRbkX1BYeEAovhPC7-bCg.jpeg',
        srcSet: 'https://cdn-images-1.medium.com/max/2000/1*PTRbkX1BYeEAovhPC7-bCg.jpeg 1x',
        alt: 'some text'
      }
    },
    {
      type: <'subtitle'> 'subtitle',
      payload: 'Subtitle'
    },
    {
      type: <'paragraph'> 'paragraph',
      payload: 'Another paragraph content'
    },
    {
      type: <'gallery'> 'gallery',
      payload: [
        {
          src: 'https://cdn-images-1.medium.com/max/2000/1*ucMd7l6fXggw2PZ2g1KTCg.jpeg',
          srcSet: 'https://cdn-images-1.medium.com/max/2000/1*ucMd7l6fXggw2PZ2g1KTCg.jpeg 1x',
          alt: 'some text'
        },
        {
          src: 'https://cdn-images-1.medium.com/max/800/1*U57FQqHw9eCVlS26M2fxmw.jpeg',
          srcSet: 'https://cdn-images-1.medium.com/max/800/1*U57FQqHw9eCVlS26M2fxmw.jpeg 1x',
          alt: 'some text'
        },
        {
          src: 'https://cdn-images-1.medium.com/max/800/1*Dwv24VW3sEuGBo4BqrsRQg.jpeg',
          srcSet: 'https://cdn-images-1.medium.com/max/800/1*Dwv24VW3sEuGBo4BqrsRQg.jpeg 1x',
          alt: 'some text'
        },
        {
          src: 'https://cdn-images-1.medium.com/max/800/1*7qYONdlJuS0pkUpdav-LQQ.jpeg',
          srcSet: 'https://cdn-images-1.medium.com/max/800/1*7qYONdlJuS0pkUpdav-LQQ.jpeg 1x',
          alt: 'some text'
        }
      ]
    },
    {
      type: <'paragraph'> 'paragraph',
      payload: 'yet another paragraph'
    },
  ]
}
