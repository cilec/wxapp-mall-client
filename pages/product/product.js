// pages/product/product.js
var Zan = require('../../dist/index');
const {Query} = require('../../libs/av-weapp-min.js');
// const Product = require('../../models/product.js');
Page(Object.assign({}, Zan.Quantity, {
  data: {
    quantity: {
      quantity: 1,
      min: 1,
      max: 999
    },
    product: {},
    screenWidth: '',
    imagesSize: []
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    console.log(options);

    wx.getSystemInfo({
      success: (res) => {
        // success
        this.setData({ screenWidth: res.screenWidth })
      }
    });
    let thispage = this;
    wx.getStorage({
      key: 'Products',
      success: function (res) {
        // success
        // console.log(res);
        thispage.setData({ product: res.data.find(item => item.objectId == options.objectId) })
      },
      fail: function (res) {
        // fail
      },
      complete: function (res) {
        // complete
      }
    })
  },
  handleZanQuantityChange(e) {
    var componentId = e.componentId;
    var quantity = e.quantity;

    this.setData({
      [`${componentId}.quantity`]: quantity
    });
  },
  imageLoad: function (e) {
    console.log(e);
    let {screenWidth} = this.data;//获取屏幕宽度
    let {detail: {width, height}} = e;//获取图片真实宽高
    console.log(width, height);
    let ratio = width / screenWidth;//计算比率
    let imgHeight = ((height / ratio) / screenWidth) * 750;//宽度默认百分百所以不用计算，显示图片高度
    let {imagesSize} = this.data;
    imagesSize[e.target.dataset.index] = {  //将图片的datadata-index作为image对象的key,然后存储图片的宽高值
      height: imgHeight
    }
    this.setData({
      imagesSize
    });
  },
  addToCart() {
    let that = this;
    let product = that.data.product;
    product.quantity = that.data.quantity.quantity;
    let cart = wx.getStorageSync('Cart');
    if (cart) {
      let productIndex = cart.findIndex(i => i.objectId == that.data.product.objectId)
      if (productIndex != -1) {
        cart[productIndex].quantity += that.data.quantity.quantity;
      }
      else {
        cart = [...cart, product];
      }
    } else {
      cart = [];
      cart.push(product)
    }
    wx.setStorageSync('Cart', cart);
    wx.switchTab({
      url: '../cart/cart',
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
}))