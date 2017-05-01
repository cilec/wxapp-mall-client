// pages/address/address.js
const AV = require('../../libs/av-weapp-min.js');
let currentUser = AV.User.current();
Page({
  data: {
    name: '',
    mobile: '',
    address: ''
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    let thisPage = this;
    currentUser.get('address').fetch().then(res => {
      thisPage.setData(res.attributes)
    });
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
  },
  changeAddress({detail: {value: {name, mobile, address}}}) {
    let thisPage = this;
    let query = new AV.Query('address');
    currentUser.get('address').fetch().then(res => {
      console.log(res);
      res.set({ name, mobile, address }).save().then(res => {
        console.log(res);
        thisPage.setData({
          name, mobile, address
        })
      })
    })
  }
})