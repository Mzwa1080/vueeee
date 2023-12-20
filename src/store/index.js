import { createStore } from 'vuex'
const dataUrl = 'https://mzwa1080.github.io/vue-exampleData/data/' 

export default createStore({
  state: {
    jobTitle : null,
    about : null,
    education : null,
    skills : null,
    testimonials : null,
    projects : null,

  },
  getters: {
  },
  mutations: {
    setJobTitle(state, value){
      state.jobTitle = value
    },
    setAbout(state, value){
      state.about = value
    },
    setEducation(state, value){
      state.education = value
    },
    setSkills(state, value){
      state.skills = value
    },
    setTestimonials(state, value){
      state.testimonials = value
    },
    setProjects(state, value){
      state.projects = value
    },
  },
  actions: {

    async fetchJobTitle(context){
      let res = await fetch(dataUrl)
      let {jobTitle} = await res.json()
      context.commit('setJobTitle', jobTitle)
    },


  },
  modules: {
  }
})
