const wyswietlacz = document.getElementById("wyswietlacz");
function napisz(znak){
    wyswietlacz.value += znak;
}
function wyczysc(){
    wyswietlacz.value = "";
}
function policz(){
    try{
        wyswietlacz.value = eval(wyswietlacz.value);
    }
    catch(error){
        wyswietlacz.value = "Pomyłka!"
    }
}