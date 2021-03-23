$(function () {
    // let box = $('#circlr');
    for (let i = 1; i <= 72; i++) {
        let img = "<img data-src='picture/" + i + ".png' />"
        $('#loader').before(img);
    }
    var crl = circlr('circlr', {
        scroll: true,
        loader: 'loader'
    });
});