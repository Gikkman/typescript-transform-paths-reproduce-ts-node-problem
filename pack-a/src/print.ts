import { TYPE, isType } from "@util/main"


const t: TYPE = {
    msg: "Hello"
}

export function SAY() {
    console.log("YEAH " + isType(t))
}