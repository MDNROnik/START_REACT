
let readList = [];
let wishList = [];
export function addToReadList(id) {
    const exist = readList.find((item) => item.id === id);

    if (exist) {
        alert("Already Exist");
    } else {
        const newReadList = [...readList, { id }];
        readList = newReadList;
        alert("Added to Read List");
    }
}

export function addToWishList(id) {
    const exist = wishList.find((item) => item.id === id);

    if (exist) {
        alert("Already Exist");
    } else {
        const newWishList = [...wishList, { id }];
        wishList = newWishList;
        alert("Added to Wish List");
    }
}

export function getData(){
    return {readList, wishList};
};


