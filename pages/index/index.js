var util = require('../../utils/util.js');
Page({

  data: {
    msg: {
      name: '',
      readNum: '',
      college: '',
      id: '',
      department: '',
      reason: '',
      time: '',
      class: '',
      img: ''
    },
    msgForm: {},
    curTime: ''
  },

  onLoad: function (options) {
    var that = this
    console.log(options);
    const form = JSON.parse(options.form);
    console.log(form);
    this.setData({
      msgForm: form,
      'msgForm.img': options.img
    })
    console.log(this.data.msgForm);

    setInterval(function () {
      that.setData({
        curTime: util.formatTime(new Date())
      });
    }, 1000);
  },


})