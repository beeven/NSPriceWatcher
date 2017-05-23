var should = require("should");
var EShop = require("../eshop")

describe("EShop Tests",function(){
    var eshop = new EShop();

    describe("listAmericas",function(){
        it("should return a promise that resolves to a json", () => {
            var actual = eshop.listAmericas();
            actual.should.be.a.Promise();
            return actual.should.be.finally.has.properties(["filter","games"]);
        })    
    });
});