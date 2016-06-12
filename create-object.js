function Voiture(a, b){
  this.a =a;
  this.b =b;
  this.c = test;

  function test(){
    console.log(this.a + " - " + this.b);
  }
}
// with constructor

//Not Voiture v like in JAVA!
var v = new Voiture('a', 'b');
// call method
v.c();

//create with object.Create
var voi = Object.create(Voiture);
voi.c();


