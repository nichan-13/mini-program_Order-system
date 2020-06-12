//index.js
const app = getApp()
const fetch = app.fetch

Page({
  data: {
    ad:'/images/index/ad.png',
    category: ['/images/index/b_3.jpg','/images/index/b_4.jpg','/images/index/b_1.jpg','/images/index/b_2.jpg'],
    swiper: ['/images/index/lb1.jpg','/images/index/lb2.jpg','/images/index/lb3.jpg']
  },
  onLoad: function(options) {
    var callback = () => {
      wx.showLoading({
        title: '努力加载中...',
        mask: true
      })
      fetch('food/index').then(data => {
        wx.hideLoading()
        // this.setData({
        //   ad: data.img_ad,
        //   category: data.img_category,
        //   swiper: data.img_swiper
        // })
      }, () => {
        callback()
      })
    }
    if (app.userInfoReady) {
      callback()
    } else {
      app.userInfoReadyCallback = callback
    }
  },

  start: function() {
    wx.navigateTo({
      url: '/pages/list/list'
    })
  }
})
