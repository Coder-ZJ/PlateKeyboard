Page({
    data: {
        keyValue: {
            keyValue1: '京津渝沪冀晋辽吉黑苏',
            keyValue2: '浙皖闽赣鲁豫鄂湘粤琼',
            keyValue3: '川贵云陕甘青蒙桂宁新',
            keyValue4: '藏使领警学港澳',
            keyNumber: '1234567890',
            keyLetterValue1: 'QWERTYUIOP',
            keyLetterValue2: 'ASDFGHJKL',
            keyLetterValue3: 'ZXCVBNM',
            showkKeyboardType: true, //1是省份键盘 0是数字字母键盘
        },
        inputPlate: {
            plates: [], //接收输入的内容
            plateCount: [1, 2, 3, 4, 5, 6, 7], //输入框的个数
        },
        isShowKeyboard: true, //是否显示键盘,默认显示
    },
    onLoad: function(options) {

    },
    //唤起键盘事件
    onFocusTap: function() {
        this.data.isShowKeyboard = true;
        this.setData({
            isShowKeyboard:this.data.isShowKeyboard
        })
    },
    //关闭键盘
    onCloseKeyboardTap: function() {
        this.data.isShowKeyboard = false;
        this.setData({
            isShowKeyboard: this.data.isShowKeyboard
        })  
    },
    //点击键盘事件
    onKeyboardTap: function(event) {
        var value = event.currentTarget.dataset.value;
        switch (value) {
            case 'ABC':
                this.data.keyValue.showkKeyboardType = !this.data.keyValue.showkKeyboardType;
                break;
            case 'delete':
                if (this.data.inputPlate.plates.length > 0) {
                    this.data.inputPlate.plates.pop();
                }
                //如果输入的值被删除完，显示省份键盘
                if (this.data.inputPlate.plates.length == 0) {
                    this.data.keyValue.showkKeyboardType = true;
                }
                break;
            default:
                if (this.data.inputPlate.plates.length == 8) {
                    //替换数组最后一个元素
                    this.data.inputPlate.plates.splice(7, 1, value);
                } else {
                    this.data.inputPlate.plates.push(value);
                }
        }
        console.log(this.data.inputPlate.plates);
        this.setData({
            keyValue: this.data.keyValue,
            inputPlate: this.data.inputPlate,
            isShowKeyboard: this.data.isShowKeyboard
        })
    },
    //提交事件
    onSubmitBtnTap: function() {
        //数组组装字符串
        var paltes = this.data.inputPlate.plates;
        var plate = paltes.join("");
        console.log(plate);
    }
})