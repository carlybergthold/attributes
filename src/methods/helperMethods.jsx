import attributeArray from "../data/attributeArray";

const helperMethods = {

    capitalize: (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    },

    getAttributeColor: (attribute) => {
        const name = attributeArray.find(x => x.attributeName === attribute.toLowerCase());
        if (name === undefined ) return 'var(--teal)';
        return `var(--${name.color})`;
    }
}

export default helperMethods;