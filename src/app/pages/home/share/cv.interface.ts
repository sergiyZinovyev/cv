interface ITitle {
    name: string,
    profession?: string,
    specialization?: string 
}

interface IContacts {
    phone: string,
    email?: string,
    githab?: string,
    location?: string, 
}

export interface IProjectLink {
    repository?: string,
    page?: string,
}

export interface IExperience {
    organization: string,
    specialization?: string,
    date?: string,
    description?: string, 
}

export interface ISkill {
    name: string,
    level?: number,
    experience?: string,
    projectLinks?: Array<IProjectLink>, 
}

export interface ICv {
    title: ITitle,
    contacts: IContacts,
    description?: string,
    education?: Array<IExperience>,
    experience?: Array<IExperience>,
    software?: Array<string>,
    programmingLanguages?: Array<ISkill>
}
