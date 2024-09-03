function test() {
    try {
        let a = 0 / 0
        console.log("a------", a);
        throw new Error()
    }
    catch (err) {
        // throw new Error(e)
        console.log("errasd===================", err);
    }
    console.log("aaaaaaaaaaaaaaaaaaaa------------p",);

}
try {
    test();
}
catch (err) {
    console.log("err:----", err);
}
console.log("-------testinh--------",);