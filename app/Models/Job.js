export default class Job {
    constructor({company, description, jobtitle, hours, rate, updatedAt, imgUrl, id}) {
        this.id = id
        this.company = company
        this. description = description
        this.jobtitle = jobtitle
        this.hours = hours
        this. rate = rate
        this.updatedAt= updatedAt
        this.imgUrl = imgUrl
    
    }

    get Template() {

        return /*html*/`
    `
    }
}