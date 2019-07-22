import { getThrowFromNumber } from '../src/get-throw.js';

const test = QUnit.test;

test('returns rock when throw is 0', (assert) => {
    // Arrange
    const randomNumber = 0;

    const expected = 'rock';

    // Act
    const result = getThrowFromNumber(randomNumber);
    
    // Assert
    assert.equal(result, expected);
});

test('returns paper when throw is 1', (assert) => {
    // Arrange
    const randomNumber = 1;

    const expected = 'paper';

    // Act
    const result = getThrowFromNumber(randomNumber);
    
    // Assert
    assert.equal(result, expected);
});

test('returns scissors when throw is 2', (assert) => {
    // Arrange
    const randomNumber = 2;

    const expected = 'scissors';

    // Act
    const result = getThrowFromNumber(randomNumber);
    
    // Assert
    assert.equal(result, expected);
});