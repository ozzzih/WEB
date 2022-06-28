
    function show() {
        var str = "";

        str = str + "성명 : " + form1.txt_name.value + "<br>";
        str = str + "E-mail : " + form1.txt_mail.value + "<br>";
        str = str + "생년월일 : " + form1.txt_year.value + "년";
        str = str + form1.sel_mon.value + "월" + form1.txt_day.value + "일" + "<br>";
        str = str + "성별 : " + form1.r_gender.value + "<br>";
        str = str + "기차 : " + form1.txt_content.value;

        document.write(str);
    }
