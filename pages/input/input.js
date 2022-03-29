Page({

  data: {
    test: '',
    submitForm: {
      name: '',
      readNum: '',
      college: '',
      id: '',
      department: '',
      reason: '',
      time: '',
      class: '',
    },
    img: '',
    // form: {},
    msg: [{
        name: 'readNum',
        label: '本页面当日访问次数：',
        value: '',
      },
      {
        name: 'name',
        label: '姓名：',
        value: '李开发',
      },
      {
        name: 'id',
        label: '学号：',
        value: '181040170',
      },
      {
        name: 'college',
        label: '学院：',
        value: '文学院（客家学院）',
      },
      {
        name: 'class',
        label: '班级：',
        value: '文学1804班',
      },
      {
        name: 'reason',
        label: '出入事由：',
        value: '因私',
      },
      {
        name: 'time',
        label: '出入时间：',
        value: '2022年00月00日 00:00至2022年00月00日 00:00',
      },
      {
        name: 'department',
        label: '审批部门：',
        value: '文学院（客家学院）',
      },
      // {
      //   name: 'img',
      //   label: '选择图片:',
      //   value: '',
      // },
    ]
  },
  submit(e) {
    const that = this
    // console.log(JSON.stringify(e.detail.value));
    const detail = JSON.stringify(e.detail.value)
    that.setData({
      'submitForm': e.detail.value
    })
    console.log(that.data.submitForm);
    const form = JSON.stringify(that.data.submitForm)
    console.log(form);
    wx.navigateTo({
      url: `/pages/index/index?form=${form}&img=${that.data.img}`,
    })
  },
  loadimg() {
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        // console.log(tempFilePaths[0]);
        that.setData({
          img: tempFilePaths[0]
        })
        // console.log(that.data.img);
      }
    })
  }

})