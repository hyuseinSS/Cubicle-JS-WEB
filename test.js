let theArray = [{
    id: 5,
    name: "Peter"
}, {
    id: 10,
    name: "Peter"
}, {
    id: 25,
    name: "Peter"
}]

const toDelete = theArray.find(x => x.id == 25)

const index = theArray.findIndex(x => toDelete.id == x.id)
console.log(index);
