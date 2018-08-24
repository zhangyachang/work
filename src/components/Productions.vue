<!-- 生产看板 -->
<template>
  <div class="production">
    <headTitle :headInfo="page"></headTitle>
    <div class="pro-content">
      <contentTitle :contentTitleInfo="contentTitleInfo"></contentTitle>
      <div class="pro-content-info">
        <div class="pro-content-left">
          <ul class="pro-content-left-ul">
            <li>生产数据</li>
            <li v-for="item in productionData" :key="item.id">
              <div class="img">
                <img src="" alt="">
              </div>
              <div class="info-data">
                <p class="info-data-p1">{{item.key}}</p>
                <p class="info-data-p2" :style="'color:'+item.color">{{item.value}}</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="pro-content-right">
          <ul class="pro-content-right-ul">
            <li>物料数据</li>
            <li v-for="item in materialData" :key="item.id">
              <div class="img">
                <img src="" alt="">
              </div>
              <div class="info-data">
                <p class="info-data-p1">{{item.key}}</p>
                <p class="info-data-p2" :style="'color:'+item.color">{{item.value}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <footerMods :footInfo="footData" @whatBtn="getData"></footerMods>
  </div>
</template>

<script>
import headTitle from './mods/header'
import contentTitle from './mods/contentTitle'
import footerMods from './mods/footer'
import axios from 'axios'
export default {
  props: [],
  data () {
    return {
      page: '生产看板',
      footData: [
        {
          text: '实时统计',
          url: '/shishitonji'
        },
        {
          text: '生产看板',
          url: '/shengchankanban'
        }
      ],
      contentTitleInfo: [],
      productionData: [],
      materialData: []
    }
  },
  methods: {
    getData (router) {
      switch (router) {
        case '/shengchankanban':
          break
      }
    }
  },
  beforeMount () {
    axios.get('/static/data.json').then(res => {
      console.log(res)
      console.log(res.data.shengchankanban)
      this.contentTitleInfo = res.data.shengchankanban.basics
      this.productionData = res.data.shengchankanban.productionData
      this.materialData = res.data.shengchankanban.materialData
    })
  },
  mounted () {
  },
  components: {
    headTitle,
    contentTitle,
    footerMods
  }
}
</script>

<style>
  *{margin: 0;padding: 0;}
  img{vertical-align: top;}
  ul{list-style: none;}
  html,body{width: 100%;height: 100%;font-size: 14px;background: #00172C;}
  ul{list-style: none;}
  .production{
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  /* 主体部分开始 */
  .pro-content{
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    height: 100%;
  }

  .body-title-ul li{
    line-height: 22px;
  }
  .body-title-ul p{
    color: #AEB0B2;
  }
  .body-title-ul p span{
    color: #2EDAAA;
  }
  .pro-content-info{
    flex-grow: 1;
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    width: 96%;
    height: 100%;
    padding-top: 0.8rem;
    margin: auto;
    border: 2px solid #0A2338;
  }
  .pro-content-info .pro-content-left{
    width: 40%;
    height: 100%;
    overflow: scroll;
  }
  .pro-content-left-ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    color: #B0B1B2;
  }
  .pro-content-left-ul li:nth-child(1){
    justify-content: space-around;
  }
  .pro-content-info li{
    display: flex;
    width: 8.2rem;
    height: 3.37rem;
    margin: 0 0.4rem 0.8rem 0.2rem;
    background: #112E43;
  }
  .pro-content-info li .img{
    width: 1.6rem;
    height: 1.6rem;
    margin-top: 0.7rem;
    box-shadow:0 0 10px red;
  }
  .pro-content-info li .info-data{
    margin-top: 0.3rem;
    font-size: 0.8rem;
    text-indent: 0.4rem;
  }
  .pro-content-info li .info-data .info-data-p1{
    white-space: nowrap;
  }
  .pro-content-info li .info-data .info-data-p2{
    font-size: 1.2rem;
    text-indent: 0.4rem;
    color: #fff;
  }
  .pro-content-info li:nth-child(1){
    line-height: 3.32rem;
    text-align: center;
  }
  .pro-content-info .pro-content-right{
    overflow: scroll;
    width: 60%;
    height: 100%;
  }
  .pro-content-info .pro-content-right .pro-content-right-ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: space-around;
    color: #B0B1B2;
  }
  .pro-content-info .pro-content-right .pro-content-right-ul li:nth-child(1){
    justify-content: space-around;
  }
  .pro-content-info .pro-content-right .pro-content-right-ul li{
    margin-left: 0.3rem;
  }
</style>
