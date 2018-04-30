let div, h1, a, b, p, h3;

function setup(){
noCanvas();
  for (var i = 0; i < data.scripts.length; i++) {
     createTextInformation(data.scripts[i].title, data.scripts[i].URL, data.scripts[i].description, data.scripts[i].atualizado);
  }
}

function createTextInformation(title, url, description, atualizado){
  b = select('#scripts');
  div = createDiv('');
  b.child(div);
  div.class("services");
  h1 = createElement('h1', '');
  h3 = createElement('h3', atualizado);
  a = createA(url, title);
  p = createP(description);
  h1.child(a);
  div.child(h1);
  div.child(h3);
  div.child(p);
}
