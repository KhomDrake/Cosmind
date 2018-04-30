let div, h1, a, b, p, h3;

function setup(){
noCanvas();
  for (var i = 0; i < data.projects.length; i++) {
     createTextInformation(data.projects[i].title, data.projects[i].URL, data.projects[i].description, data.projects[i].atualizado);
  }
}

function createTextInformation(title, url, description, atualizado){
  b = select('#projects');
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
