// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
wx.loadFontFace ({
  family: 'cursive',
  source: 'url("https://www.youdoamin.com/cursive.otf")',
  success: function(){console.log('load font success')}
 
});