Page({
    data: {
        imgUrls: [
            "../images/iqiyi.png",
            "../images/vr.png",
            "../images/wx.png"
        ],
        swiperIndex: 0
    },
    onLoad: function() {

    },
    onChangeTap: function(e) {
        this.setData({
            swiperIndex:e.detail.current,
        })
    }
})