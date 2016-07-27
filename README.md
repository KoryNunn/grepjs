# grepjs

I don't know how to use regexs in grep so i did it in js

## Usage

Use it like regex.exec or string.replace:

```
cat somefile.txt | grepjs (foo) --flags/-f i --replace/-r abc$1def
```