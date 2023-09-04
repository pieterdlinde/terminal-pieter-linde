import axios, { AxiosResponse } from "axios";

export const country = async (args: string[]): Promise<string> => {
    const name = args.join(' ');
    if (!name || name.length === 0) {
        return 'Usage: country [name]. Example: country netherlands';
    }

    const data = await getCountryFact(name);
    return data.activity;
};

interface CountryInfo {
    name: {
        common: string;
        official: string;
        nativeName: {
            [key: string]: {
                common: string;
                official: string;
            };
        };
    };
    tld: string[];
    cca2: string;
    ccn3: string;
    cca3: string;
    independent: boolean;
    status: string | number;
    unMember: boolean;
    currencies: {
        [key: string]: {
            name: string;
            symbol: string;
        };
    };
    idd: {
        root: string;
        suffixes: string[];
    };
    capital: string[];
    altSpellings: string[];
    region: string;
    subregion: string;
    languages: {
        [key: string]: string;
    };
    translations: {
        [key: string]: {
            official: string;
            common: string;
        };
    };
    latlng: number[];
    landlocked: boolean;
    area: number;
    demonyms: {
        [key: string]: {
            f: string;
            m: string;
        };
    };
    flag: string;
    maps: {
        googleMaps: string;
        openStreetMaps: string;
    };
    population: number;
    car: {
        signs: string[];
        side: string;
    };
    timezones: string[];
    continents: string[];
    flags: {
        png: string;
        svg: string;
    };
    coatOfArms: {
        png: string;
        svg: string;
    };
    startOfWeek: string;
    capitalInfo: {
        latlng: number[];
    };
    postalCode?: {
        format: string;
        regex: string;
    };
}

const getCountryFact = async (name: string): Promise<{ activity: string }> => {
    
    try {
    
    const response: AxiosResponse<CountryInfo[]> = await axios.get(
        'https://restcountries.com/v3.1/name/' + name
    );
 
    if (response.status === 404) {
        return { activity: 'Usage: country [name]. Example: country netherlands' };
    }

let activity = '';
for (const country of response.data) {
    let languages = "";
    for (const languageCode in country.languages) {
        if (country.languages.hasOwnProperty(languageCode)) {
            const languageName = country.languages[languageCode];
            languages += `Code: ${languageCode} - Name: ${languageName} \n`
        }
    }
    activity += `
Common Name - ${country.name.common}
Official Name - ${country.name.official} 
Capital - ${country.capital}
Status - ${country.status} 
${languages} 
`};

    return {
        activity: activity,
    };

} catch (error) {
    return { activity: 'Usage: country [name]. Example: country netherlands'};
}
};
