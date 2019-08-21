// pages/home/home.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    autoplay: true,
    interval: 3000,
    duration: 1000,
    banners: [],
    envir: [],
    coachs: [],
    articles: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function(options) {
    // banner
    var that = this;
    wx.request({
        url: 'https://api.it120.cc/' + app.globalData.subDomain + '/banner/list',
        success: function(res) {
          console.log(res.data.data);
          var banners = [];
          var enviros = [];
          var coachs = [];
          for (var i = 0; i < res.data.data.length; i++) {
            if (res.data.data[i].type === "banner") {
              banners.push(res.data.data[i]);
            } else if (res.data.data[i].type === "environment") {
              enviros.push(res.data.data[i]);
            } else if (res.data.data[i].type === "coach") {
              coachs.push(res.data.data[i]);
            }
          }
          that.setData({
            banners: banners,
            envir: enviros,
            coachs: coachs
          });
          // console.log(that.data.banners);
          // console.log(that.data.envir);
          // console.log(that.data.coachs);
        }
      }),
      //获取文章
      wx.request({
        url: 'https://api.it120.cc/' + app.globalData.subDomain + '/cms/news/list',
        success: function(res) {
          // console.log(res.data.data);
          var articles = [];
          for(var i=0;i<res.data.data.length-1;i++){
            articles.push(res.data.data[i])
          }
          that.setData({
            articles:articles
          });
          // console.log(that.data.articles);
        }
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    console.log(app.globalData.subDomain)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  //事件处理函数
  showMap: function() {
    this.openLocation(106.584581, 29.567858, "", "地狱健身馆")
  },
  /**
   * latitude 纬度 （-90~90）必填
   * longitude 经度 （-180~180）必填
   * scale 缩放比列 默认为28 选填
   * name 位置名 选填
   * address 地址的详细说明 选填
   * cbSuccessFun 接口调用成功的回调函数 选填
   * cbFailFun 接口调用失败的回调函数 选填
   * cbCompleteFun 接口调用结束的回调函数（调用成功、失败都会执行） 选填
   * 
   */
  openLocation: function(longitude, latitude, scale, address, name, cbSuccessFun, cbFailFun, cbCompleteFun) {
    var openObj = {};
    openObj.latitude = latitude;
    openObj.longitude = longitude;
    openObj.scale = 15;
    if (scale > 0 && scale < 29) {
      openObj.scale = scale;
    }
    if (name) {
      openObj.name = name;
    }
    if (address) {
      openObj.address = address;
    }
    openObj.success = function(res) {
      if (cbSuccessFun) {
        cbSuccessFun();
      }
    }
    openObj.fail = function(res) {
      if (cbFailFun) {
        cbFailFun();
      } else {
        console.log("openLocation fail:" + res.errMsg);
      }
    }
    openObj.complete = function(res) {
      if (cbCompleteFun) {
        cbCompleteFun();
      }
    }
    wx.openLocation(openObj);
  },
  shwoVideo:function(){
    wx.navigateTo({
      url: '/pages/video/video',
    })
  },
  showCoach:function(){
    wx.navigateTo({
      url: '/pages/coach/coach'
    })
  },
  showArticle:function(){
    wx.navigateTo({
      url: '/pages/article/article',
    })
  }
})