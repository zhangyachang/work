<template>
  <div class="footer">
    <div class="footer-info">
      <div class="footer-bg" style="display: none;">
        <ul class="footer-btn">
          <li v-for="(item,index) in footInfo" :data-btn="item.url" @click.stop="changeBtnBg($event,index)" :key="item.id">
            <div class="btn-img">
              <!--<img src="../../../static/images/head/light1.jpg" alt="">-->
              <img :src="bgimg[index]" alt="">
            </div>
            <p>{{item.text}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['footInfo'],
  data () {
    return {
      bgimg: ['../../../static/images/head/light1.jpg', '../../../static/images/head/an1.jpg', '../../../static/images/head/an1.jpg'],
      message: '消息'
    }
  },
  methods: {
    changeBtnBg (event, index) {
      this.bgimg = ['../../../static/images/head/an1.jpg', '../../../static/images/head/an1.jpg', '../../../static/images/head/an1.jpg']
      this.bgimg[index] = '../../../static/images/head/light1.jpg'
      this.$emit('whatBtn', this.footInfo[index].url)
    }
  }
}
</script>
<style>
  .footer {
    width: 100%;
    height: 2rem;
    background: #02172C;
  }
  .footer-info {
    position: relative;
    width: 28.03571429rem;
    height: 100%;
    margin: 0 auto;
  }
  .footer-bg {
    opacity: .8;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 3.57142857rem;
    background: url('../../../static/images/head/footer.jpg') no-repeat center / 100% 100%;
  }
  .footer-bg ul {
    display: flex;
    justify-content: space-around;
  }
  .footer-bg li {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    width: 4.28571429rem;
    text-align: center;
    font-size: 0.8rem;
  }
  .footer-bg .btn-img {
    width: 2.5rem;
    height: 2.07142857rem;
    margin: 0 auto;
  }
  .footer-bg .btn-img img {
    width: 100%;
    height: 100%;
    margin-top: 0.5rem;
  }
  .footer-bg li p {
    margin-top: 0.35714286rem;
    font-size: 0.71428571rem;
    color: #fff;
  }
</style>
