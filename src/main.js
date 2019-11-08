
// // src/main.js
// import foo from './foo.js';
// export default function () {
//     console.log(foo);
// }

// src/main.js
// import { version } from '../package.json';
//
// export default function () {
//     console.log('version ' + version);
// }

// src/main.js
// import answer from 'the-answer';
// import _ from 'lodash';
//
// export default function () {
//     console.log('the answer is ' + answer);
// }

// src/main.js
import answer from 'the-answer';
import foo from './foo';

export const a = 'ss';

export class TestHH {
    onOk() {
        console.log('hello world...')
    }
}

const b = foo();
b.hh();

export default () => {
    console.log(`the answer is ${answer}`);
}