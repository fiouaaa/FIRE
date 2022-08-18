// app.js
App({
  onLaunch() {
    // 加载字体

wx.loadFontFace({
  global: true,
  family: 'cursive',
  source: 'url(https://code.z01.com/font/ZoomlaMimeng-A057.ttf")',

  success(res){
    console.log("loadFontFaceSuccess",res)
  },
  fail: function (res) {
    console.log("loadFontFaceFail",res)
  },
  complete: function (res) {
    console.log("loadFontFaceComplete",res)
  }
})

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

