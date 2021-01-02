
$(function(){
	$.getJSON('/api/chklogin',function(res){
		if(res.code === 'err'){
			htm='<a href="/member/reg" class="zc">会员免费注册</a>';
			htm+='<a href="/member/login?back='+(location.href)+'" class="zc">登录</a>';
			$('#topmem').html(htm);
		}else{
			htm='<a href="/member/logout?back='+(location.href)+'" class="zc">退出登录</a>';
			htm+='<a href="/member/" class="zc">个人中心</a>';
			htm+='<a href="/member/" class="zc cur">'+res.msg+'</a>';
			$('#topmem').html(htm);
		}
	})
	$('.link div').click(function(){
		$(this).find('p').slideToggle();
	});
	$('.book_mid01 a:first-child').click(function(){
		$('.fix_main').show();
	});
	$('.fix_main .fix_mid img').click(function(){
		$('.fix_main').hide();
	});
	/*1号*/
	$("[d-val='A1']").css({ 'top': '111px', 'left': '55px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px','border-right':'none'});
	$("[d-val='A2']").css({ 'top': '111px', 'left': '77px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px'});
	$("[d-val='A3']").css({ 'top': '111px', 'left': '122px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px','border-right':'none'});
    $("[d-val='A5']").css({ 'top': '111px', 'left': '144px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px'});
	$("[d-val='A6']").css({ 'top': '111px', 'left': '190px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px','border-right':'none'});
	$("[d-val='A8']").css({ 'top': '111px', 'left': '210px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px'});
	$("[d-val='A9']").css({ 'top': '111px', 'left': '257px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px','border-right':'none'});
	$("[d-val='A10']").css({ 'top': '111px', 'left': '279px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px'});
	$("[d-val='A11']").css({ 'top': '111px', 'left': '324px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px','border-right':'none'});
	$("[d-val='A12']").css({ 'top': '111px', 'left': '346px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px'});
	$("[d-val='A13']").css({ 'top': '111px', 'left': '391px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px','border-right':'none'});
	$("[d-val='A15']").css({ 'top': '111px', 'left': '413px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px'});
	$("[d-val='A16']").css({ 'top': '111px', 'left': '533px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px','border-right':'none'});
	$("[d-val='A18']").css({ 'top': '111px', 'left': '555px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px'});
	$("[d-val='A19']").css({ 'top': '111px', 'left': '600px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px','border-right':'none'});
	$("[d-val='A20']").css({ 'top': '111px', 'left': '622px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px'});
	$("[d-val='A21']").css({ 'top': '111px', 'left': '746px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px','border-right':'none'});
	$("[d-val='A22']").css({ 'top': '111px', 'left': '768px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px'});
	$("[d-val='A23']").css({ 'top': '111px', 'left': '815px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px','border-right':'none'});
	$("[d-val='A25']").css({ 'top': '111px', 'left': '837px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px'});
	$("[d-val='A26']").css({ 'top': '111px', 'left': '881px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px','border-right':'none'});
	$("[d-val='A28']").css({ 'top': '111px', 'left': '903px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px'});
	
	
	$("[d-val='S101']").css({ 'top': '159px', 'left': '55px' ,'width':'45px','height':'44px','line-height':'44px','font-size':'14px'});
	$("[d-val='S102']").css({ 'top': '159px', 'left': '122px' ,'width':'45px','height':'44px','line-height':'44px','font-size':'14px'});
	$("[d-val='S103']").css({ 'top': '159px', 'left': '190px' ,'width':'45px','height':'44px','line-height':'44px','font-size':'14px'});
	$("[d-val='S105']").css({ 'top': '159px', 'left': '257px' ,'width':'45px','height':'44px','line-height':'44px','font-size':'14px'});
	$("[d-val='S106']").css({ 'top': '159px', 'left': '324px' ,'width':'45px','height':'44px','line-height':'44px','font-size':'14px'});
	$("[d-val='S108']").css({ 'top': '159px', 'left': '391px' ,'width':'45px','height':'44px','line-height':'44px','font-size':'14px'});
	$("[d-val='S109']").css({ 'top': '159px', 'left': '746px' ,'width':'45px','height':'44px','line-height':'44px','font-size':'14px'});
	$("[d-val='S110']").css({ 'top': '159px', 'left': '815px' ,'width':'45px','height':'44px','line-height':'44px','font-size':'14px'});
	$("[d-val='S111']").css({ 'top': '159px', 'left': '881px' ,'width':'45px','height':'44px','line-height':'44px','font-size':'14px'});
	$("[d-val='S112']").css({ 'top': '159px', 'left': '950px' ,'width':'45px','height':'44px','line-height':'44px','font-size':'14px'});
	$("[d-val='S113']").css({ 'top': '159px', 'left': '1014px' ,'width':'45px','height':'44px','line-height':'44px','font-size':'14px'});
	
	$("[d-val='T126']").css({ 'top': '225px', 'left': '55px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'14px'});
	$("[d-val='T128']").css({ 'top': '225px', 'left': '122px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'14px'});
	$("[d-val='T129']").css({ 'top': '225px', 'left': '190px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'14px'});
	$("[d-val='T130']").css({ 'top': '225px', 'left': '257px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'14px'});
	$("[d-val='T131']").css({ 'top': '225px', 'left': '324px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'14px'});
	$("[d-val='T132']").css({ 'top': '225px', 'left': '391px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'14px'});
	$("[d-val='T139']").css({ 'top': '225px', 'left': '746px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'14px'});
	$("[d-val='T150']").css({ 'top': '225px', 'left': '815px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'14px'});
	$("[d-val='T151']").css({ 'top': '225px', 'left': '881px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'14px'});
	$("[d-val='T152']").css({ 'top': '225px', 'left': '950px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'14px'});
	$("[d-val='T153']").css({ 'top': '225px', 'left': '1014px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'14px'});
	$("[d-val='T156']").css({ 'top': '136px', 'left': '457px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'16px'});
	$("[d-val='T155']").css({ 'top': '136px', 'left': '680px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'16px'});
	$("[d-val='T133']").css({ 'top': '225px', 'left': '457px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'16px'});
	$("[d-val='T136']").css({ 'top': '225px', 'left': '680px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'16px'});
	$("[d-val='T135']").css({ 'top': '174px', 'left': '524px' ,'width':'133px','height':'113px','line-height':'113px','font-size':'16px'});
	
	
	$("[d-val='T125']").css({ 'top': '336px', 'left': '55px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'14px'});
	$("[d-val='T123']").css({ 'top': '336px', 'left': '122px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'14px'});
	$("[d-val='T122']").css({ 'top': '336px', 'left': '190px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'14px'});
	$("[d-val='T121']").css({ 'top': '336px', 'left': '257px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'14px'});
	$("[d-val='T120']").css({ 'top': '336px', 'left': '324px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'14px'});
	$("[d-val='T119']").css({ 'top': '336px', 'left': '815px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'14px'});
	$("[d-val='T118']").css({ 'top': '336px', 'left': '881px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'14px'});
	$("[d-val='T116']").css({ 'top': '336px', 'left': '950px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'14px'});
	$("[d-val='T115']").css({ 'top': '336px', 'left': '1014px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'14px'});
	
	
	$("[d-val='T101']").css({ 'top': '425px', 'left': '55px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'14px'});
	$("[d-val='T102']").css({ 'top': '425px', 'left': '122px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'14px'});
	$("[d-val='T103']").css({ 'top': '425px', 'left': '190px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'14px'});
	$("[d-val='T105']").css({ 'top': '425px', 'left': '257px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'14px'});
	$("[d-val='T106']").css({ 'top': '425px', 'left': '324px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'14px'});
	$("[d-val='T110']").css({ 'top': '425px', 'left': '815px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'14px'});
	$("[d-val='T111']").css({ 'top': '425px', 'left': '881px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'14px'});
	$("[d-val='T112']").css({ 'top': '425px', 'left': '950px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'14px'});
	$("[d-val='T113']").css({ 'top': '425px', 'left': '1014px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'14px'});
	$("[d-val='T108']").css({ 'top': '357px', 'left': '437px' ,'width':'134px','height':'136px','line-height':'113px','font-size':'14px'});
	$("[d-val='T109']").css({ 'top': '376px', 'left': '612px' ,'width':'155px','height':'117px','line-height':'117px','font-size':'14px'});
	
	
	/*2号*/
	$("[d-val='B90']").css({ 'top': '227px', 'left': '93px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px','border-right':'none'});
	$("[d-val='B91']").css({ 'top': '227px', 'left': '115px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px'});
	$("[d-val='B92']").css({ 'top': '227px', 'left': '158px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px','border-right':'none'});
	$("[d-val='B93']").css({ 'top': '227px', 'left': '180px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px'});
	$("[d-val='B95']").css({ 'top': '227px', 'left': '222px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px','border-right':'none'});
	$("[d-val='B96']").css({ 'top': '227px', 'left': '244px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px'});
	$("[d-val='B98']").css({ 'top': '227px', 'left': '286px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px','border-right':'none'});
	$("[d-val='B99']").css({ 'top': '227px', 'left': '308px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px'});
	$("[d-val='B100']").css({ 'top': '227px', 'left': '341px' ,'width':'31px','height':'23px','line-height':'23px','font-size':'12px','border-right':'none'});
	$("[d-val='A101']").css({ 'top': '227px', 'left': '372px' ,'width':'31px','height':'23px','line-height':'23px','font-size':'12px'});
	$("[d-val='B89']").css({ 'top': '250px', 'left': '93px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px','border-right':'none','border-top':'none'});
	$("[d-val='B88']").css({ 'top': '250px', 'left': '115px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px','border-top':'none'});
	$("[d-val='B86']").css({ 'top': '250px', 'left': '158px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px','border-right':'none','border-top':'none'});
	$("[d-val='B85']").css({ 'top': '250px', 'left': '180px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px','border-top':'none'});
	$("[d-val='B83']").css({ 'top': '250px', 'left': '222px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px','border-right':'none','border-top':'none'});
	$("[d-val='B82']").css({ 'top': '250px', 'left': '244px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px','border-top':'none'});
	$("[d-val='B81']").css({ 'top': '250px', 'left': '286px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px','border-right':'none','border-top':'none'});
	$("[d-val='B80']").css({ 'top': '250px', 'left': '308px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px','border-top':'none'});
	$("[d-val='B79']").css({ 'top': '250px', 'left': '350px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px','border-right':'none','border-top':'none'});
	$("[d-val='A78']").css({ 'top': '250px', 'left': '372px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px','border-top':'none'});
	$("[d-val='B65']").css({ 'top': '273px', 'left': '93px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px','border-right':'none','border-top':'none'});
	$("[d-val='B66']").css({ 'top': '273px', 'left': '115px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px','border-top':'none'});
	$("[d-val='B68']").css({ 'top': '273px', 'left': '158px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px','border-right':'none','border-top':'none'});
	$("[d-val='B69']").css({ 'top': '273px', 'left': '180px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px','border-top':'none'});
	$("[d-val='B70']").css({ 'top': '273px', 'left': '222px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px','border-right':'none','border-top':'none'});
	$("[d-val='B71']").css({ 'top': '273px', 'left': '244px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px','border-top':'none'});
	$("[d-val='B72']").css({ 'top': '273px', 'left': '286px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px','border-right':'none','border-top':'none'});
	$("[d-val='B73']").css({ 'top': '273px', 'left': '308px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px','border-top':'none'});
	$("[d-val='B75']").css({ 'top': '273px', 'left': '350px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px','border-right':'none','border-top':'none'});
	$("[d-val='A76']").css({ 'top': '273px', 'left': '372px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px','border-top':'none'});
	$("[d-val='B63']").css({ 'top': '295px', 'left': '93px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px','border-right':'none','border-top':'none'});
	$("[d-val='B62']").css({ 'top': '295px', 'left': '115px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px','border-top':'none'});
	$("[d-val='B61']").css({ 'top': '295px', 'left': '158px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px','border-right':'none','border-top':'none'});
	$("[d-val='B60']").css({ 'top': '295px', 'left': '180px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px','border-top':'none'});
	$("[d-val='B59']").css({ 'top': '295px', 'left': '222px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px','border-right':'none','border-top':'none'});
	$("[d-val='B58']").css({ 'top': '295px', 'left': '244px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px','border-top':'none'});
	$("[d-val='B56']").css({ 'top': '295px', 'left': '286px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px','border-right':'none','border-top':'none'});
	$("[d-val='B55']").css({ 'top': '295px', 'left': '308px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px','border-top':'none'});
	$("[d-val='B53']").css({ 'top': '295px', 'left': '350px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px','border-right':'none','border-top':'none'});
	$("[d-val='A52']").css({ 'top': '295px', 'left': '372px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px','border-top':'none'});
	$("[d-val='A29']").css({ 'top': '318px', 'left': '93px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px','border-right':'none','border-top':'none'});
	$("[d-val='A30']").css({ 'top': '318px', 'left': '115px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px','border-top':'none'});
	$("[d-val='A31']").css({ 'top': '318px', 'left': '158px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px','border-right':'none','border-top':'none'});
	$("[d-val='A32']").css({ 'top': '318px', 'left': '180px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px','border-top':'none'});
	$("[d-val='A33']").css({ 'top': '318px', 'left': '222px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px','border-right':'none','border-top':'none'});
	$("[d-val='A35']").css({ 'top': '318px', 'left': '244px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px','border-top':'none'});
	$("[d-val='A36']").css({ 'top': '318px', 'left': '286px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px','border-right':'none','border-top':'none'});
	$("[d-val='A39']").css({ 'top': '318px', 'left': '308px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px','border-top':'none'});
	$("[d-val='A50']").css({ 'top': '318px', 'left': '350px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px','border-right':'none','border-top':'none'});
	$("[d-val='A51']").css({ 'top': '318px', 'left': '372px' ,'width':'22px','height':'23px','line-height':'23px','font-size':'12px','border-top':'none'});
	
	$("[d-val='T253']").css({ 'top': '250px', 'left': '542px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'14px'});
	$("[d-val='T252']").css({ 'top': '250px', 'left': '627px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'14px'});
	$("[d-val='T250']").css({ 'top': '335px', 'left': '542px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'14px'});
	$("[d-val='T251']").css({ 'top': '335px', 'left': '627px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'14px'});
	$("[d-val='T239']").css({ 'top': '445px', 'left': '93px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'14px'});
	$("[d-val='T236']").css({ 'top': '445px', 'left': '158px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'14px'});
	$("[d-val='T235']").css({ 'top': '445px', 'left': '222px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'14px'});
	$("[d-val='T233']").css({ 'top': '445px', 'left': '286px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'14px'});
	$("[d-val='T232']").css({ 'top': '445px', 'left': '350px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'14px'});
	$("[d-val='T231']").css({ 'top': '445px', 'left': '415px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'14px'});
	$("[d-val='T230']").css({ 'top': '445px', 'left': '480px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'14px'});
	$("[d-val='T229']").css({ 'top': '445px', 'left': '542px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'14px'});
	$("[d-val='T228']").css({ 'top': '445px', 'left': '627px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'14px'});
	$("[d-val='T226']").css({ 'top': '445px', 'left': '693px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'14px'});
	$("[d-val='T225']").css({ 'top': '445px', 'left': '757px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'14px'});
	$("[d-val='T223']").css({ 'top': '445px', 'left': '819px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'14px'});
	$("[d-val='T222']").css({ 'top': '445px', 'left': '885px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'14px'});
	$("[d-val='T221']").css({ 'top': '445px', 'left': '949px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'14px'});
	$("[d-val='T220']").css({ 'top': '445px', 'left': '1011px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'14px'});
	$("[d-val='T201']").css({ 'top': '529px', 'left': '93px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'14px'});
	$("[d-val='T202']").css({ 'top': '529px', 'left': '158px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'14px'});
	$("[d-val='T203']").css({ 'top': '529px', 'left': '222px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'14px'});
	$("[d-val='T205']").css({ 'top': '529px', 'left': '286px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'14px'});
	$("[d-val='T206']").css({ 'top': '529px', 'left': '350px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'14px'});
	$("[d-val='T208']").css({ 'top': '529px', 'left': '415px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'14px'});
	$("[d-val='T209']").css({ 'top': '529px', 'left': '480px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'14px'});
	$("[d-val='T210']").css({ 'top': '529px', 'left': '542px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'14px'});
	$("[d-val='T211']").css({ 'top': '529px', 'left': '627px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'14px'});
	$("[d-val='T212']").css({ 'top': '529px', 'left': '693px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'14px'});
	$("[d-val='T213']").css({ 'top': '529px', 'left': '757px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'14px'});
	$("[d-val='T215']").css({ 'top': '529px', 'left': '819px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'14px'});
	$("[d-val='T216']").css({ 'top': '529px', 'left': '885px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'14px'});
	$("[d-val='T218']").css({ 'top': '529px', 'left': '949px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'14px'});
	$("[d-val='T219']").css({ 'top': '529px', 'left': '1011px' ,'width':'45px','height':'67px','line-height':'67px','font-size':'14px'});
	
	$("[d-val='S223']").css({ 'top': '231px', 'left': '415px' ,'width':'45px','height':'44px','line-height':'44px','font-size':'14px'});
	$("[d-val='S225']").css({ 'top': '231px', 'left': '480px' ,'width':'45px','height':'44px','line-height':'44px','font-size':'14px'});
	$("[d-val='S222']").css({ 'top': '295px', 'left': '415px' ,'width':'45px','height':'44px','line-height':'44px','font-size':'14px'});
	$("[d-val='S221']").css({ 'top': '295px', 'left': '480px' ,'width':'45px','height':'44px','line-height':'44px','font-size':'14px'});
	$("[d-val='S226']").css({ 'top': '231px', 'left': '693px' ,'width':'45px','height':'44px','line-height':'44px','font-size':'14px'});
	$("[d-val='S228']").css({ 'top': '231px', 'left': '746px' ,'width':'45px','height':'44px','line-height':'44px','font-size':'14px'});
	$("[d-val='S229']").css({ 'top': '231px', 'left': '798px' ,'width':'45px','height':'44px','line-height':'44px','font-size':'14px'});
	$("[d-val='S220']").css({ 'top': '295px', 'left': '693px' ,'width':'45px','height':'44px','line-height':'44px','font-size':'14px'});
	$("[d-val='S219']").css({ 'top': '295px', 'left': '746px' ,'width':'45px','height':'44px','line-height':'44px','font-size':'14px'});
	$("[d-val='S218']").css({ 'top': '295px', 'left': '798px' ,'width':'45px','height':'44px','line-height':'44px','font-size':'14px'});
	$("[d-val='S201']").css({ 'top': '358px', 'left': '93px' ,'width':'45px','height':'44px','line-height':'44px','font-size':'14px'});
	$("[d-val='S202']").css({ 'top': '358px', 'left': '157px' ,'width':'45px','height':'44px','line-height':'44px','font-size':'14px'});
	$("[d-val='S203']").css({ 'top': '358px', 'left': '222px' ,'width':'45px','height':'44px','line-height':'44px','font-size':'14px'});
	$("[d-val='S205']").css({ 'top': '358px', 'left': '287px' ,'width':'45px','height':'44px','line-height':'44px','font-size':'14px'});
	$("[d-val='S206']").css({ 'top': '358px', 'left': '350px' ,'width':'45px','height':'44px','line-height':'44px','font-size':'14px'});
	$("[d-val='S208']").css({ 'top': '358px', 'left': '414px' ,'width':'45px','height':'44px','line-height':'44px','font-size':'14px'});
	$("[d-val='S209']").css({ 'top': '358px', 'left': '481px' ,'width':'45px','height':'44px','line-height':'44px','font-size':'14px'});
	$("[d-val='S210']").css({ 'top': '358px', 'left': '693px' ,'width':'45px','height':'44px','line-height':'44px','font-size':'14px'});
	$("[d-val='S211']").css({ 'top': '358px', 'left': '755px' ,'width':'45px','height':'44px','line-height':'44px','font-size':'14px'});
	$("[d-val='S212']").css({ 'top': '358px', 'left': '818px' ,'width':'45px','height':'44px','line-height':'44px','font-size':'14px'});
	$("[d-val='S213']").css({ 'top': '358px', 'left': '879px' ,'width':'45px','height':'44px','line-height':'44px','font-size':'14px'});
	$("[d-val='S215']").css({ 'top': '358px', 'left': '941px' ,'width':'45px','height':'44px','line-height':'44px','font-size':'14px'});
	$("[d-val='S216']").css({ 'top': '358px', 'left': '1003px' ,'width':'45px','height':'44px','line-height':'44px','font-size':'14px'});
	
	
	
	$("[d-val='A132']").css({ 'top': '231px', 'left': '855px' ,'width':'30px','height':'23px','line-height':'23px','font-size':'12px','border-right':'none'});
	$("[d-val='B133']").css({ 'top': '231px', 'left': '885px' ,'width':'30px','height':'23px','line-height':'23px','font-size':'12px'});
	$("[d-val='B135']").css({ 'top': '231px', 'left': '928px' ,'width':'30px','height':'23px','line-height':'23px','font-size':'12px','border-right':'none'});
	$("[d-val='B136']").css({ 'top': '231px', 'left': '958px' ,'width':'30px','height':'23px','line-height':'23px','font-size':'12px'});
	$("[d-val='B138']").css({ 'top': '231px', 'left': '1002px' ,'width':'30px','height':'23px','line-height':'23px','font-size':'12px','border-right':'none'});
	$("[d-val='B139']").css({ 'top': '231px', 'left': '1032px' ,'width':'30px','height':'23px','line-height':'23px','font-size':'12px'});
	$("[d-val='A131']").css({ 'top': '254px', 'left': '855px' ,'width':'30px','height':'23px','line-height':'23px','font-size':'12px','border-right':'none','border-top':'none'});
	$("[d-val='B130']").css({ 'top': '254px', 'left': '885px' ,'width':'30px','height':'23px','line-height':'23px','font-size':'12px','border-top':'none'});
	$("[d-val='B129']").css({ 'top': '254px', 'left': '928px' ,'width':'30px','height':'23px','line-height':'23px','font-size':'12px','border-right':'none','border-top':'none'});
	$("[d-val='B128']").css({ 'top': '254px', 'left': '958px' ,'width':'30px','height':'23px','line-height':'23px','font-size':'12px','border-top':'none'});
	$("[d-val='B126']").css({ 'top': '254px', 'left': '1002px' ,'width':'30px','height':'23px','line-height':'23px','font-size':'12px','border-right':'none','border-top':'none'});
	$("[d-val='B125']").css({ 'top': '254px', 'left': '1032px' ,'width':'30px','height':'23px','line-height':'23px','font-size':'12px','border-top':'none'});
	$("[d-val='A118']").css({ 'top': '277px', 'left': '855px' ,'width':'30px','height':'23px','line-height':'23px','font-size':'12px','border-right':'none','border-top':'none'});
	$("[d-val='B119']").css({ 'top': '277px', 'left': '885px' ,'width':'30px','height':'23px','line-height':'23px','font-size':'12px','border-top':'none'});
	$("[d-val='B120']").css({ 'top': '277px', 'left': '928px' ,'width':'30px','height':'23px','line-height':'23px','font-size':'12px','border-right':'none','border-top':'none'});
	$("[d-val='B121']").css({ 'top': '277px', 'left': '958px' ,'width':'30px','height':'23px','line-height':'23px','font-size':'12px','border-top':'none'});
	$("[d-val='B122']").css({ 'top': '277px', 'left': '1002px' ,'width':'30px','height':'23px','line-height':'23px','font-size':'12px','border-right':'none','border-top':'none'});
	$("[d-val='B123']").css({ 'top': '277px', 'left': '1032px' ,'width':'30px','height':'23px','line-height':'23px','font-size':'12px','border-top':'none'});
	$("[d-val='A116']").css({ 'top': '300px', 'left': '855px' ,'width':'30px','height':'23px','line-height':'23px','font-size':'12px','border-right':'none','border-top':'none'});
	$("[d-val='B115']").css({ 'top': '300px', 'left': '885px' ,'width':'30px','height':'23px','line-height':'23px','font-size':'12px','border-top':'none'});
	$("[d-val='B113']").css({ 'top': '300px', 'left': '928px' ,'width':'30px','height':'23px','line-height':'23px','font-size':'12px','border-right':'none','border-top':'none'});
	$("[d-val='B112']").css({ 'top': '300px', 'left': '958px' ,'width':'30px','height':'23px','line-height':'23px','font-size':'12px','border-top':'none'});
	$("[d-val='B111']").css({ 'top': '300px', 'left': '1002px' ,'width':'30px','height':'23px','line-height':'23px','font-size':'12px','border-right':'none','border-top':'none'});
	$("[d-val='B110']").css({ 'top': '300px', 'left': '1032px' ,'width':'30px','height':'23px','line-height':'23px','font-size':'12px','border-top':'none'});
	$("[d-val='A102']").css({ 'top': '323px', 'left': '855px' ,'width':'30px','height':'23px','line-height':'23px','font-size':'12px','border-right':'none','border-top':'none'});
	$("[d-val='A103']").css({ 'top': '323px', 'left': '885px' ,'width':'30px','height':'23px','line-height':'23px','font-size':'12px','border-top':'none'});
	$("[d-val='A105']").css({ 'top': '323px', 'left': '928px' ,'width':'30px','height':'23px','line-height':'23px','font-size':'12px','border-right':'none','border-top':'none'});
	$("[d-val='A106']").css({ 'top': '323px', 'left': '958px' ,'width':'30px','height':'23px','line-height':'23px','font-size':'12px','border-top':'none'});
	$("[d-val='A108']").css({ 'top': '323px', 'left': '1002px' ,'width':'30px','height':'23px','line-height':'23px','font-size':'12px','border-right':'none','border-top':'none'});
	$("[d-val='A109']").css({ 'top': '323px', 'left': '1032px' ,'width':'30px','height':'23px','line-height':'23px','font-size':'12px','border-top':'none'});
	
	/*4号*/
	$("[d-val='S425']").css({ 'top': '253px', 'right': '314px' ,'width':'44px','height':'47px','line-height':'47px','font-size':'14px'});
	$("[d-val='S416']").css({ 'top': '253px', 'right': '246px' ,'width':'44px','height':'47px','line-height':'47px','font-size':'14px'});
	$("[d-val='S415']").css({ 'top': '253px', 'right': '178px' ,'width':'44px','height':'47px','line-height':'47px','font-size':'14px'});
	$("[d-val='S401']").css({ 'top': '253px', 'right': '108px' ,'width':'44px','height':'47px','line-height':'47px','font-size':'14px'});
	$("[d-val='S410']").css({ 'top': '253px', 'right': '108px' ,'width':'44px','height':'47px','line-height':'47px','font-size':'14px'});
	$("[d-val='S423']").css({ 'top': '323px', 'right': '314px' ,'width':'44px','height':'47px','line-height':'47px','font-size':'14px'});
	$("[d-val='S418']").css({ 'top': '323px', 'right': '246px' ,'width':'44px','height':'47px','line-height':'47px','font-size':'14px'});
	$("[d-val='S413']").css({ 'top': '323px', 'right': '178px' ,'width':'44px','height':'47px','line-height':'47px','font-size':'14px'});
	$("[d-val='S402']").css({ 'top': '323px', 'right': '108px' ,'width':'44px','height':'47px','line-height':'47px','font-size':'14px'});
	$("[d-val='S422']").css({ 'top': '393px', 'right': '314px' ,'width':'44px','height':'47px','line-height':'47px','font-size':'14px'});
	$("[d-val='S419']").css({ 'top': '393px', 'right': '246px' ,'width':'44px','height':'47px','line-height':'47px','font-size':'14px'});
	$("[d-val='S412']").css({ 'top': '393px', 'right': '178px' ,'width':'44px','height':'47px','line-height':'47px','font-size':'14px'});
	$("[d-val='S403']").css({ 'top': '393px', 'right': '108px' ,'width':'44px','height':'47px','line-height':'47px','font-size':'14px'});
	$("[d-val='S405']").css({ 'top': '486px', 'right': '108px' ,'width':'44px','height':'47px','line-height':'47px','font-size':'14px'});
	$("[d-val='S406']").css({ 'top': '555px', 'right': '108px' ,'width':'44px','height':'47px','line-height':'47px','font-size':'14px'});
	$("[d-val='S408']").css({ 'top': '624px', 'right': '108px' ,'width':'44px','height':'47px','line-height':'47px','font-size':'14px'});
	$("[d-val='S411']").css({ 'top': '486px', 'right': '178px' ,'width':'44px','height':'47px','line-height':'47px','font-size':'14px'});
	$("[d-val='S410']").css({ 'top': '555px', 'right': '178px' ,'width':'44px','height':'47px','line-height':'47px','font-size':'14px'});
	$("[d-val='S409']").css({ 'top': '624px', 'right': '178px' ,'width':'44px','height':'47px','line-height':'47px','font-size':'14px'});
	$("[d-val='T401']").css({ 'top': '486px', 'right': '246px' ,'width':'44px','height':'68px','line-height':'47px','font-size':'14px'});
	$("[d-val='T402']").css({ 'top': '601px', 'right': '246px' ,'width':'44px','height':'68px','line-height':'47px','font-size':'14px'});
	$("[d-val='T403']").css({ 'top': '486px', 'right': '314px' ,'width':'44px','height':'68px','line-height':'47px','font-size':'14px'});
	$("[d-val='S421']").css({ 'top': '579px', 'right': '314px' ,'width':'44px','height':'47px','line-height':'47px','font-size':'14px'});
	$("[d-val='S420']").css({ 'top': '648px', 'right': '314px' ,'width':'44px','height':'47px','line-height':'47px','font-size':'14px'});
	
	
	
	
	$(".oneB_right .oneB_rit a:nth-child(2n),.oneF_right ul li:nth-child(2n),.footer_en p:last-child,.sd_bot .sd_bocon:nth-child(2n),.yh_mid ul li:nth-child(2n),.yh_leftC div a:nth-child(2n),.yy_rightop a:nth-child(2n),.kj_bot li:nth-child(2n),.js_rightC div a:nth-child(2n),.zz_top ul li:nth-child(2n),.cp_leftAR ol li:last-child,.zkmd_leftB li:nth-child(2n),.coG ul li:nth-child(2n),.lo_footer p:last-child,.slideTxtBox .bd .bd_con dl:nth-child(2n)").css("float", "right");
    $(".oneE_left .oneE_let:last-child").css("margin-top", "30px");
	$(".rightB_top a:last-child").css("margin-top", "10px");
	$(".picMarquee-top .bd ul li:last-child,.js_left01 ul li:last-child").css({"border":"0px","padding-bottom":"0px"});
    $(".oneA_right a:last-child").css("margin-top", "32px");
	$(".slideBox .bd div a:nth-child(7n),.sdbot_left a:nth-child(3n),.yx_bot li:nth-child(4n),.paint_bot li:nth-child(3n),.hz_midt a:nth-child(4n),.modB ul li:last-child").css("margin-right", "0px");
	$(".js_bot ul li:last-child,.yh_mid ul li p a:nth-child(3n),.yh_bot div a:nth-child(3n),.yh_leftC ul li:nth-child(3n),.yy_bot div a:nth-child(3n),.zz_slide .bd li:nth-child(4n),.modA_right ul li:last-child,.aboutC div a:nth-child(6n),.co_HT a:nth-child(6n),.loE div a:nth-child(3n),.loF .lo_FD a:nth-child(4n),.subC ul li:nth-child(3n),.sub_DR a:nth-child(2n),.hzC ul li:last-child,.infA ul li:nth-child(4n),.qyA ol li:nth-child(4n),.conB dl:last-child").css({"margin-right":"0"});
	$(".intop .intop_right a:nth-child(4):after,.intop .intop_right a:last-child:after,.cp_leftAL a:last-child").css("display","none");
	$(".yh_bot ul li:first-child").css("border-left","none");
	$(".coC div a:last-child").css("margin-top","20px;");
	
	
	$(window).scroll(function() {
		ST = $(window).scrollTop();
		w_height = $(window).height();

		if (ST > 500)
		{
			$('.backTop').fadeIn(500);
			$('.backTop').click(function(){
				$('body,html').stop().animate({'scrollTop' : 0},500);
			});
		}
		else{
			$('.backTop').fadeOut(500);
		}
		if (ST > 152)
		{
		  $('.nav').addClass('fixnav');
		}
		else{
			$('.nav').removeClass('fixnav');
			
			}
		
	});
});


function trim(str) { return str.replace(/(^\s*)|(\s*$)/g, ""); }
var vidcard = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
var vtel = /^\w{0}$|^\d{3}-\d{8}$|^\d{4}-\d{8}$|^\d{4}-\d{7}$|^[1][34578]\d{9}$/;
var vmobile = /^[1][34578]\d{9}$/;
var vemail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
var vpostcode = /^\d{6}$/;
var date = /^(\d{4})\-(\d{2})\-(\d{2})$/;
var vnumber = /^\+?[1-9][0-9]*$/;