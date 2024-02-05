import {defineStore} from 'pinia'

export const useTaskStore = defineStore('taskStore',{
    state:()=>({
        tasks:[
            {id:1,title:"Buy some milk",isFav:false},
            {id:2,title:"Play GTA5", isFav:true}
        ]
    }),
    getters:{
       favs(){
        return this.tasks.filter((task)=>task.isFav)
       },
       totalCount(state){
        return state.tasks.length;
       },
       favCount(){
        const tasks =  this.tasks.filter((task)=>task.isFav)
        return tasks.length
       }
    },
    actions:{
        addTasks(task){
            this.tasks.push(task)
        },
        addFavs(id){
            const task = this.tasks.find((task)=>task.id === id)
            task.isFav = !task.isFav;
        },
        deleteTask(id){
            this.tasks = this.tasks.filter((task)=>{
                return task.id !== id
            })
        }
    }
    
})