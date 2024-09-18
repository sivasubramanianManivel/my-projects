// document.getElementById('colorButton').addEventListener('click', function() {
//     const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//     document.body.style.backgroundColor = randomColor;
//     document.getElementById('colorCode').textContent = randomColor;
// });


// jquery codes
$('#colorButton').on('click', function() {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    $('body').css('background-color', randomColor);
    $('#colorCode').text(randomColor);
});
