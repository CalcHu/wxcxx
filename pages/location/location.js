//index.js
//获取应用实例
var app = getApp()
Page({
  data: {},
  onLoad: function () {
      var that = this
          
      wx.getLocation({
        type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
        success: function(res){
          // success
          console.log("纬度："+res.latitude+"  经度："+res.longitude)
          that.setData({"locate_info":{"latitude":res.latitude,"longitude":res.longitude}})
          wx.openLocation({
            latitude: res.latitude, // 纬度，范围为-90~90，负数表示南纬
            longitude: res.longitude, // 经度，范围为-180~180，负数表示西经
            scale: 28, // 缩放比例
            name: 'name', // 位置名
            address: 'address', // 地址的详细说明
            success: function(res){
              // success
            },
            fail: function() {
              // fail
            },
            complete: function() {
              // complete
            }
          })
        },
        fail: function() {
          console.log("fail")
        },
        complete: function() {
          // complete
        }
      })
  }
})