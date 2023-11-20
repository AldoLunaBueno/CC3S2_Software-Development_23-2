```js
def greatestNumber(array):
   for i in array:
     isIValTheGreatest = True
     for j in array:
      if j > i:
         isIValTheGreatest = False
    if isIValTheGreatest:
      return i
```
