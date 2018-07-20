var window = new Window('dialog', 'My Window');

var button = window.add('button', undefined, 'My Button', {name:'myButton'});

var foundButton = window.children['myButton'];
alert(foundButton);

window.show();