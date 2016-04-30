/**
 * Created by yeshg on 4/29/2016.
 */

/**
 * Luhn algorithm to check validity of a credit card number.
 */

function ccNumberNormalizer(ccNumber) {
    ccNumber = String(ccNumber);
    return ccNumber.replace(/-/g, '');
}

function ccNumberValidator(ccNumber) {
    var alt = false,
        sum = 0,
        len = ccNumber.length,
        digit;

    if (typeof ccNumber !== 'string') {
        throw 'Invalid credit card string was passed';
    }

    while(len > 0) {
        digit = parseInt(ccNumber[len-1], 10);

        if (alt) {
            digit *= 2;

            if (digit > 9) {
                digit = digit % 10 + 1;
            }
        }

        sum += digit;

        alt = !alt;
        len--;
    }

    return sum % 10 === 0 ? true : false;
}


module.exports =  {
    validate: ccNumberValidator,
    normalize: ccNumberNormalizer
};