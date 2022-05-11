Page({
    data: {
        isShowKeyboard: true, //是否显示键盘,默认显示
        plate: [],
    },
    onLoad(options) {

    },
    onPlateKeyboardValueChange(e) {
        this.setData({
            plate: e.detail,
        })
    },
    onFocusTap() {
        this.setData({
            isShowKeyboard: true
        })
    }
})