<template>
  <div class="bg-secondary">
    <div class="container p-3">
        <div class="row text-center text-light">
          <div class="col py-3">
            <img src="@/assets/images/logo_white_font.png" style="max-height:45px;">
          </div>
          <div class="col-md-6 py-3 d-flex flex-column justify-content-end" style="font-size:.5rem">
            <span>僅個人練習使用，不做任何商業用途</span>
            <span>Copyright © 2020 - Amos</span>
          </div>
          <div class="col py-3 d-flex justify-content-center align-items-center">
            <a href="https://www.facebook.com/mr.houdao" class="link-icon" target="_blank">
              <font-awesome-icon :icon="['fab', 'facebook-square']" size="2x"/>
            </a>
            <a href="https://www.instagram.com/mr_houdao/?hl=zh-tw" class="link-icon" target="_blank">
              <font-awesome-icon :icon="['fab', 'instagram-square']" size="2x"/>
            </a>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
  .link-icon {
    margin: 0 .5rem;
    display: block;
    color: white;
    &:first-child {
      &:hover {
        color: #4267B2;
      }
    }
    &:last-child {
      &:hover {
        color: rgb(236, 88, 96);
      }
    }
  }
  
</style>