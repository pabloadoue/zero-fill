import zeroFill from '../src/index';

describe("Top Level Properties", () => {
    test("Test 1", () => {
        expect(zeroFill(4,1)).toBe("0001");
    });

    test("Test 2", () => {
        expect(zeroFill(10,55)).toBe("0000000055");
    });

    test("Test 3", () => {
        expect(zeroFill(1,1)).toBe("1");
    });

    test("Test 4", () => {
        expect(zeroFill(4,55, ' ')).toBe('  55');
    });

    test("Test 5", () => {
        expect(zeroFill(4,500, ' ')).toBe(' 500');
    });

    test("Test 6", () => {
        expect(zeroFill(10,500, 'a')).toBe('aaaaaaa500');
    });
});