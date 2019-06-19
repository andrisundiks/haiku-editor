import syllable from 'syllable';

export const countWordSyllables = line => {
    const formattedLine = line.split(' ').map( word => {
        return word ? word+'('+syllable(word)+') ' : '';
    }).join('');

    return formattedLine;
};

export const totalLineSyllables = line => {
    return line ? "  " + syllable(line) : '';
};

