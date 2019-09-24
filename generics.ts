function nameCreator<T>(name: T): T {
    return name;
}

let myName = nameCreator<string>('Nim');
let number = nameCreator<number>(7);