//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
cartItem:{
  imgUrl:"https://img.yzcdn.cn/upload_files/2016/11/25/FpqPXlrMRjKwJs8VdTu3ZDJCj4j5.jpeg?imageView2/2/w/200/h/200/q/90/format/jpeg",
  price:99.99,
  num:1,
  des:'des',
  isSend:'已发货',
  name:'牛肉',
  // total:(price*num).toFixed(2)
}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
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
