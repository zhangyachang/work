<template>
  <div class="circle-progress">
    <canvas ref="whatCanvas" class="canvas" width="200" height="200"></canvas>
  </div>
</template>
<script>
export default {
  props: ['whatCanvas'],
  data () {
    return {}
  },
  methods: {
  },
  mounted () {
    console.log(this.whatCanvas)
    var that = this
    function inte (percent) {
      var canvas = that.$refs['whatCanvas']
      var ctx = canvas.getContext('2d')
      console.log(that)

      ctx.lineWidth = 10
      ctx.strokeStyle = '#2EDAAA'
      var angle = 0
      var timer
      (function draw () {
        timer = requestAnimationFrame(draw)
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        // 百分比圆环
        ctx.beginPath()
        ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2 - ctx.lineWidth / 2, 0, angle * Math.PI / 180, false)
        angle = angle + 3 // 速度
        var percentAge = parseInt((angle / 360) * 100)
        if (angle > (percent / 100 * 360)) {
          percentAge = percent
          window.cancelAnimationFrame(timer)
        }
        ctx.stroke()
        ctx.closePath()
        ctx.save()
        ctx.beginPath()
        ctx.rotate(90 * Math.PI / 180)
        ctx.font = '2rem Arial'
        ctx.fillStyle = '#fff'
        var text1 = '数据信息'
        var text2 = percentAge + '%'
        ctx.textAlign = 'center'
        ctx.fillText(text1, canvas.width / 2, -120)
        ctx.fillStyle = '#2EDAAA'
        ctx.font = '3rem Arial'
        ctx.fillText(text2, canvas.width / 2, -70)
        ctx.closePath()
        ctx.restore()
      })()
    }
    inte(60.5)
  }
}
</script>
<style>
</style>
