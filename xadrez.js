let lines = gets().split("\n");

var l = parseInt(lines[0]);
var c = parseInt(lines[1]);

//linha par coluna impar = preto (0)

if ((l % 2 == 0) && (c % 2 !== 0)){
  console.log(0);
}else{
  console.log(1);
}
