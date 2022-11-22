// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('checks if 123-456-78901 is valid', () => {
    expect(functions.isPhoneNumber('(123) 456-78901')).toBe(true);
} );

test('checks if 123 is valid', () => {
    expect(functions.isPhoneNumber('123')).toBe(false);
} );

test('checks if 987-654-32109 is valid', () => {
    expect(functions.isPhoneNumber('(987) 654-32109')).toBe(true);
} );

test('checks if 911 is valid', () => {
    expect(functions.isPhoneNumber('911')).toBe(false);
} );

test('check is abc@def.com is a valid email', () => {
    expect(functions.isEmail('abc@def.com')).toBe(true);
});

test('check is abcdef.com is a valid email', () => {
    expect(functions.isEmail('abcdef.com')).toBe(false);
});

test('check is sas007@ucsd.edu is a valid email', () => {
    expect(functions.isEmail('sas007@ucsd.edu')).toBe(true);
});

test('check is sas007edu is a valid email', () => {
    expect(functions.isEmail('sas007edu')).toBe(false);
});

test('check is Abcdef is a strong password', () => {
    expect(functions.isStrongPassword('Donkey2')).toBe(true);
});

test('check is Abc is a strong password', () => {
    expect(functions.isStrongPassword('Abc')).toBe(false);
});

test('check is Abcdef123 is a strong password', () => {
    expect(functions.isStrongPassword('Donkey32')).toBe(true);
});

test('check is Abcdef#$ is a strong password', () => {
    expect(functions.isStrongPassword('Abcdef#$')).toBe(false);
});

test('check is 12122001 a valid date', () => {
    expect(functions.isDate('12/12/2001')).toBe(true);
});

test('check is / 1 / 2121 a valid date', () => {
    expect(functions.isDate(' / 1 / 2121')).toBe(false);
});

test('check is 122001 a valid date', () => {
    expect(functions.isDate('11/11/2001')).toBe(true);
});

test('check is 121220001 a valid date', () => {
    expect(functions.isDate('121/22/0001')).toBe(false);
});

test('check if #000000 is a valid hex color', () => {
    expect(functions.isHexColor('#123456')).toBe(true);
});

test('check if #00000 is a valid hex color', () => {
    expect(functions.isHexColor('#00(000)')).toBe(false);
});

test('check if #FF0000 is a valid hex color', () => {
    expect(functions.isHexColor('#654321')).toBe(true);
});

test('check if #FFF0000 is a valid hex color', () => {
    expect(functions.isHexColor('#FFF0(000)')).toBe(false);
});