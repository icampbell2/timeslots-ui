import StringUtils from './StringUtils';

it('determines if a string is blank', () => {
    let value: string = 'not blank';
    expect(StringUtils.isBlank(value)).toEqual(false);
    value = ' ';
    expect(StringUtils.isBlank(value)).toEqual(true);
});
