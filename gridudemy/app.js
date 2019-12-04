let tab = ["apple", "bandage", "yodel", "make"],
    str, obj

for (let i = 0; i < tab.length; i++) {
    str += tab[i]
}

let tab2 = str.split('')

for (let val of tab2) {
    if (obj[val]) {
        obj[val]++
    } else {
        obj[val] = 1
    }
}