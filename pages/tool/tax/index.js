//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    after_income: 0,
    personal_income_tax: 0,
    social_security: 0,
    housing_fund: 0
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: 'main'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
