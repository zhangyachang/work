<template>
  <div class="mods-header">
    <div class="arrow">
      <p>{{headInfo}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['headInfo'],
  methods: {
  },
  mounted () {
    console.log(this.headInfo)
  }
}
</script>
<style>
  .mods-header {
    width: 100%;
    height: 3.03571429rem;
    background: #00172C;
  }
  .arrow {
    width: 13.03571429rem;
    height: 2.25rem;
    line-height: 2.25rem;
    text-align: center;
    font-size: 1.42857143rem;
    color: #BABABA;
    background: url("../../../static/images/head/header.jpg") no-repeat center / 13.03571429rem 2.28571429rem;
  }
</style>
