var a = 100;
var b = 200;

var obj = {
  a: 10,
  b: 20,
  sum: function () {
    console.log(this.a + this.b);
    var self = this;
    var print = () => {
      console.log(self.a, " ", self.b);
      console.log(self.a + self.b);
    };
    print();
  },
};

obj.sum();
