export const isElementInArray = (array, element) => {
    return array.filter((e) => e.name.includes(element)).length > 0;
};