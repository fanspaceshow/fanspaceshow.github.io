var dlghtml = "<div id=\"dialog-html\"><style>.black{display:none;position:fixed;width:100%;height:100%;z-index:2;background:rgba(0,0,0,0.1);top:0;left:0}.dialog{display:none;position:fixed;z-index:3;width:500px;height:300px;top:40%;left:50%;margin:-150px 0 0-250px;background:#4D4D4D;padding:15px;border-radius:5px;color:#000}.dlg-title{height:30px;color:#fff}.dlg-content{background-color:#fff;opacity=100}.dlg-footer{height:40px}.dialog_submit{}.dialog_close{}.btn{color:#fff;background-color:#4D4D4D;border:1px solid#2B2B2B;margin:.5em.4em.5em 0;cursor:pointer}.btn-small{font-size:12px;height:30px;line-height:30px;padding:0 30px}.dlg-button-set{float:right;padding:5px 0px 0px 0px}<\/style><!--遮罩层--><div class=\"black\"id=\"black\"><\/div><!--弹出框盒子--><div class=\"dialog\"id=\"dialogBox\"><div class=\"dlg-title\"><span style=\"display: inline-block;\"><\/span><\/div><div class=\"dlg-content\"><iframe id=\"dlg-iframe\"name=\"dlg-iframe\"frameborder=0 height=\"100%\" width=\"100%\" scrolling=\"yes\" src=\"\"><\/iframe><\/div><div class=\"dlg-footer\"><div class=\"dlg-button-set\"><button id=\"dialog_submit\" class=\"btn btn-small dialog_submit\">确定<\/button><button id=\"dialog_close\" class=\"btn btn-small dialog_close\">关闭<\/button><\/div><\/div><\/div><\/div>";

function ShowHide(Boolean, item1, item2) {
  for (var i = 1,
      len = arguments.length; i < len; i++) {
    if (Boolean) {
      arguments[i].style.display = "block";
    } else {
      arguments[i].style.display = "none";
    }
  }
}

var Params = {};

(function() {
  if (!window.Z) {
    window.Z = {};
  }
  window.Z = {
    init: function() {

    },
    dialog: function(object, order) {
      if ("open" == order) {
        //防止对话框再次被打开，出现Bug
        if (null != $("#dialog-html")) {
          $("#dialog-html").remove();
        }
        $('body').append(dlghtml);
        //dialog html块
        Params.dlg = $("#dialog-html");
        //设置弹框标题
        $('div.dlg-title span').html(object.title);
        //设置iframe的url
        $("#dlg-iframe").attr("src", object.url);
        var doc = document;
        var Btn = doc.getElementById('JS_dialog'),
          Back = doc.getElementById('black'),
          DialogBox = doc.getElementById('dialogBox'),
          DialogClose = DialogBox.getElementsByClassName('dialog_close')[0],
          DialogSubmit = DialogBox.getElementsByClassName('dialog_submit')[0];
        /*Btn.onclick = function() {
        }*/
        DialogClose.onclick = function() {
          Params.dlg.remove();
        }
        DialogSubmit.onclick = function() {
          submitForm();
        }
        ShowHide(true, Back, DialogBox);

        //根据iframe里的页面高度与宽度计算窗口相对应高度与宽度
        var ifm = document.getElementById("dlg-iframe");
        var subWeb = window.frames["dlg-iframe"].document;
        var subWebHeight = subWeb.body.scrollHeight;
        var subWebWidth = subWeb.body.scrollWidth;
        var dlgHeight = 30 + 40 + subWebHeight;
        var dlgWidth = subWebWidth;
        $("#dialogBox").css("height", dlgHeight + "px");
        $("#dialogBox").css("width", dlgWidth + "px");
      }
      if ("close" == order) {
        Params.dlg.remove();
      }
    },
    getUUID: function(length) {
      return Math.uuid(length);
    },
    getQueryString: function(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]);
      return null;
    }
  };
})(jQuery);

function submitForm() {
  var dlg = Params.dlg;
  var formobj = $("#formobj", document.getElementById('dlg-iframe').contentWindow.document);
  if (null == formobj || !formobj) {
    $.hulla.send('formobj 对象不存在！', 'warning');
  }

  var targetUrl = formobj.attr("action");
  var data = formobj.serialize();
  $.ajax({
    type: 'post',
    url: '/docscg/' + targetUrl,
    async: false,
    cache: false,
    data: data,
    dataType: 'json',
    success: function(data) {
      dlg.remove();
      //$.hulla.send('提交成功', 'success');
      alert("提交成功!");
    },
    error: function() {
      //$.hulla.send('请求失败！', 'warning');
      alert("请求失败！");
    }
  })

}
