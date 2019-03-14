const view = {
  name: 'Joe',
  surname: 'Doe',
};

const view2 = {
  musketeers: ['Athos', 'Aramis', 'Porthos', "D'Artagnan"],
};

const view3 = {
  name: 'Tater',
  bold: () => function (text, render) {
    return `<b>${render(text)}</b>`;
  },
};

$(document).ready(() => {
  // Mustache START
  const template = $('#template').html();
  Mustache.parse(template); // optional, speeds up future uses
  const output = Mustache.render(template, view);
  $('#content').append(output);

  const template2 = $('#template2').html();
  Mustache.parse(template2); // optional, speeds up future uses
  const output2 = Mustache.render(template2, view2);
  $('#content').append(output2);

  const template3 = $('#template3').html();
  Mustache.parse(template3); // optional, speeds up future uses
  const output3 = Mustache.render(template3, view3);
  $('#content').append(output3);

  // Mustache END

  // jQuery LOAD start
  $('div[data-includeHTML]').each(function () {
    $(this).load($(this).attr('data-includeHTML'));
  });
  // jQuery LOAD end

  // MomentJS start
  const a = moment.utc([2019, 2, 14, 8]);
  console.log(a.fromNow());

  console.log(moment.parseZone('2016-05-03T22:15:01+09:00').local().format()); // "2016-05-03T15:15:01-05:00"

  const pocetakKursa = moment([2018, 9, 12]);
  const krajKursa = moment([2019, 3, 14]);

  console.log(pocetakKursa.fromNow());
  console.log(krajKursa.fromNow());
  console.log(pocetakKursa.to(krajKursa));
  // MomentJS end
});
