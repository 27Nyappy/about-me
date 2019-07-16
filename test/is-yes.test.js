import isYes from '../src/is-yes.js';

const test = QUnit.test;

test('yes', function(assert) {
    //Arange
    //  Set up your parameters and expectations
    const text = 'yes';
    const expected = true;

    //Act
    // Call the function you're testing and set the result to a const
    const result = isYes(text);

    //Assert
    assert.equal(result, expected);
});

test('y', function(assert) {
    //Arange
    //  Set up your parameters and expectations
    const text = 'y';
    const expected = true;

    //Act
    // Call the function you're testing and set the result to a const
    const result = isYes(text);

    //Assert
    assert.equal(result, expected);
});

test('yeah', function(assert) {
    //Arange
    //  Set up your parameters and expectations
    const text = 'yeah';
    const expected = true;

    //Act
    // Call the function you're testing and set the result to a const
    const result = isYes(text);

    //Assert
    assert.equal(result, expected);
});

test('YES', function(assert) {
    //Arange
    //  Set up your parameters and expectations
    const text = 'YES';
    const expected = true;

    //Act
    // Call the function you're testing and set the result to a const
    const result = isYes(text);

    //Assert
    assert.equal(result, expected);
});

test('Y', function(assert) {
    //Arange
    //  Set up your parameters and expectations
    const text = 'Y';
    const expected = true;

    //Act
    // Call the function you're testing and set the result to a const
    const result = isYes(text);

    //Assert
    assert.equal(result, expected);
});

test('YEAH', function(assert) {
    //Arange
    //  Set up your parameters and expectations
    const text = 'YEAH';
    const expected = true;

    //Act
    // Call the function you're testing and set the result to a const
    const result = isYes(text);

    //Assert
    assert.equal(result, expected);
});

test('YEP', function(assert) {
    //Arange
    //  Set up your parameters and expectations
    const text = 'YEP';
    const expected = true;

    //Act
    // Call the function you're testing and set the result to a const
    const result = isYes(text);

    //Assert
    assert.equal(result, expected);
});

test('yep', function(assert) {
    //Arange
    //  Set up your parameters and expectations
    const text = 'yep';
    const expected = true;

    //Act
    // Call the function you're testing and set the result to a const
    const result = isYes(text);

    //Assert
    assert.equal(result, expected);
});

test('no', function(assert) {
    //Arange
    //  Set up your parameters and expectations
    const text = 'no';
    const expected = false;

    //Act
    // Call the function you're testing and set the result to a const
    const result = isYes(text);

    //Assert
    assert.equal(result, expected);
});

test('NO', function(assert) {
    //Arange
    //  Set up your parameters and expectations
    const text = 'NO';
    const expected = false;

    //Act
    // Call the function you're testing and set the result to a const
    const result = isYes(text);

    //Assert
    assert.equal(result, expected);
});

test('nah', function(assert) {
    //Arange
    //  Set up your parameters and expectations
    const text = 'nah';
    const expected = false;

    //Act
    // Call the function you're testing and set the result to a const
    const result = isYes(text);

    //Assert
    assert.equal(result, expected);
});

test('NAH', function(assert) {
    //Arange
    //  Set up your parameters and expectations
    const text = 'NAH';
    const expected = false;

    //Act
    // Call the function you're testing and set the result to a const
    const result = isYes(text);

    //Assert
    assert.equal(result, expected);
});

test('nope', function(assert) {
    //Arange
    //  Set up your parameters and expectations
    const text = 'nope';
    const expected = false;

    //Act
    // Call the function you're testing and set the result to a const
    const result = isYes(text);

    //Assert
    assert.equal(result, expected);
});

test('NOPE', function(assert) {
    //Arange
    //  Set up your parameters and expectations
    const text = 'NOPE';
    const expected = false;

    //Act
    // Call the function you're testing and set the result to a const
    const result = isYes(text);

    //Assert
    assert.equal(result, expected);
});