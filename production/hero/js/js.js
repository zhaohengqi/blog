/* 
* @Author: Marte
* @Date:   2016-10-02 00:44:01
* @Last Modified by:   Marte
* @Last Modified time: 2016-10-08 11:01:46
*/

// 导航展示隐藏
function navShowHidde() {
	var Nav = document.getElementById("nav");
	var aNav = Nav.getElementsByTagName("li");
	var oDiv = document.getElementById("sub-nav");
	for (var i = 0; i < aNav.length; i++) {
		aNav[i].onmouseover = function () {
				oDiv.style.display = "block";
		}
		aNav[i].onmouseout = function () {
				oDiv.style.display = "none";
		}
	}
	oDiv.onmouseover = function () {
		oDiv.style.display = "block";
	}
	oDiv.onmouseout = function () {
		oDiv.style.display = "none";
	}
}
navShowHidde();
// 下载烟雾效果
function Smoke() {
	var _S = document.getElementById("smoke");
	var timer = null;
	var i = 0;
	timer = setInterval(move,30);
	function move() {
		if (i <= -600) {
			i = 0;
		}
		else {
			_S.style.top = i + "px";
			i -= 0.5;
		}
	}
}
Smoke();
//轮播图效果
function promo() {
	var oPromo = document.getElementById("promo");
	var _item = oPromo.getElementsByTagName("li");
	var oTag = document.getElementById("promo-tag");
	var aTag = oTag.getElementsByTagName("li");
	var timer = null;
	// 图片定时轮播
	timer = setInterval(_scroll,4000);
	function _scroll() {
		var nowL = parseInt(oPromo.style.marginLeft);
		if (nowL <= -3120) {
			nowL = 780;
		}
		oPromo.style.marginLeft = nowL - 780 + "px";
		var sub = -parseInt(oPromo.style.marginLeft)/780;
		for (var i = 0; i < aTag.length; i++) {
			aTag[i].className = "";
		}
		aTag[sub].className = "active";
	}
	// 标签onmouseover事件
	for (var i = 0; i<aTag.length; i++) {
		aTag[i].index = i;
		aTag[i].onmouseover = function () {
			clearInterval(timer);
			oPromo.style.marginLeft = "-"+(this.index)*780+"px";
			for (var i = 0; i<aTag.length; i++) {
				aTag[i].className = "";
			}
			this.className = "active";
		}
		aTag[i].onmouseout = function () {
			timer = setInterval(_scroll,4000);
		}
	}

}
promo();
//通用选项卡方法
//aBtn: 选项卡按钮
//aMain: 选项卡内容
function Tab(aBtn,aMain) {	
	for (var i = 0; i < aBtn.length; i++) {
		aBtn[i].index = i;
		aBtn[i].onmouseover = function () {
			for (var i = 0; i < aBtn.length; i++) {
				aBtn[i].className = "";
				aMain[i].style.display = "none";
			}
			this.className = "active";
			aMain[this.index].style.display = "block";
		}
	}
}
// video选项卡
function videoTab() {
	var aDiv = document.getElementById("video-btn");
	var aBtn = aDiv.getElementsByTagName("li");
	var Box = document.getElementById("video-box");
	var aMain = Box.getElementsByTagName("ul");
	Tab(aBtn,aMain);
// 点击再显示8个
	var BtnMore = document.getElementById("btn-more");
	BtnMore.onclick = function () {
		Box.style.height = "auto";
		BtnMore.innerHTML = "<a href='javascript:;'>进入视频中心查看更多</a>";
	}
}
videoTab();
// mach选项卡
function getElementsByClassName(classname) {
	var AllEle = document.getElementsByTagName("*");
	var Arr_class = [];
	for (var i = 0; i < AllEle.length; i++) {
		var _this_class = String(AllEle[i].getAttribute("class"));
		var _class_value = _this_class.split(" ");
		for (var j = 0; j < _class_value.length; j++) {
			if (_class_value[j] == classname) {	
				Arr_class.push(AllEle[i]);
				break;
			};
		};
	};
	return Arr_class;
};
function machTab() {
	var aDiv = document.getElementById("mach-btn");
	var aBtn = aDiv.getElementsByTagName("li");
	var aMain = getElementsByClassName("mach-main");
	Tab(aBtn,aMain);
}
machTab();
//客服中心选项卡效果
function serviceTab() {
	var aDiv = document.getElementById("service-btn");
	var aBtn = aDiv.getElementsByTagName("li");
	var Box = document.getElementById("service-main");
	var aMain = Box.getElementsByTagName("div");
	Tab(aBtn,aMain);
}
serviceTab();
// 新闻公告选项卡
function newsTab() {
	var aDiv = document.getElementById("news-btn");
	var aBtn = aDiv.getElementsByTagName("li");
	var Box = document.getElementById("news-box");
	var aMain = Box.getElementsByTagName("div");
	Tab(aBtn,aMain);
}
newsTab();
// 英雄皮肤选项卡
function skinTab() {
	var aDiv = document.getElementById("skin-btn");
	var aBtn = aDiv.getElementsByTagName("li");
	var Box = document.getElementById("skin-box");
	var aMain = Box.getElementsByTagName("div");
	Tab(aBtn,aMain);
}
skinTab();
// 視頻播放器設置
function video() {
	var video = document.getElementById("video");
	var close_ = document.getElementById("video-close");
	var open1 = document.getElementById("play-video1");
	var open2 = document.getElementById("play-video2");
	video.style.width = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth)+"px";
	video.style.height = (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight)+"px";
	function open_() {
		video.style.display = "block";
	}
	close_.onclick = function () {
		video.style.display = "none";
	}
	open1.onclick = open_;
	open2.onclick = open_;
}
video();
// loading
