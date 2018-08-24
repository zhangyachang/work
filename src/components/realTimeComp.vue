<!-- 实时统计 -->
<template>
  <div class="realTime">
    <headTitle :headInfo="page"></headTitle>
    <div class="real-content">
      <contentTitle :contentTitleInfo="contentTitleInfo"></contentTitle>
      <div class="content-data">
        <div class="content-data-left">
          <ul>
            <li class="gradual">生产报表</li>
            <li>质量报表</li>
            <li>设备报表</li>
            <li>物料报表</li>
          </ul>
        </div>
        <div class="content-data-right">
          <reportTop></reportTop>
          <reportBotton></reportBotton>
        </div>
      </div>
    </div>
    <footerMods :footInfo="footData"></footerMods>
  </div>
</template>
<script>
import headTitle from './mods/header'
import contentTitle from './mods/contentTitle'
import footerMods from './mods/footer'
import reportTop from './mods/ReportTop'
import reportBotton from './mods/reportBottom'
import axios from 'axios'
export default {
  props: [],
  data () {
    return {
      page: '实时统计',
      contentTitleInfo: [],
      footData: [
        {
          text: '实时统计',
          url: '/shishitonji'
        },
        {
          text: '生产看板',
          url: '/shengchankanban'
        }
      ]
    }
  },
  methods: {
  },
  mounted () {
    axios.get('/static/data.json').then(res => {
      console.log(res.data)
      console.log(res.data.shishitongji.basics)
      this.contentTitleInfo = res.data.shishitongji.basics
    })
  },
  components: {
    headTitle,
    contentTitle,
    footerMods,
    reportTop,
    reportBotton
  }
}
</script>
<style>
</style>
