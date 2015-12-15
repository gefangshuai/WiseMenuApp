new Vue({
	el: '#app',
	data: {
		order: {
			foods: [],
			drinks: [],
			price: 0,
			count: 0
		},
		foods: [{
			id: 1,
			price: 20,
			name: '菜品1'
		}, {
			id: 2,
			price: 30,
			name: '菜品二'
		}, {
			id: 1,
			price: 20,
			name: '菜品1'
		}, {
			id: 2,
			price: 30,
			name: '菜品二'
		}, {
			id: 1,
			price: 20,
			name: '菜品1'
		}, {
			id: 2,
			price: 30,
			name: '菜品二'
		}, {
			id: 1,
			price: 20,
			name: '菜品1'
		}, {
			id: 2,
			price: 30,
			name: '菜品二'
		}, {
			id: 1,
			price: 20,
			name: '菜品1'
		}, {
			id: 2,
			price: 30,
			name: '菜品二'
		}, {
			id: 3,
			price: 40,
			name: '菜品三'
		}],
		drinks: [{
			id: 1,
			price: 50,
			name: '酒水一'
		}, {
			id: 2,
			price: 50,
			name: '酒水二'
		}, {
			id: 3,
			price: 50,
			name: '酒水三'
		}]
	},
	methods: {
		foodTypes: function() { // 点击菜品分类
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
		drinksTypes: function() { // 点击酒水分类
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
		favorite: function() { // 店铺收藏图标
			mui.toast('店铺收藏成功！');
		},
		more: function(model) { // 点击更多图标
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
		},
		addOrder: function(m, type) {
			var $this = this;
			var addFood = function(model) {
					$this.order.count += 1;
					$this.order.foods.push(model);
					$this.order.price += model.price;
				},
				addDrinks = function(model) {
					$this.order.count += 1;
					$this.order.drinks.push(model);
					$this.order.price += model.price;
				};

			if (type == 'foods') {
				addFood(m);
			}
			if (type == 'drinks') {
				addDrinks(m);
			}
		},
		removeOrder: function(m, type) {
			var $this = this;
			var removeFood = function(model) {
					$this.order.count -= 1;
					$this.order.foods.remove(model);
					$this.order.price -= model.price;
				},
				removeDrinks = function(model) {
					$this.order.count -= 1;
					$this.order.drinks.remove(model);
					$this.order.price -= model.price;
				};

			if (type == 'foods') {
				removeFood(m);
			}
			if (type == 'drinks') {
				removeDrinks(m);
			}
		}
	}
})