import compareNumbers from '../src/compare-numbers.js';

const test = QUnit.test;

test('returns 0 when guess is correct', (assert) => {
    // Arrange
    const guess = 4;
    const correctNumber = 4;

    const expected = 0;

    // Act
    const result = compareNumbers(guess, correctNumber);
    
    // Assert
    assert.equal(result, expected);
});

test('returns -1 when guess is too low', (assert) => {
    // Arrange
    const guess = 4;
    const correctNumber = 6;

    const expected = -1;

    // Act
    const result = compareNumbers(guess, correctNumber);
    
    // Assert
    assert.equal(result, expected);
});

test('returns 1 when guess is too high', (assert) => {
    // Arrange
    const guess = 7;
    const correctNumber = 4;

    const expected = 1;

    // Act
    const result = compareNumbers(guess, correctNumber);
    
    // Assert
    assert.equal(result, expected);
});