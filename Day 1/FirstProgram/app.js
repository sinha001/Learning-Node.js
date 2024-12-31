/*
export let x = 10;
export let y = 20;

isn't a right way to export in node
*/

module.exports = {
    x:10,
    y:15,
    z:function(){
        return "calling z function";
    }
}