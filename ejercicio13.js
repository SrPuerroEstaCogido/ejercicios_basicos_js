const names = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function nameFinder(nameList,name) {
    if(nameList.indexOf(name) !== -1) {
        console.log(true, nameList.indexOf(name));
    }else {
        console.log(false);
    }
  }

  nameFinder(names, "Logan")