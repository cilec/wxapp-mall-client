// pages/modelmessage/modelmessage.js
const AV = require('../../libs/av-weapp-min.js');
let User = AV.User.current();
Page({
  data: {},
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    console.log(User);
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
  submit(e) {
    //  e.detail.value
    console.log(e)
    let ACCESS_TOKEN;
    AV.Cloud.run('getAccessToken').then(res => {
      console.log(res);
      ACCESS_TOKEN = JSON.parse(res).access_token;
      wx.request({
        url: `https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token=${ACCESS_TOKEN}`,
        data: {
          "touser": "oT0_60IsOu-kSHk3htGpNnJaOBwI",
          "template_id": "kOKCjGj1kebQjtN14xe82rHdIDD11DYmtJH-Do6P0fU",
          "page": "pages/index/index",
          "form_id": e.detail.formId,
          "data": {
            "keyword1": {
              "value": e.detail.value.key1,
              "color": "#173177"
            },
            "keyword2": {
              "value": e.detail.value.key2,
              "color": "#173177"
            },
            "keyword3": {
              "value": e.detail.value.key3,
              "color": "#173177"
            },
        
          },
          "emphasis_keyword": "keyword1.DATA"
        },
        method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        // header: {}, // 设置请求的 header
        success: function (res) {
          // success
          console.log(res)
        },
        fail: function (res) {
          // fail
          console.log(res)
        },
        complete: function (res) {
          // complete
        }
      })
    })

    console.log(e)
  }
})