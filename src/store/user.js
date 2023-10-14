import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
//ตอนใช้ให้ใส่ในscript
//import { user } from '../store/user'
//const user = user()
export const add = defineStore('add', () => {
  const id = ref(0)
 function getid(item){
  if (item >= 33 ){
    id.value = item -5
  }else{
    id.value = item-1
  }
  console.log(id)
  }

  return {getid ,id}
})



//ตอนใช้ให้ใส่ในscript
//import { userlogin } from '../store/user'
//const login = userlogin()
export const userlogin = defineStore('userlogin', () => {
  const login = ref(false)
  function logined() {
    login.value = login.value === false ? true : false;
  }

  return { login, logined }
})

// export const list_category = defineStore('userlolist_category', () => {


//   return { ,  }
// })