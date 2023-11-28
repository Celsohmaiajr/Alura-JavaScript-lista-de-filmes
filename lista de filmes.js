
var listaFilmes= []

listaFilmes[0] = "https://th.bing.com/th/id/R.6a46795ae8d8f5c51e38b7afc886cf0b?rik=v%2fiUSD4cIkoCnQ&riu=http%3a%2f%2fthedrawshop.com%2fwp-content%2fuploads%2f2013%2f08%2fgame-of-thrones-season-4.jpg&ehk=sLRUOVkYu7%2btYaliGF3Ux5Ol558QJwmXyjws4AOtOZI%3d&risl=&pid=ImgRaw&r=0";

listaFilmes[1] = "https://th.bing.com/th/id/OIP.CZcyxsIkRY3bWATbjQTwmAHaLG?rs=1&pid=ImgDetMain";

listaFilmes[2] = "https://th.bing.com/th/id/OIP.6erJ3FK7pUcbUS31jXNXywHaHa?rs=1&pid=ImgDetMain";

for (var i = 0; i < 3; i = i + 1) {
 document.write('<img src=' + listaFilmes[i] + '>')
}