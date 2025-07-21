function showSidebar() {
    const box1 = document.querySelector('.box1');
    box1.style.display = 'flex';
    setTimeout(() => {
        box1.style.maxHeight = box1.scrollHeight + 'px';
    }, 50); 
}


function hideSidebar() {
    const box1 = document.querySelector('.box1');
    box1.style.display = 'none';
}