//index.js
//获取应用实例
const testData = require('../../libs/testData');
const AV = require('../../libs/av-weapp-min.js');
const Product = require('../../models/product.js');
Page({
  data: {
    swiperUrls: testData.swiperUrls,
    productImgUrls: [],
    product: []
  },
  onLoad() {
    let that = this;
    let query = new AV.Query('Product');
    query.find().then(res => {
      // console.log('test query', res);
      let imgList = [];
      for (let i of res) {
        // console.log(i.get('imgUrls'))
        imgList = [...imgList, i.get('imgUrls')[0]];
      }
      that.setData({ productImgUrls: imgList, product: res });
    })
  }
})