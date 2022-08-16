//index.js
//获取应用实例
const app = getApp()
Page({    
  data: {
    cond: false, //判断标志：检测是否存在多个匹配信息
    searchKey: "",//监控搜索框输入信息
    keyWord1: "",//第一匹配信息
    description1: "", //信息答案2
    keyWord2: "",//第二匹配信息
    description2: "" //信息答案2
  },
  

  /**
   * 
   * 搜索功能
   */

  //监听搜索框输入的信息
  getsearch: function (e) {
    this.setData({
      searchh:e.detail.value
    })
  },
    //设置搜索规则
    search: function (e) {
      let searchKey = this.data.searchKey //监听搜索框输入的信息

      var db = wx.cloud.database() //调用数据库参考网址https://developers.weixin.qq.com/minigame/dev/wxcloud/reference-sdk-api/Cloud.database.html的捏
      db.collection('msg').where({
        keyWord: db.RegExp({//按照KeyWord模糊查询
          regexp: searchKey, //模糊搜索监听到的搜索信息
          options: 'i', //不区分大小写
        })
      }).get().then(res => { //获取查询到的信息
        //console.log(res)

  
        var total = res.data.length //总匹配信息个数
        var _collections = new Array() //声明一个数组
        //console.log(total)
        //将匹配信息存入数组
        for (var i = 0; i < total; i++) {
          _collections.push(JSON.parse(JSON.stringify(res.data[i])))
        }
        //console.log(_collections.length)
        this.setData({//显示第一匹配信息
          se: _collections[0].keyWord,
          description1: _collections[0].description
        })//显示第二匹配信息
 
      }).catch(res => {
        console.log(res)
      })
    },
  

 
  
  })
  
  
