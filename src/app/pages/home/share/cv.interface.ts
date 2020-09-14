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

export interface IExpirience {
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
    education?: Array<IExpirience>,
    expirience?: Array<IExpirience>,
    softvare?: Array<string>,
    programmingLanguages?: Array<ISkill>
}
