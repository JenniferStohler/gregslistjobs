import { ProxyState } from "../AppState.js";
import Job from "../Models/Job.js";
import { api } from "./AxiosService.js";



class JobsService {
  async getJobs(){
  let res =  await api.get('jobs')
  console.log(res.data)
  ProxyState.jobs = res.data.map(j => new Job(j))
  }
  async createJob(newJob) {

    let res = await api.post('jobs', newJob)
    console.log(res,data)
    res.data.id = res.data.id
    let job = new Job(res.data)
    ProxyState.jobs = [...ProxyState.jobs, job]

  }
  async createJob(id) {
    // find the Job
    let job = ProxyState.jobs.find(job => job.id === id)
    // make the change
    job.rate += 5

    await api.put('jobs/' + id, job)

    // trigger the cycle (this can only be the top level properties of ProxyState) to update the page
    ProxyState.jobs = ProxyState.jobs
  }
  async deleteJob(id) {
    //restful convention for aa delete route is '/collectionName/: id'(the ':' indicates a variable value does not need to be added)
    await api.delete('jobs/' + id)
    // remove the car with that id from the array
    // trigger the update cycle by setting the value of ProxyState.cars

    // NOTE filter itterates over an array and only keeps things where the statement provided is true
    // here we remove the car with the id by only keeping cars that do not have that id
    // then we set the ProxyState array back to the result after the filter
    ProxyState.jobs = ProxyState.jobs.filter(job => job.id != id)
  }

}

export const housesService = new HousesService();


