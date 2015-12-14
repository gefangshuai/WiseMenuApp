new Vue({
	el: '#app',
	data: {
		foods: [{
			name: '菜品1'
		}, {
			name: '菜品二'
		}, {
			name: '菜品三'
		}],
		drinks: [{
			name: '酒水一'
		}, {
			name: '酒水二'
		}, {
			name: '酒水三'
		}]
	},
	methods: {
		foodTypes: function() {
			console.log("ddd");
			var btnArray = [{
				title: "新品上架",
				style: "destructive"
			}, {
				title: "精品推荐",
				style: "destructive"
			}, {
				title: "香辣一品",
				style: "destructive"
			}];
			plus.nativeUI.actionSheet({
				title: "选择分类",
				cancel: "取消",
				buttons: btnArray
			}, function(e) {
				var index = e.index;
				var text = "你刚点击了\"";
				switch (index) {
					case 0:
						text += "取消";
						break;
					case 1:
						text += "拍照或录像";
						break;
					case 2:
						text += "选取现有的";
						break;
				}
			});
		},
		drinksTypes: function() {
			var btnArray = [{
				title: "新品上架",
				style: "destructive"
			}, {
				title: "精品推荐",
				style: "destructive"
			}, {
				title: "香辣一品",
				style: "destructive"
			}];
			plus.nativeUI.actionSheet({
				title: "选择分类",
				cancel: "取消",
				buttons: btnArray
			}, function(e) {
				var index = e.index;
				var text = "你刚点击了\"";
				switch (index) {
					case 0:
						text += "取消";
						break;
					case 1:
						text += "拍照或录像";
						break;
					case 2:
						text += "选取现有的";
						break;
				}
			});
		},
		more: function(model) {
			var btnArray = [{
				title: "分享"
			}];
			plus.nativeUI.actionSheet({
				title: model.name,
				cancel: "取消",
				cancleStyle: "destructive",
				buttons: btnArray
			}, function(e) {
				var index = e.index;
				var text = "你刚点击了\"";
				switch (index) {
					case 0:
						text += "取消";
						break;
					case 1:
						text += "拍照或录像";
						break;
					case 2:
						text += "选取现有的";
						break;
				}
			});
		}
	}
})