export const splitedAndFormattedDate = date => {
    const options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    };

    // eslint-disable-next-line
    const acceptedLanguages = {
        'pt-BR': /([\wçá-]+)+,\s([\w\s]+)\s([\d+:]+)/,
        'en-US': /([\w]+),\s([\w\s]+),\s([\w\s:]+)/
    };

    const language = acceptedLanguages[navigator.language] ? navigator.language : 'en-US';

    const parsedDate = Intl.DateTimeFormat(language, options)
        .format(new Date(date))
        .match(acceptedLanguages[language])
        .slice(1);

    return parsedDate;
};
