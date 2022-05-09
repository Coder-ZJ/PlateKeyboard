App({
	onLaunch() {
		this.getSystemInfo();
	},
	getSystemInfo() {
		var that = this;
		wx.getSystemInfo({
			success(res) {
				const {
					safeArea,
					screenHeight,
				} = res;
				const {
					bottom
				} = safeArea;
				that.globalData.bottomSafeArea = screenHeight - bottom;
			},
		})
	},
	globalData: {
		bottomSafeArea: 0, //底部安全区域距离
	}
})