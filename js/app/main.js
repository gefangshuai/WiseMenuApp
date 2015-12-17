(function() {
	var restVue = new Vue({
		el: '#mainBody',
		data: {
			host: AppConfig.host,
			connected: true,
			shops: []
		},
		methods: {
			reload: function(){
				loadRestaurants();
			}
		}
	});

	var loadRestaurants = function() {
		Vue.http.jsonp(AppConfig.host + '/api/restaurant', function(data, status, request) {
			restVue.$set('connected', true);
			restVue.$set('shops', data);
			console.log("restaurant data loaded!");
		}).error(function(data, status, request) {
			restVue.$set('connected', false);
			mui.toast('数据加载失败, 请检查网络连接')
			console.log("restaurant data loaded fail!");
		})
	}
	loadRestaurants();
})();