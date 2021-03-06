Component({
  // 接收父组件传递过来的数据
  properties: {
    listData: {
      type: Array,
      value: [],
    },
    dots: {
      type: Boolean,
    },
  },
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
  },
  observers: {
    listData: function (res) {
      console.log('res', res)
    },
  },
  onShow: function () {
    console.log(this.listData)
  },
})
