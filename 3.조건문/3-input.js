const repl = require('repl');

repl.start({
    prompt: "<입력 때 앞에 출력할 문자열>",
    eval: (command, context, filename, callback) = > {
        //입력(command)을 받았을 때 처리를 수행한다.
        let number = Number(command);
        
        if (isNaN(number)) {
            console.log("숫자가 아닙니다.");
        } else {
            console.log("숫자 입니다.");
        }
    
        //처리 완료
        callback();
    }
});