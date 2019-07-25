// $('document').ready(()=>{
//     $('h1').css('color', 'coral');
// });
// //the same
// $(()=>{
//     $('h1').css('color', 'coral');
// // });
// jQuery(()=>{
//     $('h1').css('color', 'coral');
// });
$(function ()
{   $('h1').css('color', 'coral');
    $('h1').on('click',()=>{
       $('h1').css('font-family', 'Arial');
console.log($('h1').text());
    $('h1').text('Hello Bingo!!!');
    $('h1').html('<ul><li>list item</li><li>list item</li></ul>');
    // $('h1').addClass('blue');
    // $('h1').removeClass('blue');
    $('h1').toggleClass('blue');
   $('h1>ul').append('<li>list item 3 </li>');
   });

});
