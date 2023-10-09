# console module 
    The console module provides us with debugging console similar with javascript web browser console mechanism.
    It exports two components

## Console class
    These include methods which can be used to write the node.js streams. Examples are below
- console.log()
- console.warn()
- console.error()

## Global console instance
    These process can be used without exclusively calling console module require("console").These can be used on to write errors and outs on processes
- process.stderr()
- process.stdout()


### console.log()
    Used to print the stdout in newline. Multiple arguments can be passed to console.log()

### console.clear()
    This method is used to clear the console. This can be used when dealing with large stdout.

### console.count()
    This method is used to maintain an internal label and output to stdout the number of times the console.count() is called with any particular label.
    Basically console.count creates a key value pair, increments and udpates the value of a particular key when it occurs

### console.countReset()
    This is a counterpart of count as this is used to decrement the value of the key by one when ever it is called.
    By default it will decrement "default" key. console.countReset() --> this will make default -= 1

### console.error()
    This method is used to print the stderr. We can pass multiple arguments where first argument is primary and remaining arguments are substitution values.

### console.warn()
    This is similar to that of error but there classifications are different warn appears to have a different color and error appears to have red color when viewed in browser.


### console.time() and console.timeEnd()
    These two go along console.time() is to start timer and console.timeEnd() is to end the timer. This is also associated with a label similar to that of console.count()