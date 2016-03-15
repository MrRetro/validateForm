$.fn.extend({
	//--------------------------------------------------------------验证表单--------------------------------------------------------------------
	//通过id列表验证表单是否为空   arryId为id数组|arryText为输出文本数组
	validateForm: function(arryId, arryText) {
		for (var i = 0; i < arryId.length; i++) {
			if ($('#' + arryId[i] + '').val().trim() == '') {
				alert(arryText[i]);
				$('#' + arryId[i] + '').focus();
				return false;
			}
		}
	},
	//验证号码规则  id为控件的id|errTxt为错误输出的文本
	validateTel: function(id, errTxt) {
		//手机		//座机var tel = /^([0-9]{3,4}[-]?)?[0-9]{7,8}$/;
		var phone = /^1\d{10}$|^(0\d{2,3}-?|\(0\d{2,3}\))?[1-9]\d{4,7}(-\d{1,8})?$/;
		if (!phone.test($('#' + id + '').val())) {
			if (typeof(errTxt) != "undefined") {
				alert(errTxt);
			} else {
				alert("您输入的号码格式不正确！")
			}
			return false;
		}
	},
	//验证邮箱规则  id为控件的id|errTxt为错误输出的文本
	validateEmail: function(id, errText) {
		var email = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
		if (!email.test($('#' + id + '').val())) {
			if (typeof(errTxt) != "undefined") {
				alert(errTxt);
			} else {
				alert("您输入的邮箱格式不正确！")
			}
			return false;
		}
	},	
	//根据文本值 选中对应的select选中 id为控件的id|val为要选中的选项值
	dropDownSelected: function(id, val) {
		obj = document.getElementById(id);
		for(i=0;i<obj.length;i++){
			if(obj[i].value==val)
				obj[i].selected = true;
		}
	},
	//--------------------------------------------------------------验证表单--------------------------------------------------------------------
	//--------------------------------------------------------------判断浏览器------------------------------------------------------------------
	//获得浏览器信息
	getBrowserInfo:function(){
	    var agent = navigator.userAgent.toLowerCase();
	    var regStr_ie = /msie [\d.]+;/gi;
	    var regStr_ff = /firefox\/[\d.]+/gi
	    var regStr_chrome = /chrome\/[\d.]+/gi;
	    var regStr_saf = /safari\/[\d.]+/gi;
	    //IE
	    if (agent.indexOf("msie") > 0) {
	        return agent.match(regStr_ie);
	    }
	    //firefox
	    if (agent.indexOf("firefox") > 0) {
	        return agent.match(regStr_ff);
	    }
	    //Chrome
	    if (agent.indexOf("chrome") > 0) {
	        return agent.match(regStr_chrome);
	    }
	    //Safari
	    if (agent.indexOf("safari") > 0 && agent.indexOf("chrome") < 0) {
	        return agent.match(regStr_saf);
	    }
	},
	//根据ie浏览的不同做不同处理
	actBrowser:function(){
		var browser =$.fn.getBrowserInfo();
		    var verinfo = (browser + "").replace(/[^0-9.]/ig, "");//版本号
		    //判断是否ie浏览器
		    if (browser.toString().substr(0, 4) == "msie") {
		        //ie浏览器版本低于12的就提示文字
		        if (parseInt(verinfo) < 12) {
		            //$(".services_box .services .services_bottom .services_txt .three").css({ "margin-left": "0px" });
		            alert(verinfo);
		        }
		    }
	},
	//判断手机浏览或者pc浏览  phoneUrl为手机页面路径|pcUrl为pc页面路径
	pcOrPhone:function(phoneUrl,pcUrl){
        //判断如果是手机就跳转到手机页面
        var mobileAgent = new Array("iphone", "ipod", "ipad", "android", "mobile", "blackberry", "webos", "incognito", "webmate", "bada", "nokia", "lg", "ucweb", "skyfire");
        var browser = navigator.userAgent.toLowerCase();
        var isMobile = false;
        for (var i = 0; i < mobileAgent.length; i++) {
            if (browser.indexOf(mobileAgent[i]) != -1) {
                isMobile = true;
                //alert(mobileAgent[i]); 
                location.href = phoneUrl;
                break;
            } else {
                location.href = pcUrl;
                break;
            }
        }
	}
	//--------------------------------------------------------------判断浏览器------------------------------------------------------------------
})