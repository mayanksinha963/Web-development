function getText(){
    if(document.getSelection)
    {
        var text= document.getSelection().toString();
        alert(text);
    }
}