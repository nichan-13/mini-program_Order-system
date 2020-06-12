const app = getApp()
const fetch = app.fetch

Page({
  data: {
    comment: ''
  },

  onLoad: function (options) {
    var id = options.order_id
    wx.showLoading({
      title: '努力加载中...',
    })
    fetch('food/order', {
      id,
    }).then(data => {
      this.setData(data)
      wx.hideLoading()
    }, () => {
      this.onLoad(options)
    })
  },

  pay: function () {
    var id = this.data.id;
    wx.showLoading({
      title: '正在支付...',
    })
    fetch('food/order', {
      id,
      comment: this.data.comment
    }, 'POST').then(data => {
      return fetch('food/pay', {
        id
      }, 'POST')
    }).then(data => {
      wx.hideLoading()
      wx.showToast({
        title: '支付成功',
        icon: 'success',
        duration: 2000,
        success: () => {
          wx.navigateTo({
            url: '/pages/order/detail/detail?order_id=' + id,
          })
        }
      })
    }).catch(() => {
      // 支付失败
      this.pay()
    })
  },

  comment: function (e) {
    this.data.comment = e.detail.value;
  }
})