export interface IImage {
    image: string,
}
 
export interface IPortfolio {
    name: string,
    images: Array<IImage>,
    link?: string
}
