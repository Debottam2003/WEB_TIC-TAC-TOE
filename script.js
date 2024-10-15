let reset = document.querySelector('.but');
reset.addEventListener('click',()=>{
     window.location.reload();
});
let arr = [
    [1, 2, 3], // Top row
    [4, 5, 6], // Middle row
    [7, 8, 9], // Bottom row
    [1, 4, 7], // Left column
    [2, 5, 8], // Middle column
    [3, 6, 9], // Right column
    [1, 5, 9], // Diagonal from top-left to bottom-right
    [3, 5, 7]  // Diagonal from top-right to bottom-left
  ];
// let btn = document.querySelectorAll('.box');
// let flag = 1;
// btn.forEach((b)=>{
//     b.addEventListener('click',(event)=>{
//     if(flag === 1){
//     b.innerText = 'X';
//     b.disabled = true;
//     flag = 0;
//     }
//     else{
//       b.innerText = '0';
//       b.disabled = true;
//       flag = 1;
//     }
//     });
// });
let pc = [1,2,3,4,5,6,7,8,9];
let btn = document.querySelectorAll('.box');
btn.forEach((b)=>{
    b.addEventListener('click',(event)=>{
    b.innerText = 'X';
    b.disabled = true;
    if(pc.length != 0)
    pc = pc.filter((item) => item != b.value);
    console.log(b.value);
    console.log(pc);
    let move = Math.floor(Math.random() * pc.length);
    console.log(move);
    if(pc.length != 0){
    let position = document.querySelector('#box'+`${pc[move]}`);
    position.disabled = true;
    position.innerText = '0';
    pc = pc.filter((item) => item != pc[move]);
    }
    console.log(pc);
    });
});
