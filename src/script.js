function validate(){
    var b=document.getElementById("pid").value;
    var c=document.getElementById("pname").value;
    var d=document.getElementById("pprice").value;
    if(b!="" && c!="" && d!="")
    {
        json(b,c,d)
    }
    else{
        alert("Fill All Fields!!");
    }
}

function json(b,c,d)
{
    var a=[];
    var e={id:b,name:c,price:d};
    a.push(e);
    for(var i=0;i<=a.length;i++)
    {
        document.getElementById("check").innerHTML+="<tr><td>"+a[i].id+"</td><td>"+a[i].name+"</td><td>"+a[i].price+"</td></tr>";
    }
}