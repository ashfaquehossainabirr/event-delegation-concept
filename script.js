// Event Delegation Concept

const productList = document.querySelector('.products')

productList.addEventListener('click', (e) => {
    if(e.target.tagName === "SPAN") {
        window.location.href += "/" + e.target.className
    } else if(e.target.closest("SPAN")) {
        window.location.href += "/" + e.target.closest("SPAN").className
    }
})