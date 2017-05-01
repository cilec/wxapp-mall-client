// pages/cart/cart.js
const AV = require('../../libs/av-weapp-min.js');
Page({
  data: {
    cart: [],
    totalPrice: 0
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    let totalPrice = 0;
    this.setData({ cart: wx.getStorageSync('Cart') });
    for (let i of this.data.cart) {
      totalPrice += i.price * i.quantity
    }
    this.setData({
      totalPrice
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
  },
  goCheck() {

    AV.Cloud.run('order').then(res => {
      wx.requestPayment({
        timeStamp: res.timeStamp,
        nonceStr: res.nonceStr,
        package: res.package,
        signType: 'MD5',
        paySign: res.paySign,
        success: function (res) {
          // success
        },
        fail: function (res) {
          // fail
          switch (res.errMsg) {
            case "requestPayment:fail cancel":
              res.errMsg = "支付取消";
              break;
            default:
              break;
          }
          wx.showModal({
            showCancel: false,
            title: '提示',
            content: res.errMsg
          })
        },
        complete: function (res) {
          // complete
        }
      })
    });
  }
})