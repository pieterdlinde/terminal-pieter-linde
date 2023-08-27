import config from '../config';

class EducationListings {
    public qualification: string;
    public institution: string;
    public year: string
    public achievements: string

    constructor(qualification: string, institution: string, year: string, achievements: string) {
        this.qualification = qualification;
        this.institution = institution;
        this.year = year;
        this.achievements = achievements;
    }
}

export const education = async (args: string): Promise<string> => {

    const references: EducationListings[] = [
        new EducationListings("National Senior Certificate","Hoërskool Reitz, Reitz, Free State, South Africa","2008",`Computer Applications Technology - 95%\nMathematical - 77%\nLife Orientation - 85%`),
        new EducationListings("Bachelor of Science (B.Sc.) Honours, Information Technology", "Computer Science and Information Systems" ,"North-West University, South-Africa","2012"),
        new EducationListings("Bachelor of Science (B.Sc.), Information Technology","Computer Science and Information Systems","North-West University, South-Africa",`2008 - 2011`),
        new EducationListings("Microsoft","MS: Programming in HTML5 with JavaScript and CSS3","2015",``),
        new EducationListings("Microsoft","MCPS: Microsoft Certified Professional","2014",``),
        new EducationListings("Microsoft","MCTS: .NET Framework 4, Windows Applications","2013",``)
    ]

    let returnValue = "";
    references.forEach(reference => {
        returnValue += `
${reference.qualification}\n
${reference.institution}\n
${reference.year.length > 0 ? reference.year +"\n" : ''} 
${reference.achievements.length > 0 ? reference.achievements +"\n" : ''} 
-------------------------------------------------`
    });
    return returnValue;
};

export default education;
