<template>
  <div class="container">
    <div class="hero">
      <div class="hero__text">
        <h1>Hi there my name is Tuan Truong,</h1>
        <h1>Developer & Designer.</h1>
        <p class="hero__text--sub-header">
          I always love solving problems and creating things out of nothing.
          Building web applications is the perfect medium for me. Whether you need me to design
          and build your vision I’m your guy.
        </p>
        <p class="hero__text--email">tuan.truong.dsgn@gmail.com</p>
      </div>

      <img class="hero__image" src="@/assets/undraw_web_developer_p3e5.png" alt="web">

    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
};
</script>

<style lang="scss">
.container {
  margin: 0.5rem 2rem;
}

.hero {
  grid-area: hero;
  display: grid;
  align-self: center;
  grid-template-areas:
  'text image image';
  margin-top: 2rem;

  &__text {
    color: #3B4252;
    grid-area: text;

    &--sub-header {
      color: #adb5bd;
    }
  }

  &__image {
    grid-area: image;
    height: auto;
    max-width: 100%;
  }

}
@media(max-width: 700px) {
    .hero {
      grid-template-areas:
    'image'
    'text';
    }
}

@media(max-width: 500px) {
  .hero {
    grid-template-areas:
  'image'
  'text';

  &__image {

  }

  &__text {
  }

  }
}


</style>
