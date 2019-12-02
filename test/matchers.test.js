const sum = require('../app/sum');

// Matchers: Common

test('adds 1 + 2 and returns 3', ()=>{
    expect(sum(1,2)).toBe(3);
});

test('adds 2 + 2 and returns 4', ()=>{
    expect(2 + 2).toBe(4);
});

test('object assignment',()=>{
    const data = {
        1: 'one'
    };
    data['2'] = 'two';
    expect(data).toEqual({
        1: 'one',
        2: 'two'
    })
});

test('adding possitive numbers is not zero',()=>{
    const a = 1;
    const b = 2;
    expect(a+b).not.toBe(0);
});

// Matchers: Truthiness

test('null verification',()=>{
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

test('zero verification',()=>{
    const n = 0;
    expect(n).not.toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

// Matchers: Numbers
test('two plus two',()=>{
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeLessThan(5);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThanOrEqual(5);

    // toBe and toEqual are equivalent for numbers.
    expect(value).toBe(4);
    expect(value).toEqual(4);
});

test('floating point numbers', ()=>{
    const value = 0.1 + 0.2;
    // expect(value).toBe(0.3);
    expect(value).toBeCloseTo(0.3);
})


// Matchers: Arrays and Iterables

test('array has word earth',()=>{
    const arr = [
        'hello',
        'hai',
        'earth',
    ];

    expect(arr).toContain('earth');
});

// Matchers: Errors

function NotFound404(){
    throw new Error('404 ~ Not Found');
}

test('throws an error of 404 not found',()=>{
    expect(NotFound404).toThrow();
    expect(NotFound404).toThrow(Error);
    expect(NotFound404).toThrow('404 ~ Not Found');
    expect(NotFound404).toThrow(/404/);
});

