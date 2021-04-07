import { ProxyState } from "../AppState.js";
import { jobsService } from "../Services/JobsService.js";


//Private
function _draw() {
  // What are we drawing
  let jobs = ProxyState.jobs
  let template = ''
  // if a collection itterate over collection to generate template for each object
  jobs.forEach(job => {
    console.log(job)
    template += job.Template
  })
  // render to page
  document.getElementById('jobs').innerHTML = template
}

//Public





  export default class JobsController {
    constructor() {
      ProxyState.on('jobs', _draw);
  
      // REVIEW
      // GET CARS ON LOAD
      this.getJobs()
    }
  
  async getJobs() {
    try {
      await jobsService.getJobs()
    } catch (error) {
      console.error(error)
    }
  }

  async createJob() {
    try{
    // if this method is triggered by an event (submit event) prevent the default action of reloding the page
    window.event.preventDefault()
    // grab the element from html that triggered this event
    const form = window.event.target
    let newJob = {
      // @ts-ignore
      company: form.company.value,
      // @ts-ignore
      description: form.description.value,
      // @ts-ignore
      jobtitle: form.jobtitle.value,
      //@ts-ignore
      hours: form.hours.value,
      // @ts-ignore  this converts the string to a number
      rate: Number(form.rate.value),
      // @ts-ignore
      updatedAt: form.updatedAt.value,
      //@ts-ignore
      imgUrl: form.imgUrl.value
    }
    await jobsService.createJob(newJob)
    form.reset()
  } catch (error) {
   
  }
  $('#new-job-form').modal('hide')
  }
   

    // @ts-ignore

    // get the modal and close (using jQuery's "$" selector) 

  



  deleteJob(id) {
     try {
      jobsService.deleteJob(id)
    } catch (error) {
      console.error(error)
    }
  }

  createJob(id) {
    jobsService.createJob(id)
  }

}