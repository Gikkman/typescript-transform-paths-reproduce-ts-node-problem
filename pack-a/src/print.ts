import { TYPE, isType } from "@util/tool"


const t: TYPE = {
    msg: "Hello"
}

export function SAY() {
    console.log("YEAH " + isType(t))
}