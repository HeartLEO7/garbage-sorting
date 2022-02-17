Page({
  goSearch: function() {
    wx.navigateTo({
      url: 'search',
    })
  },
  onBindCamera: function() {
    wx.navigateTo({
      url: 'camera/camera',
    })
  },
  // onAikefu: function() {
  //   wx.navigateTo({
  //     url: '/pages/android/qa',
  //   })
  // },
  // onShareAppMessage: function() {
  //   return {
  //     title: "智能分类垃圾",
  //     imageUrl: "https://6c61-laji-bopv4-1259505195.tcb.qcloud.la/laji.png?sign=7c8d38e435eb3104fcf5933ebff667f5&t=1561904613",
  //     path: "pages/ai/index"
  //   }
  // }
})