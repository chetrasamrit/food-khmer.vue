import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    title: 'hhh',
    h2: '',
    h3:[]
  }),
  actions: {
    // async fetchData(){
    //   try{
    //     const response = await fetch('https://completively-unindustrial-epifania.ngrok-free.dev/home')
    //     const data = await response.json()

    //      const {welcome_message,helper_message_kh,item_list} = data

    //     console.log(data)
    //     this.title = welcome_message
    //     this.h2 = helper_message_kh
    //     this.h3 = item_list
        
    //   }catch(err){
    //     console.error(err.message)

    //   }
    // }
  }
})