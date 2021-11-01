var tab = $(".littleImage");

for (let i = 0; i < tab.length; i++) {
    tab[i].addEventListener("click", function(){
        $(".bigImage").attr("src", tab[i].src);;
    })    
}