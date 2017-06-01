export const postData = {
  title: 'Another one post!',
  frontImage: {
    src: 'https://cdn-images-1.medium.com/max/2000/1*DOh8hikbDKQbziSE-LWKJg.jpeg',
    srcSet: 'https://cdn-images-1.medium.com/max/2000/1*DOh8hikbDKQbziSE-LWKJg.jpeg 1x',
    alt: 'tstFrontImage',
    heightCoeff: 700,
    widthCoeff: 1086
  },
  mainContent: [
    {
      type: <'paragraph'> 'paragraph',
      payload: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias asperiores aut blanditiis 
      culpa dignissimos dolor dolore dolorem eos expedita fugit harum laboriosam magni, minus non quaerat quidem 
      quisquam reiciendis sequi suscipit veritatis, voluptates. Alias aliquam animi atque aut autem, blanditiis 
      consequuntur cum doloremque ea eaque earum ex fuga fugit ipsum iusto laboriosam nostrum placeat quae 
      reprehenderit temporibus. Labore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias 
      asperiores aut blanditiis 
      culpa dignissimos dolor dolore dolorem eos expedita fugit harum laboriosam magni, minus non quaerat quidem 
      quisquam reiciendis sequi suscipit veritatis, voluptates. Alias aliquam animi atque aut autem, blanditiis 
      consequuntur cum doloremque ea eaque earum ex fuga fugit ipsum iusto laboriosam nostrum placeat quae 
      reprehenderit temporibus. Labore!`
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
      type: <'paragraph'> 'paragraph',
      payload: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias asperiores aut blanditiis 
      culpa dignissimos dolor dolore dolorem eos expedita fugit harum laboriosam magni, minus non quaerat quidem 
      quisquam reiciendis sequi suscipit veritatis, voluptates. Alias aliquam animi atque aut autem, blanditiis 
      consequuntur cum doloremque ea eaque earum ex fuga fugit ipsum iusto laboriosam nostrum placeat quae 
      reprehenderit temporibus. Labore!`
    },
    {
      type: <'subtitle'> 'subtitle',
      payload: 'Subtitle'
    },
    {
      type: <'paragraph'> 'paragraph',
      payload: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias asperiores aut blanditiis 
      culpa dignissimos dolor dolore dolorem eos expedita fugit harum laboriosam magni, minus non quaerat quidem 
      quisquam reiciendis sequi suscipit veritatis, voluptates. Alias aliquam animi atque aut autem, blanditiis 
      consequuntur cum doloremque ea eaque earum ex fuga fugit ipsum iusto laboriosam nostrum placeat quae 
      reprehenderit temporibus. Labore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci 
      alias asperiores aut blanditiis 
      culpa dignissimos dolor dolore dolorem eos expedita fugit harum laboriosam magni, minus non quaerat quidem 
      quisquam reiciendis sequi suscipit veritatis, voluptates. Alias aliquam animi atque aut autem, blanditiis 
      consequuntur cum doloremque ea eaque earum ex fuga fugit ipsum iusto laboriosam nostrum placeat quae 
      reprehenderit temporibus. Labore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias 
      asperiores aut blanditiis 
      culpa dignissimos dolor dolore dolorem eos expedita fugit harum laboriosam magni, minus non quaerat quidem 
      quisquam reiciendis sequi suscipit veritatis, voluptates. Alias aliquam animi atque aut autem, blanditiis 
      consequuntur cum doloremque ea eaque earum ex fuga fugit ipsum iusto laboriosam nostrum placeat quae 
      reprehenderit temporibus. Labore!`
    },
    {
      type: <'paragraph'> 'paragraph',
      payload: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias asperiores aut blanditiis 
      culpa dignissimos dolor dolore dolorem eos expedita fugit harum laboriosam magni, minus non quaerat quidem 
      quisquam reiciendis sequi suscipit veritatis, voluptates. Alias aliquam animi atque aut autem, blanditiis 
      consequuntur cum doloremque ea eaque earum ex fuga fugit ipsum iusto laboriosam nostrum placeat quae 
      reprehenderit temporibus. Labore!`
    },
    {
      type: <'gallery'> 'gallery',
      payload: [
        {
          src: 'https://cdn-images-1.medium.com/max/2000/1*ucMd7l6fXggw2PZ2g1KTCg.jpeg',
          srcSet: 'https://cdn-images-1.medium.com/max/2000/1*ucMd7l6fXggw2PZ2g1KTCg.jpeg 1x',
          alt: 'some text',
          aspectRatio: {
            heightCoeff: 683,
            widthCoeff: 1024
          }
        },
        {
          src: 'https://cdn-images-1.medium.com/max/800/1*U57FQqHw9eCVlS26M2fxmw.jpeg',
          srcSet: 'https://cdn-images-1.medium.com/max/800/1*U57FQqHw9eCVlS26M2fxmw.jpeg 1x',
          alt: 'some text',
          aspectRatio: {
            heightCoeff: 533,
            widthCoeff: 800
          }
        },
        {
          src: 'https://cdn-images-1.medium.com/max/800/1*Dwv24VW3sEuGBo4BqrsRQg.jpeg',
          srcSet: 'https://cdn-images-1.medium.com/max/800/1*Dwv24VW3sEuGBo4BqrsRQg.jpeg 1x',
          alt: 'some text',
          aspectRatio: {
            heightCoeff: 535,
            widthCoeff: 800
          }
        },
        {
          src: 'https://cdn-images-1.medium.com/max/2000/1*Nozl2qd0SV8Uya2CEkF_mg.jpeg',
          srcSet: 'https://cdn-images-1.medium.com/max/2000/1*Nozl2qd0SV8Uya2CEkF_mg.jpeg 1x',
          alt: 'some text',
          aspectRatio: {
            heightCoeff: 1333,
            widthCoeff: 2000
          }
        },
        {
          src: 'https://cdn-images-1.medium.com/max/800/1*7qYONdlJuS0pkUpdav-LQQ.jpeg',
          srcSet: 'https://cdn-images-1.medium.com/max/800/1*7qYONdlJuS0pkUpdav-LQQ.jpeg 1x',
          alt: 'some text',
          aspectRatio: {
            heightCoeff: 533,
            widthCoeff: 800
          }
        }
      ]
    },
    {
      type: <'paragraph'> 'paragraph',
      payload: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias asperiores aut blanditiis 
      culpa dignissimos dolor dolore dolorem eos expedita fugit harum laboriosam magni, minus non quaerat quidem 
      quisquam reiciendis sequi suscipit veritatis, voluptates. Alias aliquam animi atque aut autem, blanditiis 
      consequuntur cum doloremque ea eaque earum ex fuga fugit ipsum iusto laboriosam nostrum placeat quae 
      reprehenderit temporibus. Labore!`
    },
    {
      type: <'paragraph'> 'paragraph',
      payload: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias asperiores aut blanditiis 
      culpa dignissimos dolor dolore dolorem eos expedita fugit harum laboriosam magni, minus non quaerat quidem 
      quisquam reiciendis sequi suscipit veritatis, voluptates. Alias aliquam animi atque aut autem, blanditiis 
      consequuntur cum doloremque ea eaque earum ex fuga fugit ipsum iusto laboriosam nostrum placeat quae 
      reprehenderit temporibus. Labore!`
    }
  ]
}
