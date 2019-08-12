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
        for (var i = 0; i < res.data.data.length; i++) {
          if (res.data.data[i].type === "banner") {
            banners.push(res.data.data[i]);
          }
        }
        that.setData({
          banners: banners
        });
        console.log(that.data.banners);
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
  showmap: function() {

  },
  /**
   * latitude 纬度 （-90~90）必填
   * longitude 经度 （-180~180）必填
   * scale 缩放比列 默认为28 选填
   * 
   */
  openLocation: function (latitude) {

  }


})