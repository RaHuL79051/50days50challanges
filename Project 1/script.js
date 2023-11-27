const Container = document.querySelectorAll('.panels');

console.log(Container);


Container.forEach((item)=>{
    item.addEventListener('click', (event)=>{
        removeClassList();
        item.classList.add('active')
    })
})

function removeClassList(){
    Container.forEach((item) => {
        item.classList.remove("active");
    });
}