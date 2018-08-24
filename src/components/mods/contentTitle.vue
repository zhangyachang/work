<template>
  <div class="mods-content-title">
    <ul class="mods-content-title-ul">
      <li v-for="item in contentTitleInfo" :data-url="item.url" :key="item.id">
        {{item.key}}
        <span>{{item.vlue}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ['contentTitleInfo'],
  methods: {
  }
}
</script>
<style>
  .mods-content-title {
    width: 96%;
    height: 3.57142857rem;
    margin: 0 auto;
    background: #01293E;
  }
  .mods-content-title-ul {
    display: flex;
    flex-wrap: wrap;
  }
  .mods-content-title-ul li {
    display: flex;
    width: 33%;
    line-height: 1.78571429rem;
    font-size: 0.85714286rem;
    text-indent: 2em;
    white-space: nowrap;
    color: #BABABA;
  }
  .mods-content-title-ul li span {
    color: #2EDAAA;
    text-indent: 1em;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
</style>
