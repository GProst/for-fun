export const postData = {
  title: 'Long title post!',
  slug: 'long-title-post',
  frontImage: {
    src: 'http://s1.picswalls.com/wallpapers/2014/07/19/beautiful-cake-wallpaper_110547561_63.jpg',
    srcSet: 'http://s1.picswalls.com/wallpapers/2014/07/19/beautiful-cake-wallpaper_110547561_63.jpg 1x',
    alt: 'tstFrontImage',
    heightCoeff: 1200,
    widthCoeff: 1920
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
          src: 'https://i.gyazo.com/e302e4ae3ba172bad429678ca53de155.jpg',
          srcSet: 'https://i.gyazo.com/e302e4ae3ba172bad429678ca53de155.jpg 1x',
          alt: 'some text',
          slide: {
            src: 'https://cdn-images-1.medium.com/max/2000/1*ucMd7l6fXggw2PZ2g1KTCg.jpeg',
            srcSet: 'https://cdn-images-1.medium.com/max/2000/1*ucMd7l6fXggw2PZ2g1KTCg.jpeg 1x',
            alt: 'some text',
            aspectRatio: {
              heightCoeff: 683,
              widthCoeff: 1024
            }
          }
        },
        {
          src: 'https://i.gyazo.com/09d23c970885cd593ea396d8318b2ae7.jpg',
          srcSet: 'https://i.gyazo.com/09d23c970885cd593ea396d8318b2ae7.jpg 1x',
          alt: 'some text',
          slide: {
            src: 'https://cdn-images-1.medium.com/max/800/1*U57FQqHw9eCVlS26M2fxmw.jpeg',
            srcSet: 'https://cdn-images-1.medium.com/max/800/1*U57FQqHw9eCVlS26M2fxmw.jpeg 1x',
            alt: 'some text',
            aspectRatio: {
              heightCoeff: 533,
              widthCoeff: 800
            }
          }
        },
        {
          src: 'https://i.gyazo.com/40c103ca6f59a1042a961a4a61f514a5.jpg',
          srcSet: 'https://i.gyazo.com/40c103ca6f59a1042a961a4a61f514a5.jpg 1x',
          alt: 'some text',
          slide: {
            src: 'https://cdn-images-1.medium.com/max/800/1*Dwv24VW3sEuGBo4BqrsRQg.jpeg',
            srcSet: 'https://cdn-images-1.medium.com/max/800/1*Dwv24VW3sEuGBo4BqrsRQg.jpeg 1x',
            alt: 'some text',
            aspectRatio: {
              heightCoeff: 535,
              widthCoeff: 800
            }
          }
        },
        {
          src: 'https://i.gyazo.com/6ade805d9f86d204b097a95ec8197afd.jpg',
          srcSet: 'https://i.gyazo.com/6ade805d9f86d204b097a95ec8197afd.jpg 1x',
          alt: 'some text',
          slide: {
            src: 'https://cdn-images-1.medium.com/max/2000/1*Nozl2qd0SV8Uya2CEkF_mg.jpeg',
            srcSet: 'https://cdn-images-1.medium.com/max/2000/1*Nozl2qd0SV8Uya2CEkF_mg.jpeg 1x',
            alt: 'some text',
            aspectRatio: {
              heightCoeff: 1333,
              widthCoeff: 2000
            }
          }
        },
        {
          src: 'https://i.gyazo.com/c7fcfe97d7d8ad29d583d999683296cd.jpg',
          srcSet: 'https://i.gyazo.com/c7fcfe97d7d8ad29d583d999683296cd.jpg 1x',
          alt: 'some text',
          slide: {
            src: 'https://cdn-images-1.medium.com/max/800/1*7qYONdlJuS0pkUpdav-LQQ.jpeg',
            srcSet: 'https://cdn-images-1.medium.com/max/800/1*7qYONdlJuS0pkUpdav-LQQ.jpeg 1x',
            alt: 'some text',
            aspectRatio: {
              heightCoeff: 533,
              widthCoeff: 800
            }
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
