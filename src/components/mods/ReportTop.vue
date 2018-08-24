<template>
  <div class="report-top">
    <div class="report-content">
      <div class="report-content-left">
        <div class="report-title">
          <ul>
            <li>
              <p>计划产量</p>
              <span>9900</span>
            </li>
            <li>
              <p>实际产量</p>
              <span>9900</span>
            </li>
          </ul>
        </div>
        <progressTopLeft></progressTopLeft>
      </div>
      <div class="report-content-right">
        <ul>
          <li v-for="item in arr" :key="item.id">
            <modscircle></modscircle>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import progressTopLeft from './progress'
import modscircle from './circle'
export default {
  props: ['reportTopInfo'],
  data () {
    return {
      arr: ['canvas1', 'vanvas2', 'canvas3']
    }
  },
  methods: {
  },
  components: {
    progressTopLeft,
    modscircle
  }
}
</script>
<style>
</style>
