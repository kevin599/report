// pages/home/home.js
Page({
  data: {
    form:{}
  },
  onLoad: function (options) {
    this.data.form = JSON.parse(options.form)
    // console.log(this.data.form);
  },

  backToIndex(){
    const form = JSON.stringify(this.data.form)
    wx.navigateTo({
      url: `../index/index?form=${form}`,
    })
  }
})