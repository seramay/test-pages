$(function(){
  //
  //ajax_faked.html
  // inputAreaの文字を送信した際のHTML要素の生成
  //
  function buildHTML(text) {
    var html = `<p>${text}</p>`
    return html
  }
  
  const inputArea = $(".input_area");
  const textOut = $('.text_out');
  const output = '非同期出力もどき: '
  textOut.text(output);
  // inputエリアに入力される(keyup)度に下段の欄に表示される
  inputArea.on("keyup", function() {
    var input = inputArea.val();
    if (input !== ""){
      textOut.text(output + input);
    } else {
      textOut.text(`${output}何も入力されていません`);
    }
  });
  
  $(".send_btn").on("click", function() {
    // スコープってなかったっけ？ 上のイベントの変数が使える...
    input = inputArea.val();
    if (input !== "") {
      // inputAreaの文字を送信したら右画面にテキスト挿入
      var html = buildHTML(input);
      $('.right_box').append(html);
      // 送信されたらinputの中は空にして、同時に非同期出力欄も空にする
      inputArea.val('');
      textOut.text(output);
    } else {
      // inputエリアが空なら警告表示
      alert('No Contents Error');
    }
  });
});