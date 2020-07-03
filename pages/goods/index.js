// pages/goods/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    value: '',
    active: 0,
    // 列表数据
    listData: [
      {
        id: 1,
        imgUrl:
          'https://img14.360buyimg.com/n1/jfs/t3682/362/1363475238/559844/ab37eb62/58229915N5796455e.jpg',
        title: '春夏亲肤棉四件套床单款全棉芦荟棉11',
        price: 11,
        payment: 111,
      },
      {
        id: 2,
        imgUrl:
          'https://img14.360buyimg.com/n1/jfs/t3682/362/1363475238/559844/ab37eb62/58229915N5796455e.jpg',
        title: '春夏亲肤棉四件套床单款全棉芦荟棉11',
        price: 11,
        payment: 111,
      },
      {
        id: 3,
        imgUrl:
          'https://img14.360buyimg.com/n1/jfs/t3682/362/1363475238/559844/ab37eb62/58229915N5796455e.jpg',
        title: '春夏亲肤棉四件套床单款全棉芦荟棉11',
        price: 11,
        payment: 111,
      },
      {
        id: 4,
        imgUrl:
          'https://img14.360buyimg.com/n1/jfs/t3682/362/1363475238/559844/ab37eb62/58229915N5796455e.jpg',
        title: '春夏亲肤棉四件套床单款全棉芦荟棉11',
        price: 11,
        payment: 111,
      },
      {
        id: 5,
        imgUrl:
          'https://img14.360buyimg.com/n1/jfs/t3682/362/1363475238/559844/ab37eb62/58229915N5796455e.jpg',
        title: '春夏亲肤棉四件套床单款全棉芦荟棉11',
        price: 22,
        payment: 222,
      },
      {
        id: 6,
        imgUrl:
          'https://img14.360buyimg.com/n1/jfs/t3682/362/1363475238/559844/ab37eb62/58229915N5796455e.jpg',
        title: '春夏亲肤棉四件套床单款全棉芦荟棉11',
        price: 33,
        payment: 333,
      },
      {
        id: 7,
        imgUrl:
          'https://img14.360buyimg.com/n1/jfs/t3682/362/1363475238/559844/ab37eb62/58229915N5796455e.jpg',
        title: '春夏亲肤棉四件套床单款全棉芦荟棉11',
        price: 44,
        payment: 444,
      },
    ],
    tabChildIndex: 0,
    // 价格排序标识
    priceSort: 0,
  },
  onChange(e) {
    this.setData({
      value: e.detail,
    })
  },
  onSearch() {
    Toast('搜索' + this.data.value)
  },
  onClick() {
    Toast('搜索' + this.data.value)
  },
  // 点击tab标签
  onTabsClick(event) {
    wx.showToast({
      title: `点击标签 ${event.detail.name}`,
      icon: 'none',
    })
  },
  // 点击筛选
  onTabChild(event) {
    const id = event.target.dataset.id
    if (id == 3) {
      this.data.priceSort++
      if (this.data.priceSort == 2) {
        this.setData({ priceSort: 0 })
      }
      this.setData({ priceSort: this.data.priceSort++ })
    }
    this.setData({ tabChildIndex: id })
  },
  // 点击产品图片
  onItemImgClick(e) {
    wx.navigateTo({
      url: `/pages/goodsDetail/goodsDetail?id=${e.detail.id}`,
    })
  },
  // 点击产品上的购物车
  onItemCartClick(e) {
    wx.navigateTo({ url: '/pages/my/address/address' })
    // wx.showToast({
    //   title: `点击产品购物车id为d：${e.detail.id}`, //提示的内容,
    //   icon: 'none', //图标,
    // })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
})
