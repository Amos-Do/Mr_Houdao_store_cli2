<template>
  <div class="to-top bg-light rounded-circle animated-top">
    <a class="text-secondary" @click.prevent="scrollToTop">
      <font-awesome-icon icon="arrow-circle-up"/>
    </a>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      $('html,body').animate({ scrollTop: 0 }, 1000);
    },
  },
  mounted() {
    $(window).scroll(function() {
      var scrollPos = $(window).scrollTop();
      if (scrollPos > 550) {
        $('.animated-top').addClass("fadeIn");
      } else {
        $('.animated-top').removeClass("fadeIn");
      }

    });
  }
}
</script>

<style lang="scss">
  .to-top {
    font-size: 2.2rem;
    line-height: 32px;
    display: inline-block;
    position: fixed;
    bottom: 15%;
    z-index: 9;
    right: 5%;
  }
</style>