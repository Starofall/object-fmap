var test = require('tape');
var fmap = require('../index');

test('object-fmap', function (module) {

    module.plan(2);

    module.test('exports a function', function (test) {
        test.assert(typeof fmap === 'function');
        test.end();
    });

    module.test('fmap modifies an object and returns the correct one', function (test) {

        var source = {
            test: "test",
            array: ["test","test"],
            first: {
                test: "test",
                second: {
                    test: "test"
                }
            },
            dummy: "dummy"
        }

        var target = {
            test: "works",
            array: ["test","test"],
            first: {
                test: "works",
                second: {
                    test: "works"
                }
            },
            dummy: "dummy"
        }

        var modified = fmap(source,function(o){
            if(o.test){
                o.test = "works"
            }
            return o
        })

        test.assert(JSON.stringify(modified) === JSON.stringify(target));
        test.end();
    });

});