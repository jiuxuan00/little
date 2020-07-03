// pages/goodsDetail/goodsDetail.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [
      'https://img13.360buyimg.com/babel/s590x470_jfs/t1/129085/17/2638/58120/5ec76890E61a57640/3f73269e4905df0f.jpg',
      'https://img11.360buyimg.com/pop/s590x470_jfs/t1/131910/15/71/76936/5ec88be9E345e1257/cf62d4bc7fbc8eb7.jpg',
    ],
    swiperCurrent: 0,
    // 点赞标识
    praiseFlag: false,
    // 规格
    specsShow: false,
    // 底部收藏标识
    likeFlag: false,
    // 最近访客
    visitorList: [
      { id: 1, imgUrl: 'https://img.yzcdn.cn/vant/cat.jpeg', name: 'A*范1' },
      { id: 2, imgUrl: 'https://img.yzcdn.cn/vant/cat.jpeg', name: '**' },
      { id: 3, imgUrl: 'https://img.yzcdn.cn/vant/cat.jpeg', name: '徐****' },
      { id: 4, imgUrl: 'https://img.yzcdn.cn/vant/cat.jpeg', name: 'L*K' },
      { id: 5, imgUrl: 'https://img.yzcdn.cn/vant/cat.jpeg', name: 'A*范5' },
      { id: 6, imgUrl: 'https://img.yzcdn.cn/vant/cat.jpeg', name: 'A*范6' },
      { id: 7, imgUrl: 'https://img.yzcdn.cn/vant/cat.jpeg', name: 'A*范7' },
    ],
    // 最近购买记录
    buyList: [
      {
        id: 1,
        imgUrl: 'https://img.yzcdn.cn/vant/cat.jpeg',
        name: 'A*范11',
        size: '180x200cm',
        time: '2020-0528  13:50',
      },
      {
        id: 2,
        imgUrl: 'https://img.yzcdn.cn/vant/cat.jpeg',
        name: 'A*范22',
        size: '180x200cm',
        time: '2020-0528  13:50',
      },
      {
        id: 3,
        imgUrl: 'https://img.yzcdn.cn/vant/cat.jpeg',
        name: 'A*范33',
        size: '180x200cm',
        time: '2020-0528  13:50',
      },
      {
        id: 4,
        imgUrl: 'https://img.yzcdn.cn/vant/cat.jpeg',
        name: 'A*范44',
        size: '180x200cm',
        time: '2020-0528  13:50',
      },
    ],
    // 商品评价
    commentList: [
      {
        id: 1,
        imgUrl: 'https://img.yzcdn.cn/vant/cat.jpeg',
        name: '尚***秀',
        desc:
          '质量好性价比高质量好性价比高质量好性价比高质量好性价比高 质量好性价比高质量好性价比高质量好性价比高质量好性价比',
        thumbs: [],
      },
      {
        id: 2,
        imgUrl: 'https://img.yzcdn.cn/vant/cat.jpeg',
        name: '尚***秀22',
        desc:
          '质量好性价比高质量好性价比高质量好性价比高质量好性价比高 质量好性价比高质量好性价比高质量好性价比高质量好性价比',
        thumbs: [],
      },
      {
        id: 3,
        imgUrl: 'https://img.yzcdn.cn/vant/cat.jpeg',
        name: '尚***秀33',
        desc:
          '质量好性价比高质量好性价比高质量好性价比高质量好性价比高 质量好性价比高质量好性价比高质量好性价比高质量好性价比',
        thumbs: [
          'https://img10.360buyimg.com/n7/jfs/t1/109699/1/11744/378551/5e8bf623E527474e5/44786351c0dd0214.jpg',
          'https://img12.360buyimg.com/n7/jfs/t1/108395/25/18797/429425/5ec4fdc3E9e278bad/70a1e816a87847bc.jpg',
          'https://img11.360buyimg.com/n7/jfs/t1/124853/26/2346/680505/5ec4fe2fE5d635ca2/39fefe92fd99515e.jpg',
          'https://img13.360buyimg.com/n7/jfs/t1/121574/4/3478/461372/5ed1d004Ef234a97b/9742ed5f889be5c6.jpg',
        ],
      },
    ],
    // 更多推荐数据
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
  // 点击左上角返回
  onClickLeft() {
    wx.showToast({ title: '点击返回', icon: 'none' })
  },
  // 点击了右上角收藏图标
  onTabCollection() {
    wx.showToast({ title: '点击收藏', icon: 'none' })
  },
  // 点击了右上角分享图标
  onTabShare() {
    wx.showToast({ title: '点击分享', icon: 'none' })
  },
  // 预览图片
  previewImage: function (e) {
    const { index, src } = e.target.dataset
    wx.previewImage({
      current: src, // 当前显示图片的http链接
      urls: this.data.commentList[index]['thumbs'], // 需要预览的图片http链接列表
    })
  },
  // 点赞
  tapPraise(e) {
    // e.currentTarget.dataset.type 0：点击了已点赞图片  1：点击了未点赞图片
    const type = e.currentTarget.dataset.type == 0 ? false : true
    this.setData({ praiseFlag: type })
  },
  // 底部收藏事件
  tapLike(e) {
    // e.currentTarget.dataset.type 0：未收藏  1：已收藏
    const type = e.currentTarget.dataset.type == 0 ? false : true
    this.setData({ likeFlag: type })
  },
  // 点击规格
  tapSpecs() {
    this.setData({ specsShow: true })
  },
  // 关闭规格弹出层
  tapSpecsClose() {
    this.setData({ specsShow: false })
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
