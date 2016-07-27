#!/usr/bin/env node

var stdin = process.openStdin(),
    parseArgs = require('minimist'),
    args = parseArgs(process.argv),
    flags = args.f || args.flags || '',
    replace = args.r || args.replace || null;

var data = '';

stdin.on('data', function(chunk) {
    data += chunk;
});

stdin.on('end', function() {
    var regex = new RegExp(process.argv[2], 'g' + flags);

    if(replace != null){
        console.log(data.replace(regex, replace.replace(/\\n/g, '\n')));
        return;
    }

    var result;

    while(result = regex.exec(data)){
        if(result[1] !== undefined){
            console.log(result.slice(1).join(''));
        }else{
            console.log(result[0]);
        }
    }
});