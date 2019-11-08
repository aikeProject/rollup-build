define(['exports'], function (exports) { 'use strict';

    var index = 42;

    class Test {
        hh() {
            Object.assign({}, {a: 1});
        }
    }

    const a = 'ss';

    class TestHH {
        onOk() {
            console.log('hello world...');
        }
    }

    const b = Test();
    b.hh();

    var main = () => {
        console.log(`the answer is ${index}`);
    };

    exports.TestHH = TestHH;
    exports.a = a;
    exports.default = main;

    Object.defineProperty(exports, '__esModule', { value: true });

});
