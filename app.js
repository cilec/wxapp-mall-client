//app.js

const AV = require('./libs/av-weapp-min.js');
AV.init({
  appId: 'G9Y1rpAi6FpMQKXYJ4MUkDF9-gzGzoHsz',
  appKey: 'JjIO2s02gWmnlkmM3Gpo9FQU',
});
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    AV.User.loginWithWeapp().then(user => {
      this.globalData.user = user.toJSON();
      // console.log(user)
    }).catch(console.error);
  },
  globalData: {
  
  }
})