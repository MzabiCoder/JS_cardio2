const obj = {
    a: {
        b: {
            c: 1
        }
    }
}

const clone = Object.assign({
    a: {
        b: {
            c: 9
        }
    }
}, obj)

console.log(clone)