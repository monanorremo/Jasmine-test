describe("Calculator", function(){
    describe("Addition tests", function(){
        instanceof("should return 42", function(){
            expect(addition(20, 22)).toBe(42);
        });
    });
});