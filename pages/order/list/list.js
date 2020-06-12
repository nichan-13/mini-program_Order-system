const app = getApp()
const fetch = app.fetch

Page({
  data: {
    order: {},
    is_last: true
  },
  row: 10,

  onLoad: function (options) {
    wx.showLoading({
      title: '加载中...',
    })
    this.loadData({
      last_id: 0,
      success: data => {
        this.setData({
          order: data.list
        }, () => {
          wx.hideLoading()
        })
      },
      fail: () => {
        this.onLoad()
      }
    })
  },

  onShow: function () {
    if (this.enableRefresh) {
      this.onLoad()
      // 刷新订单后页面滚动至顶部
      wx.pageScrollTo({
        scrollTop: 0
      })
    } else {
      this.enableRefresh = true
    }
  },
  // 是否启用自动刷新
  enableRefresh: false,

  // 上拉刷新
  onPullDownRefresh: function() {
    wx.showLoading({
      title: '加载中...'
    })
    this.loadData({
      last_id: 0,
      success: data => {
        this.setData({
          order: data.list
        }, () => {
          wx.hideLoading()
          wx.stopPullDownRefresh()
        })
      }
    })
  },

  // 下拉触底
  onReachBottom: function() {
    // 下拉到底不再加载数据
    if(this.data.is_las){
      return
    }
    this.loadData({
      last_id: this.last_id,
      success: data => {
        var order = this.data.order
        data.list.forEach(item => {
          order.push(item)
        })
        this.setData({
          order,
        })
      },
      fail: () => {
        this.onReachBottom()
      }
    })
  },

  loadData: function (options) {
    wx.showNavigationBarLoading()
    fetch('food/orderlist', {
      last_id: options.last_id,
      row: this.row
    }).then(data => {
      this.last_id = data.last_id
      // 判断是否到底
      this.setData({ 
        is_last: data.list.length < this.row 
      })
      wx.hideNavigationBarLoading()
      options.success(data)
    }, () => {
      options.fail()
    })
  },

  detail: function (e) {
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/order/detail/detail?order_id=' + id,
    })
  },

  start: function () {
    wx.navigateTo({
      url: '/pages/list/list'
    })
  }
})