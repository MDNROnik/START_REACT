
let readList = [];
let wishList = [];
export function addToReadList(id) {
    const exist = readList.find((item) => item.id === id);

    if (exist) {
        return "Already Exist";
        // alert("Already Exist");
    } else {
        const newReadList = [...readList, { id }];
        readList = newReadList;
        return "Added to Read List";
        alert("Added to Read List");
    }
}

export function addToWishList(id) {
    const exist = wishList.find((item) => item.id === id);

    if (exist) {
        return "Already Exist";
        // alert("Already Exist");
    } else {
        const newWishList = [...wishList, { id }];
        wishList = newWishList;
        return "Added to Wish List";
        // alert("Added to Wish List");
    }
}

export function getData(){
    return {readList, wishList};
};


