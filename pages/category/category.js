// pages/category/category.js
const AV = require('../../libs/av-weapp-min.js');
const Product = require('../../models/product.js');
Page({
  data: {
    products: []
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
   
    let query = new AV.Query(Product);
    query.find().then(res => {
      this.setData({ products: res });
      wx.setStorageSync('Products', res);
    })
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