// pages/chat/chat.js
let app = getApp();
const Realtime = require('../../libs/realtime.weapp.min.js')
Page({
  data: {},
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    app.realtime.createIMClient('Tom').then(function (tom) {
      // 创建与Jerry之间的对话
      console.log(tom);
      return tom.createConversation({
        members: ['Jerry'],
        name: 'Tom & Jerry',
      });
    }).then(function (conversation) {
      // 发送消息
      console.log('conversation', conversation)
      return conversation.send(new Realtime.TextMessage('耗子，起床！'));
    }).then(function (message) {
      console.log('Tom & Jerry', '发送成功！');
    }).catch(console.error);
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