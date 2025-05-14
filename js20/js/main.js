// Errors and Error Handling
// Syntax error, Type error
/*
const makeError = () => {
    try{
        throw new customError("This is a custom error!")
    } catch(err){
        console.log(err);
    } finally {
        console.log("finally");
    }
}
makeError();

function customError(message) {
    this.message = message;
    this.name = "customError";
    this.stack = `${this.name}: ${this.message}`;
}*/

const makeError = () => {
    let i = 1;
    while (i<= 5) {
        try {
            if (i % 2 !== 0){
                throw new Error("odd number!");
            }
            console.log("even number!");
        }
        catch (e) {
            console.error(e);
        }
        finally {
            console.log("finally");
            i++;
        }
    }
}
makeError();