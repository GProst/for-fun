import {Component, Input, Output, OnChanges, OnInit, OnDestroy, EventEmitter} from '@angular/core'

import {ImageContent} from '../../atoms/Image/component'

export interface Slide extends ImageContent {
  aspectRatio: {
    heightCoeff: number,
    widthCoeff: number
  }
}

export type SliderData = {
  slideIndex: number,
  slides: Array<Slide>
}

@Component({
  selector: 'gp-gallery-slider',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export class GallerySliderMolecule implements OnChanges, OnInit, OnDestroy {
  @Input() sliderData: SliderData
  @Output() close = new EventEmitter()

  currentSlide: number
  slides: Array<Slide>
  currentSlideProportions: string

  private setCurrentSlideProps = () => {
    this.setCurrentSlideType()
    this.setCurrentSlideSizesAttr()
  }

  private setCurrentSlideType() {
    if (!this.isDesktop()) {
      const {heightCoeff, widthCoeff} = this.slides[this.currentSlide].aspectRatio
      const slideAspectRatio = heightCoeff / widthCoeff
      const viewportAspectRatio = window.innerHeight / window.innerWidth
      let proportions = 'tall'
      if (slideAspectRatio < viewportAspectRatio) {
        proportions = 'long'
      }
      this.currentSlideProportions = proportions
    }
  }

  private setCurrentSlideSizesAttr() {
    let sizes = '50vw' // desktop
    if (!this.isDesktop()) {
      if (this.currentSlideProportions === 'long') {
        sizes = '100vw'
      // if slide height will be 100vh (tall)
      } else {
        const {heightCoeff, widthCoeff} = this.slides[this.currentSlide].aspectRatio
        const slideViewportHightsCoeff = window.innerHeight / heightCoeff
        const slideWidth = widthCoeff * slideViewportHightsCoeff
        const slideWidthPercentage = Math.round(100 * (window.innerWidth / slideWidth)) // integer
        sizes = `${slideWidthPercentage}vw`
      }
    }
    // creating new object, so Angular will update image sizes attr (otherwise it won't)
    this.slides[this.currentSlide] = {...this.slides[this.currentSlide], sizes}
  }

  setCurrentSlideClass() {
    return {
      desktop: this.isDesktop(),
      'slide_tall': this.isTall() && !this.isDesktop(),
      'slide_long': !this.isTall() && !this.isDesktop()
    }
  }

  private isDesktop() {
    return window.innerWidth >= 800
  }

  private isTall() {
    return this.currentSlideProportions === 'tall'
  }

  onSlideChanged(shift: number) {
    this.currentSlide += shift
  }

  ngOnChanges() {
    this.currentSlide = this.sliderData.slideIndex
    this.slides = this.sliderData.slides
    this.setCurrentSlideProps()
  }

  ngOnInit() {
    window.addEventListener('resize', this.setCurrentSlideProps)
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.setCurrentSlideProps)
  }
}