<template>
  <div class="hero">
    <h1>
      <a href="#"
        class="hero__typewrite"
        data-period="2000"
        data-type='[
        "Hi there", "My name is Tuan Truong.", "I Love Design.", "I Love to Develop." ]'>
        <span class="wrap"></span>
      </a>
    </h1>
    <a
      href="#"
      class="btn btn---white btn--animated"
    >more about me</a>
  </div>
</template>

<script>

export default {
  data() {
    return {
      toRotate: null,
      el: null,
      loopNum: 0,
      period: parseInt(this.period, 10) || 5000,
      text: '',
      isDeleting: false,
    };
  },
  methods: {
    tick() {
      const i = this.loopNum % this.toRotate.length;
      const fullTxt = this.toRotate[i];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = `<span class="wrap">${this.txt}</span>`;

      const that = this;
      let delta = 200 - Math.random() * 100;

      if (this.isDeleting) { delta /= 2; }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 900;
      }

      setTimeout(() => {
        that.tick();
      }, delta);
    },
    textType(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 5000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
    },
  },
  mounted() {
    const elements = document.getElementsByClassName('hero__typewrite');
    for (let i = 0; i < elements.length; i++) {
      const toRotate = elements[i].getAttribute('data-type');
      const period = elements[i].getAttribute('data-period');
      if (toRotate) {
        this.textType(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    const css = document.createElement('style');
    css.type = 'text/css';
    css.innerHTML = '.hero__typewrite > .wrap { border-right: 0.08em solid #fff}';
    document.body.appendChild(css);
  },
};
</script>

<style lang="scss">
.hero {
  height: -webkit-fill-available;
  background: url('../assets/hero-wallpaper.png') center;
  background-size: cover;

  /* Grid styles */
  display: grid;
  align-content: center;
  justify-items: center;
  // grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-template-areas:
  'typewriter'
  'hero-button';


  &__typewrite {
    color: #e9ecef;
    font-size: 2rem;
    font-weight: 100;
    text-decoration: none;
    grid-area: typewriter;
  }

}

.btn {
    grid-area: hero-button;
    &--animated {
        animation: move-bottom 0.5s ease-out 0.75s;
        animation-fill-mode: backwards;
    }
    &:link,
    &:visited {
      margin-top: 1rem;
      border-radius: 1rem;
      display: inline-block;
      padding: 1rem 2.5rem;
      position: relative;
      text-decoration: none;
      transition: all 0.2s;
    }
    &:hover {
        box-shadow: 0 1rem 2rem rgba(#e2e2e2, 0.2);
        transform: translateY(-0.3rem);
    }
    &:active {
        box-shadow: 0 0.5rem 1rem rgba(#e2e2e2, 0.2);
        transform: translateY(-0 0.1rem);
    }
    &---white {
        background-color: #e9ecef;
        color: #121b30;
    }

    &::after {
        border-radius: 10rem;
        content: '';
        display: inline;
        left: 0;
        position: absolute;
        top: 0;
        transition: all 0.4s;
        z-index: -1;
    }
    &--white::after {
        background-color: #e9ecef;
    }
    &:hover::after {
        opacity: 0;
        transform: scaleX(1.4) scaleY(1.6);
    }
}

.btn-text {
    &:link,
    &:visited {
        font-size: 16px;
        color: blue;
        display: inline-block;
        text-decoration: none;
        border-bottom: 1px solid blue;
        padding: 3px;
        transition: all .2s;
    }

    &:hover {
        background-color: blue;
        color: #fff;
        box-shadow: 0 1rem 2rem rgba(#e2e2e2, 0.15);
        transform: translateY(-2px);
    }

    &:active {
        box-shadow: 0 1rem 1rem rgba(#e2e2e2, 0.15);
        transform: translateY(0);

    }
}

@keyframes move-left {
    0% {
        opacity: 0;
        transform: translate(-10rem);
    }

    80% {
        transform: translate(1rem);
    }
    100% {
        opacity: 1;
    }
}

@keyframes move-right {
    0% {
        opacity: 0;
        transform: translate(10rem);
    }
    80% {
        transform: translate(-1rem);
    }
    100% {
        opacity: 1;
        transform: translate(0);
    }
}

@keyframes move-bottom {
    0% {
        opacity: 0;
        transform: translateY(2rem);
    }
    80% {
        transform: translateY(-1rem);
    }
    100% {
        opacity: 1;
        transform: translate(0);
    }
}


// .hero {
//   grid-area: hero;
//   display: grid;
//   align-self: center;
//   grid-template-areas:
//   'text image image';
//   margin-top: 2rem;

//   &__text {
//     color: #3B4252;
//     grid-area: text;

//     &--sub-header {
//       color: #adb5bd;
//     }
//   }

//   &__image {
//     grid-area: image;
//     height: auto;
//     max-width: 100%;
//   }

// }
// @media(max-width: 700px) {
//     .hero {
//       grid-template-areas:
//     'image'
//     'text';
//     }
// }

// @media(max-width: 500px) {
//   .hero {
//     grid-template-areas:
//   'image'
//   'text';
//   }
// }
</style>
