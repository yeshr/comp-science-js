/**
 * Created by yeshg on 4/28/2016.
 */


var base64 = {
    encode: function base64Encode(input) {
        // Check for any invalid characters
        if (/[^\u0000-\u00ff]/.test(input)) {
            throw 'String contains characters that cannot be base64 encoded';
        }

        var i = 0,
            solution = [],
            len = input.length,
            pos,
            cur,
            prev,
            digits='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

        while(i < len) {
            // get each char and convert it into its equivalent charCode
            cur =  input.charCodeAt(i);

            // convert to binary
            //encoding = encoding.toB
            // Every set of 3 chars make 24bits that can be evenly divided
            // to convert into base64
            pos = i % 3;

            switch (pos) {
                case 0:
                    solution.push(digits.charAt(cur >> 2)); //6 - 2
                    break;
                case 1:
                    solution.push(digits.charAt((prev & 3) << 4 | (cur >> 4))); //2, 4 - 4
                    break;
                case 2:
                    solution.push(digits.charAt((prev & 0x0f) << 2 | (cur >> 6))); // 4, 2 - 6
                    solution.push(digits.charAt(cur & 0x3f)); // 6
                    break;
            }

            prev = cur;
            i++;
        }

        // Check for padding cases
        if (pos === 0) {
            solution.push(digits.charAt((prev & 3) << 4));
            solution.push('==');
        }
        else if (pos === 1) {
            solution.push(digits.charAt((prev & 0x0f) << 2));
            solution.push('=');
        }


        return solution.join('');
    },
    decode: function base64Decode(input) {
        // strip out any white space
        input = input.replace(/\s/g, '');

        // Check if a valid base64 string
        if (!/^[a-z0-9\+\/]+\={0,2}$/i.test(input) || input.length % 4 ) {
            throw 'Not a base64 encoded string';
        }

        // Remove the padding indicator since they are not part of the string
        input = input.replace(/\=/g, '');

        var pos,
            cur,
            prev,
            i = 0,
            len = input.length,
            digits = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
            solution = [];

        while(i < len) {
            pos = i % 4;
            cur = digits.indexOf(input.charAt(i));

            switch(pos) {
                case 0:
                    break;
                case 1:
                    solution.push(String.fromCharCode(prev << 2 | cur >> 4));
                    break;
                case 2:
                    //console.log((prev & 0x0f) << 4 | cur >> 2);
                    solution.push(String.fromCharCode((prev & 0x0f) << 4 | cur >> 2));
                    break;
                case 3:
                    //console.log(((prev & 3) << 6) | cur);
                    solution.push(String.fromCharCode((prev & 3) << 6 | cur));
                    break;
            }

            prev = cur;
            i++;
        }

        return solution.join('');
    }
};


module.exports = base64;