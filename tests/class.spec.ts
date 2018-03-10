import { Class } from "../src/class";

describe("class test", () => {
    it("is know to be true", () => {
        let clazz: Class;
        clazz = new Class();
        expect(clazz.returnsTrue()).toBeTruthy();
    });
});