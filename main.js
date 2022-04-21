// Ajax_get flask_api叩く 
$('#submit').on('click', function(){
  $.ajax({
    data:{
      first:$('#first').val(),
      second:$('#second').val()
    },

    type: "GET",
    url: "http://127.0.0.1:888/", //ローカルサーバーIP
    
    success: function(msg){
      console.log(msg);
      $('#view').html(msg);
    },
    error: function(msg){
      console.log('error')
    }
  })
})

//save
$('#save').on('click', function(){
  let key = localStorage.length;
  let val = $('#view').html();
  localStorage.setItem(key,val);

  let html = '<tr><th>'+key+'</th><td>'+val+'</td></tr>';
  $('#list').append(html);
});


//ページ読み込み：保存データ取得表示
for(let i=0; i<localStorage.length; i++){
  let key   = localStorage.key(i);
  let val = localStorage.getItem(key);
  const html = '<tr><th>'+key+'</th><td>'+val+'</td></tr>';
  $("#list").append(html);
}

//clear 
$("#clear").on("click",function(){
  let No = localStorage.length
  let Key = No -1 
  localStorage.removeItem(Key);
  $("tr:last").remove();
});