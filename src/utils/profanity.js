import * as filter from 'leo-profanity';

export const clean = (text) => {
    filter.loadDictionary('en');
    const clearedText = filter.clean(text);
    filter.loadDictionary('ru');
    return filter.clean(clearedText);
};

export const check = (channelName) => {
    filter.loadDictionary('en');
    const checkByEng= filter.check(channelName);
    filter.loadDictionary('ru');
    const checkByRu = filter.check(channelName);
    return checkByEng || checkByRu;
};