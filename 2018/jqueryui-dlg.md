``` javascript
<div id="dialog">
    <iframe id="myIframe" src=""></iframe>
</div>
<button id="dialogBtn">Open Dialog</button>

And JS:
$("#dialog").dialog({
    autoOpen: false,
    modal: true,
    height: 600,
    open: function(ev, ui){
             $('#myIframe').attr('src','http://www.jQuery.com');
          }
});

$('#dialogBtn').click(function(){
    $('#dialog').dialog('open');
});

```
