

  grains.forEach(function (item) {
    var $ul = $('ul');
    var $li = $('<li>');
    var $img = $('<img>');
    var $p = $('<p>');

    $ul.append($li);
    $li.html(item.name);
    $img.attr('src', 'images/' + item.img);
    $li.append($img);

  });
//output lis in the ul

