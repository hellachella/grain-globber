

  grains.forEach(function (item) {
    var $ul = $('ul');
    var $li = $('<li>');
    var $img = $('<img>');
    var $p = $('<p>');

    $ul.append($li);
    $li.html(item.name);

  });
//output lis in the ul

