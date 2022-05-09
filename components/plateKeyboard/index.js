// 车牌键盘
const app = getApp();

Component({
	properties: {
		plate: Array, //车牌
		showPlateKeyboard: Boolean
	},

	data: {
		bottomSafeArea: app.globalData.bottomSafeArea,
		keyValue1: '京沪粤津冀晋蒙辽吉黑',
		keyValue2: '苏浙皖闽赣鲁豫鄂湘',
		keyValue3: '云贵川桂琼渝藏台',
		keyValue4: '陕甘青宁新',
		keyNumber: '1234567890',
		keyLetterValue1: 'ABCDEFGHJK',
		keyLetterValue2: 'LMNPQRSTUV',
		keyLetterValue3: 'WXYZ港澳学警',
	},

	methods: {
		
		// 完成
		onClickFinish() {
			this.setData({
				showPlateKeyboard: false
			})
		},
		// 删除
		onClickDelete() {
			if (!this.data.plate.length) {
				return;
			}
			this.data.plate.pop();
			this.setData({
				plate: this.data.plate
			})
			this.triggerEvent('plateKeyboardValue', this.data.plate.join(''));
		},
		// 键盘按键
		onClickKey(e) {
			let key = e.currentTarget.dataset.key
			if (this.data.plate.length >= 8) {
				return
			}
			this.data.plate.push(key);
			this.setData({
				plate: this.data.plate
			})
			this.triggerEvent('plateKeyboardValue', this.data.plate);
		}
	}
})