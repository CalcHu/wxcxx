Page({
    goToTax:function(){
        wx.navigateTo({
            url: '../tool/tax/index'
        })
    },
    goToLoan:function(){
        wx.navigateTo({
          url: '../tool/loan/index',
          success: function(res){
            // success
          },
          fail: function(res) {
            // fail
          },
          complete: function(res) {
            // complete
          }
        })
    }
})