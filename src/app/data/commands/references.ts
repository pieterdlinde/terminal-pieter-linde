import config from '../config';

class ReferenceName {
    public name: string;
    public position: string;
    public email: string
    public linkedIn: string

    constructor(name: string, position: string, email: string, linkedIn: string) {
        this.name = name;
        this.position = position;
        this.email = email;
        this.linkedIn = linkedIn;
    }
}

export const references = async (args: string): Promise<string> => {

    const references: ReferenceName[] = [
        new ReferenceName("Jan-Jurgens van der Walt", "Business Unit Head of Technology at iOCO", "jj.vanderwalt@gmail.com", "https://www.linkedin.com/in/jjvanderwalt/"),
        new ReferenceName("Ruan van Zyl", "Business Unit Manager", "ruan.vanZyl@iOCO.tech", "https://www.linkedin.com/in/ruan-van-zyl-9331729a"),
        new ReferenceName("Sakkie van Zyl", "Head of Technology at iOCO", "sakkie89@gmail.com", "https://www.linkedin.com/in/sakkie-van-zyl-428bb058/"),
        new ReferenceName("Dean White", "Freelancer - Senior Software Architect", "deanwhite@outlook.com", "https://www.linkedin.com/in/dean-white-94385b44/"),

    ]

    let returnValue = "";
    references.forEach(reference => {
        returnValue += `
Name: ${reference.name}\n
Position: ${reference.position}\n
Email: ${reference.email}\n 
<a class="text-light-blue dark:text-dark-blue underline" href="${reference.linkedIn}" target="_blank">${reference.linkedIn}</a>
        `
    });
    return returnValue;
};

export default references;
