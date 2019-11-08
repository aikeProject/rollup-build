System.register([], function (exports) {
    'use strict';
    return {
        execute: function () {

            var index = 42;

            class Test {
                hh() {
                    Object.assign({}, {a: 1});
                }
            }

            const a = exports('a', 'ss');

            class TestHH {
                onOk() {
                    console.log('hello world...');
                }
            } exports('TestHH', TestHH);

            const b = Test();
            b.hh();

            var main = exports('default', () => {
                console.log(`the answer is ${index}`);
            });

        }
    };
});
