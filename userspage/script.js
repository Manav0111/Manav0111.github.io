const users = ["Manav"];
let count=1;

const memberDiv = document.querySelector('.memberDiv');
const addIcon = document.querySelector('.addIcon');

// const userIcons = () => {
//     users.reverse();
//     users.map((curElem) => {
//         memberDiv.insertAdjacentHTML('afterbegin', `
//         <button  id="btn" class="btn"><span>${curElem}</span></button>
//         `);
//     })
// };

addIcon.addEventListener('click', () => {
    if(count===5)
    {
        alert("you cannot have users more than 5");
        
    }
    if(count!==5)
    { 
    let userName = prompt('please enter your name');

    if(userName != null && !users.includes(userName)){
        users.push(userName);
        // console.log(users);
        memberDiv.insertAdjacentHTML('afterbegin', `
        <button class="btn"  onclick="location.href='../moviepage/index.html'"><span>${userName}</span></button>
        `);
        count++;
    }else{
        alert('username already exist');
    }
}
})



// let buttons=document.querySelector(".btn");
// buttons.addEventListener('click',()=>{
//     alert("h0000000000000");
// })



// const hii=()=>{
//     // alert("hiiiiiiiiiii");
    
// }
