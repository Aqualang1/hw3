const year = +prompt('Enter your birth year', '1900?');
const city = prompt('Where do you living?', 'London, Kiyv, Washington?');
const sport = prompt('What kind of activity do you prefer?', 'soccer, boxing, basketball?');

// pt1

if (!year && city === null) {
    alert('nothing to display');
} else if (!year || year === null) {
    alert(`you choose not to indicate your age, and you are living in ${city}`);
} else if (city === 'Washington') {
    alert(`Your age is ${2023 - year}, and you are living in capital of USA`);
} else if (city === null) {
    alert(`your age is ${2023 - year}, but you choose not to indicate your City`);
} else if (city === 'London') {
    alert(`Your age is ${2023 - year}, and you are living in capital of UK`);
} else if (city === 'Kiyv') {
    alert(`Your age is ${2023 - year}, and you are living in capital of Ukraine`);
} else {
    alert(`Your age is ${2023 - year}, and you are living in ${city}`);
};

// pt2

switch (sport) {
    case 'soccer':
        alert('wanna be like Pele?')
        break;
    case 'boxing':
        alert('wanna be like Klichko?')
        break;
    case 'basketball':
        alert('wanna be like Jordan?')
        break;
    case null:
        alert('you choose not to indicate sport')
        break;
    default:
        alert('nice sport')
        break;
}