// pages/user/user.js
const AV = require('../../libs/av-weapp-min.js');

Page({
  data: {},
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数

    let user = AV.User.current();
    this.setData({
      avatarUrl: user.attributes.avatarUrl,
      username: user.attributes.nickName
    })
    console.log(user.attributes);
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})