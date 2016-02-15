// by iwuly
(function($, window, undefined) {

	var ui = {
		$search_text: $('#search-text'),
		$search_keywords: $('#search-keywords'),
		$ui_pager: $('#ui-pager'),
		$btn_prev: $('#btn-prev'),
		$btn_next: $('#btn-next'),
		$banner_item: $('#banner-wrap li'),
		$tab_list: $('#tab-list')
	};

	//轮播组件
	var swiper_plugin = {
			curIndex: 0,
			nlength: ui.$banner_item.length,
			time: 3000,
			init: function() {
				this.view();
				this.listen();
			},
			view: function() {
				var self = this;
			},
			listen: function() {
				var self = this;
				ui.$btn_prev.on('click', function() {
					self.fPrev();
				});
				ui.$btn_next.on('click', function() {
					self.fNext();
				});
				ui.$ui_pager.on('click', 'li', function() {
					self.curIndex = $(this).index();
					self.fToggleActiveByIndex(self.curIndex);
				});
			},
			fPrev: function() { //轮播向前按钮
				var self = this;
				if (0 == self.curIndex) {
					self.curIndex = self.nlength - 1;
				} else {
					self.curIndex -= 1;
				}
				self.fToggleActiveByIndex(self.curIndex);
			},
			fNext: function() { //轮播向后按钮
				var self = this;
				if (self.nlength - 1 == self.curIndex) {
					self.curIndex = 0;
				} else {
					self.curIndex += 1;
				}
				self.fToggleActiveByIndex(self.curIndex);
			},
			fToggleActiveByIndex: function(index) {
				var self = this;
				ui.$banner_item.fadeOut().removeClass('slide-active').eq(index).fadeIn().addClass('slide-active');
				ui.$ui_pager.find('li').removeClass('active').eq(index).addClass('active');
			}
		}
		//初始化轮播插件
	swiper_plugin.init();

	ui.$search_text.focus(function() {
		$(this).closest('form').toggleClass('search-form-active');
		ui.$search_keywords.fadeOut();
	}).blur(function() {
		$(this).closest('form').toggleClass('search-form-active');
		ui.$search_keywords.fadeIn();
	});

})(jQuery, window);