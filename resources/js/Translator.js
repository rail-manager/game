export const Translator = {
    install: (v, translations) => {
        v.config.globalProperties.__ = function(key, replace = {}) {
            let translation = translations[key]
                ? translations[key]
                : key;

            Object.keys(replace).forEach(function (key) {
                translation = translation.replaceAll(':' + key, replace[key])
            });

            return translation
        };
    },
};
