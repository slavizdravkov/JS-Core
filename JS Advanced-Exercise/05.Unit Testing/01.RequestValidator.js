function validateRequest(inputObj) {
    const methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

    if (!methods.includes(inputObj.method)) {
        throw new Error("Invalid request header: Invalid Method");
    }

    let uriPattern = /([a-z ]+)?\.+[a-z0-9 ]+/g;
    if (!uriPattern.test(inputObj.uri) || inputObj.uri === undefined) {
        throw new Error("Invalid request header: Invalid URI");
    }

    if (!versions.includes(inputObj.version)) {
        throw new Error("Invalid request header: Invalid Version");
    }

    let msgPattern = /^[^<>\\&'"]*$/g;
    if (!msgPattern.test(inputObj.message) || inputObj.message === undefined) {
        throw new Error("Invalid request header: Invalid Message");
    }

    return inputObj;
}

let obj = {
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
};

console.log(validateRequest(obj));

//let arr = [1, 2, 3];

//console.log(arr.includes(1));