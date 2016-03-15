# validateForm
Custom form validation.
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		<script src="js/jquery-1.11.1.min.js" type="text/javascript" charset="utf-8"></script>
		<script src="js/common.js" type="text/javascript" charset="utf-8"></script>
	</head>
	<body>
		<form id="form1">
			<input type="text" id="txtName" value="" placeholder="请输入用户名" />
			<input type="text" id="txtPhone" value="" placeholder="请输入电话" />
			<input type="text" id="txtEmail" value="" placeholder="请输入邮箱" />
			<select id="sels">
				<option id="op1" value="0">你好！</option>
				<option id="op2" value="1">大家好！</option>
			</select>
			<a href="javascript:click()">提交</a>
		</form>
	</body>
	<script>
	$(document).ready(function(){
//			$.fn.dropDownSelected('sels','1')
//			$.fn.actBrowser()
//			dropDownSelected('sels','1')
			$.fn.pcOrPhone('http://mpay.juqinet.cn','http://www.juqinet.cn/product.aspx')
		})
		function click(){
			//$.fn.validateForm(['txtName','txtPhone'],['姓名不能为空！','电话不能为空！']);
			//$.fn.validateTel('txtPhone');
//			$.fn.validateEmail('txtEmail');
		}
		function dropDownSelected(Id, val) {
		obj = document.getElementById(Id);
		for(i=0;i<obj.length;i++){
			if(obj[i].value==val)
				obj[i].selected = true;
		}
	}
	</script>
</html>
