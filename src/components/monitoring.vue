<!-- 设备监控 -->
<template>
  <div class="monitor">
    <headTitle :headInfo="page"></headTitle>
    <div class="monitor-body">
      <contentTitle :contentTitleInfo="contentTitleInfo"></contentTitle>
      <div class="body-content-info" ref="scrollUl">
        <table class="scroll-table">
          <tr v-for="item in tableData" :key="item.id">
            <td>{{item.col[0].text}}</td>
            <td>{{item.col[1].text}}</td>
            <td v-if="item.col.length === 3" :style="'color:'+item.col[2].color" :key="item.id">{{item.col[2].text}}</td>
            <td v-else></td>
          </tr>
        </table>
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
      page: '设备监控',
      basics: '',
      contentTitleInfo: [],
      tableData: [],
      threeTable: [],
      footData: [
        {
          text: '设备监控',
          url: '/shebei'
        },
        {
          text: '生产监控',
          url: '/shengchan'
        },
        {
          text: '物料监控',
          url: '/wuliao'
        }
      ]
    }
  },
  methods: {
    getData (router) {
      // 在这里先虚拟一个请求吧 要不然报错了
      switch (router) {
        case '/shebei':
          console.log(this.threeTable)
          this.tableData = this.threeTable['shebei'].table.row
          break
        case '/shengchan':
          this.tableData = this.threeTable['shengchan'].table.row
          break
        case '/wuliao':
          console.log(this.threeTable)
          console.log(this.threeTable['wuliao'])
          this.tableData = this.threeTable['wuliao'].table.row
          break
      }
    }
  },
  created () {
  },
  beforeMount () {
    axios.get('/static/data.json').then(res => {
      console.log(res.data)
      this.contentTitleInfo = res.data.shebeijiankong.shebei.basics
      this.tableData = res.data.shebeijiankong.shebei.table.row
      this.threeTable = res.data.shebeijiankong
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
  table{border-collapse:collapse;}
  table th, table td{padding:0;}
  html,body{
    width: 100%;
    height: 100%;
    font-size: 14px;
    background: #00172C;
  }
  .monitor{
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  /* 头部开始 */
  /* 内容头部部分 开始 */
  .monitor-body{
    display: flex;
    flex-direction: column;
    overflow: hidden;
    flex-grow: 1;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    margin: auto;
    border-radius: 4px;
  }
  .body-title-ul li{
    flex-grow: 1;
    line-height: 22px;
  }
  .body-title-ul p{
    color: #AEB0B2;
  }
  .body-title-ul p span{
    color: #2EDAAA;
  }
  /* 内容部分 滚动ul 开始 */
  .body-content-info{
    box-sizing: border-box;
    overflow-y: scroll;
    flex-grow: 1;
    width: 96%;
    height: 100%;
    margin: auto;
    color: #BABABA;
    border: 2px solid #0D293C;
  }
  .body-content-info .scroll-table{
    width: 96%;
    border-radius: 1%;
    margin: auto;
    margin-bottom: 2rem;
  }
  .body-content-info .scroll-table tr{
    width: 100%;
    border-top: 1px solid #404F5F;
    line-height: 2.3rem;
  }
  .body-content-info .scroll-table tr:nth-child(1){
    border-top: none;
  }
  .body-content-info .scroll-table tr td{
    width: 33%;
    text-indent: 2em;
  }
  /* 底部部分 */
  .monitor-footer{
    width: 100%;
    height: 2rem;
  }
  .monitor-footer .img{
    width: 4.2rem;
    height: 2rem;
    box-shadow: 0 0 5px red;
    margin: auto;
  }
  .monitor-footer .button{
    display: flex;
    width: 13rem;
    height: 100%;
    margin: auto;
  }
  .monitor-footer .button div{
    width: 3rem;
    height: 100%;
    background: red;
  }
  .monitor-footer .button div:nth-child(2){
    background: green;
  }
  .monitor-footer .button div:nth-child(3){
    background: pink;
  }
</style>
