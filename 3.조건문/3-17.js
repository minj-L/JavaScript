//input을 위한 prompt()

const repl = require('repl');

repl.start({
    prompt: "<입력 때 앞에 출력할 문자열>",
    eval: (command, context, filename, callback) = > {
        //입력(command)을 받았을 때 처리를 수행한다.
    
        //처리 완료
        callback();
    }
});