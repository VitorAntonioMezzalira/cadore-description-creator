function repete(itens) {
    let item = '';
  
    for (let i = 0; i < itens.length; i++) {
      if (i === itens.length - 2) {
        item += itens[i] + ' e ';
      } else if (i === itens.length - 1) {
        item += itens[i];
      } else {
        item += itens[i] + ', ';
      };
    };
  
    return item;
  }