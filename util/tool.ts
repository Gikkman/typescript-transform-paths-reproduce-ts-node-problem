export type TYPE = {
    msg: "Hello"
}

export function PRINTER(t: TYPE) {
    console.log(t.msg)
}

export function isType(t: TYPE) {
    return true;
}