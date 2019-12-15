$(document).ready(function () {

$("#button").click(function () {
$('#title').addClass('hide');
});

$('#remove').click(function () {
$('#title').removeClass('red');
})

setTimeout(function () {
$('#title').addClass('red');
}, 2000);

})