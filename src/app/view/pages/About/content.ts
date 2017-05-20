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
  ]
}
