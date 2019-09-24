interface LabelValue {
    (source: string, subString: string): boolean;


}

let mySearch: LabelValue;
mySearch = function(source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}

let letter:string = "hello";
