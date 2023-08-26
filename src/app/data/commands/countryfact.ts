import axios, { AxiosResponse } from "axios";

export const countryfact = async (args: string[]): Promise<string> => {
    const name = args.join(' ');
    if (!name || name.length === 0) {
        return 'Usage: countryfact [name]. Example: countryfact netherlands';
    }

    const data = await getData(name);
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

export const getData = async (name: string): Promise<{ activity: string }> => {
    const response: AxiosResponse<CountryInfo[]> = await axios.get(
        'https://restcountries.com/v3.1/name/' + name
    );

    if (response.status === 404) {
        return { activity: `Usage: countryfact [name]. Example: countryfact netherlands` };
    }

    let languages = "";
    for (const languageCode in response.data[0].languages) {
        if (response.data[0].languages.hasOwnProperty(languageCode)) {
            const languageName = response.data[0].languages[languageCode];
            languages += `Language code: ${languageCode}, Language name: ${languageName} \n`
        }
    }

    return {
        activity: `
Country Common Name - ${response.data[0].name.common}
Official Name - ${response.data[0].name.official} 
Capital - ${response.data[0].capital}
Status - ${response.data[0].status} 
${languages} 
    `,
    };
};
