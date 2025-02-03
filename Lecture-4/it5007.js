function newsfetch()
{   var newsitems = ["N1", "N2", "N3", "N4"];
    var tbl = document.getElementById("newstable");
    for (i=0;i<newsitems.length; i++)
    {
        tr = tbl.insertRow();
        td = tr.insertCell();
        td.appendChild(document.createTextNode(newsitems[i]));
    }
}