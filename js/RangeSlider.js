function $(id) { return document.getElementById(id); }
onload = function() {
  $('pointsone').oninput = function() { $('unoone').innerHTML = this.value; };
  $('pointsone').oninput();
  $('pointstwo').oninput = function() { $('unotwo').innerHTML = this.value; };
  $('pointstwo').oninput();
  $('pointsthree').oninput = function() { $('unothree').innerHTML = this.value; };
  $('pointsthree').oninput();
  $('pointsfour').oninput = function() { $('unofour').innerHTML = this.value; };
  $('pointsfour').oninput();
  $('pointsfive').oninput = function() { $('unofive').innerHTML = this.value; };
  $('pointsfive').oninput();
};

function countLength( text, field ) {
  document.getElementById(field).innerHTML = text.length + "/1000 ※全角1000文字以内に入力してください。";
}


