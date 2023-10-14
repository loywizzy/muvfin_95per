import { ref } from 'vue'
import { defineStore } from 'pinia'


//ตอนใช้ให้ใส่ในscript
//import { user } from '../store/user'
//const user = user()
//{name:' ',year:' ',imdb:' ',time:' ',director:' ',author:'Christopher Nolan',actor:' ',reviwe:" "}
export const movie = defineStore('movie', () => {
  const action = ref([{name:'Tenet',year:'2020',imdb:'7.3',time:'2h 30m',director:'Christopher Nolan',author:'Christopher Nolan',actor:'"John David Washington" "Robert Pattinson" "Elizabeth Debicki" "Juhan Ulfsak" "Jefferson Hall"',reviwe:"Those who liked 'Tenet' said it was confusing. Those who hated 'Tenet' said it was confusing. Having read so many contradicting reviews about 'Tenet' I decided to watch it for myself to make up my own mind."}
])
  const adventure = ref([{name:' ',year:' ',imdb:' ',time:' ',director:' ',author:' ',actor:' ',reviwe:" "}])
  const animation = ref([{name:' ',year:' ',imdb:' ',time:' ',director:' ',author:' ',actor:' ',reviwe:" "}])
  const comedy = ref([{name:' ',year:' ',imdb:' ',time:' ',director:' ',author:' ',actor:' ',reviwe:" "}])
  const drama = ref([{name:' ',year:' ',imdb:' ',time:' ',director:' ',author:' ',actor:' ',reviwe:" "}])
  const documentary = ref([{name:' ',year:' ',imdb:' ',time:' ',director:' ',author:' ',actor:' ',reviwe:" "}])
  const fantasy = ref([{name:' ',year:' ',imdb:' ',time:' ',director:' ',author:' ',actor:' ',reviwe:" "}])
  const horror = ref([{name:' ',year:' ',imdb:' ',time:' ',director:' ',author:' ',actor:' ',reviwe:" "}])
  const romantic = ref([{name:'Romantic Rewrite',year:'2022',imdb:' 6.2',time:'1h 25m',director:'Damián Romay',author:'" Jennifer Edwards ","Jennifer Miller"',actor:'"Kristina Cole Geddes","Russell Quinn ","Reed Favero"',reviwe:reviews.romantic}])
  const sicfi = ref([{name:' ',year:' ',imdb:' ',time:' ',director:' ',author:' ',actor:' ',reviwe:" "}])
  const thriller = ref([{name:' ',year:' ',imdb:' ',time:' ',director:' ',author:' ',actor:' ',reviwe:" "}])
 

 
  return {action,adventure,animation,comedy,drama,documentary,fantasy,horror,romantic,sicfi,thriller}
})