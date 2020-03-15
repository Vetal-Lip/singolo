// ========== header navbar ==================
const links = document.getElementsByClassName('list-link');
for(let i = 0; i < links.length; i++){
    
    links[i].addEventListener('click', function(){
        let current = document.getElementsByClassName('list-link--active');
        if(current.length > 0){
            current[0].className = current[0].className.replace(" list-link--active", " ");
        }
        this.className += ' list-link--active'; 
    })

}
// ======================================================
