interface Ititle {
    name: string,
    profession?: string,
    specialization?: string 
}

interface Icontacts {
    phone: string,
    email?: string,
    githab?: string,
    location?: string, 
}

export interface Icv {
    title: Ititle,
    contacts: Icontacts,
    description?: string,
    education?: Array<any>,
    expirience?: Array<any>,
    softvare?: Array<string>,
    programmingLanguages?: Array<any>
}
