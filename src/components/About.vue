<template>
  <div class="container">
    <div class="about">
      <div class="about__text">
        <h2>about</h2>
        <p class="about__text--sub-header">
          I always love solving problems and creating things out of nothing.
          Building web applications is the perfect medium for me. Whether you need me to design
          and build your vision I’m your guy.
        </p>
        <p class="about__text--email">tuan.truong.dsgn@gmail.com</p>
      </div>
      <img class="about__image" src="@/assets/undraw_web_developer_p3e5.png" alt="web">
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

.about {
  grid-area: about;
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
    .about {
      grid-template-areas:
    'image'
    'text';
    }
}

@media(max-width: 500px) {
  .about {
    grid-template-areas:
  'image'
  'text';
  }
}
</style>
