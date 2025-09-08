function f() {
    try {
        let a = 10;
        console.log("Value of integer variable:",a);
        return;

    } catch (error) {
        console.log("This is an error block");
        console.log(p);
    }
    finally {
        console.log("What soever This finally clause will be executed ");
        //Even if there is a return statement
        //Even if control exits loop
    }
}
f();