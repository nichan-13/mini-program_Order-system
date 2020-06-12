//app.js
App({
  fetch: require('utils/fetch.js'),
  onLaunch: function () {
    wx.showLoading({
      title: '登录中...',
      mask: true
    })
    this.fetch('user/setting').then( data => {
      if (data.isLogin) {
        // 已登录
        this.onUserInfoReady();
        // console.log('通过保存的cookie登陆成功')
      } else {
        // 未登录
        this.login({
          success: () => {
            // 登陆成功
            this.onUserInfoReady();
            // wx.hideLoading()
            // console.log('登陆成功')
          },
          fail: () => {
            // 登录失败，说明服务器异常，已经弹出模态框，这里用来重试
            this.onLaunch()
          }
        })
      }
    },() => {
      this.onLaunch()
    })
    
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
    this.globalData = {}
  },

  login: function(options) {
    wx.login({
      success: res => {
        // 获得 res.data
        this.fetch('user/login', {
          js_code: res.code
        }).then(data => {
          // 判断是否成功
          if (data && data.isLogin) {
            // 登录成功
            options.success()
          } else {
            // 登录失败
            options.fail()
          }
        }, () => {
          // 登录失败，服务器异常
          options.fail()
        })
      }
    })
  },

  userInfoReady: false,
  onUserInfoReady: function() {
    wx.hideLoading();
    if (this.userInfoReadyCallback) {
      this.userInfoReadyCallback();
    }
    this.userInfoReady = true
  }
})
