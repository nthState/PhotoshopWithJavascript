var window = new Window('dialog', 'My Window');

var button = window.add('button', undefined, 'My Button', {name:'ok'});
button.visible = false;

window.show();