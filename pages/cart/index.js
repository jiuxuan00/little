// pages/cart/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    editType: false,
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
  },
  // 点击编辑
  tapEdit() {
    this.setData({
      editType: !this.data.editType,
    })
  },
  // 删除商品
  onDelGoods(e){
    console.log("删除了id为：", e.target.dataset.id, "的商品");
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
