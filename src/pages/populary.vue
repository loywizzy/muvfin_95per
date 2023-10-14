<script setup>
//import { RouterLink, RouterView } from 'vue-router'
import {ref} from 'vue'
import headermuf from "../views/headermuf.vue";
import Footer from "../components/footer.vue";
const product = ref([
{ name: "Spider-Man: Beyond the Spider-Verse", year: "2023", price: 29, quantity: 1, type: "Animation", descript_eng: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero.", descript_thai: "Miles Morales ยิงข้าม Multiverse ซึ่งเขาได้พบกับทีม Spider-People ซึ่งมีหน้าที่ปกป้องการดำรงอยู่ของมัน เมื่อเหล่าฮีโร่ปะทะกันเกี่ยวกับวิธีการรับมือกับภัยคุกคามครั้งใหม่ ไมลส์จะต้องกำหนดนิยามใหม่ของการเป็นฮีโร่", imdb: "8.7/10", time: "2h 20m", director: "'Joaquim Dos' 'SantosKemp Powers' 'Justin  K. Thompson' ", athor: " 'Phil Lord' 'Christopher Miller' 'Dave Callaham' ", actor: " 'Shameik Moore' 'Hailee Steinfeld' 'Brian Tyree Henry' ", reviwe1: "The animation, flow of everything, genius character development, and action were all electrifying! ", reviwe2: "This film is a visual concert. The animation and character design neatly put me to tears", reviwe3: " -	Spider-Man: Into the Spider-Verse is probably my favorite Spider-Man movie.", img: "https://i.redd.it/kjlwry64rh5b1.png" },
{ name: "An Action Hero", year: "2022", price: 29, quantity: 1, type: "Action", descript_eng: "Youth Icon. Superstar. Action Hero. At the age of just 30, Maanav was at the peak of his career when he got caught up in an accident while filming in Haryana. Maanav, who was once a household name, is now living in hiding.", descript_thai: "ไอคอนเยาวชน ซุปตาร์. แอคชั่นฮีโร่ เมื่ออายุเพียง 30 ปี Maanav อยู่ในจุดสูงสุดในอาชีพของเขาเมื่อเขาประสบอุบัติเหตุขณะถ่ายทำในรัฐหรยาณา มาอานาฟ ซึ่งครั้งหนึ่งเคยเป็นชื่อสามัญประจำบ้าน ตอนนี้กำลังหลบซ่อนตัวอยู่", imdb: "7.0/10", time: "2h 10m", director: "'Anirudh Iyer'", athor: "'Anirudh Iyer' 'Neeraj Yadav'", actor: "'Ayushmann Khurrana' 'Jaideep Ahlawat' 'Neeraj Madhav'", reviwe1: "Over the years, we have watched actioners in Bollywood consistently leaving much to be desired so much .", reviwe2: "Now this is a good movie. Aayushmann Khurana was good in it, Jaideep Alahawat was good.", reviwe3: "I saw - An action hero, in the theatre. The movie was definitely engaging.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnUryz2we0N7WrqraIPruDhIz9gPJBzRd9d7jDZlcswDyokvr9DdkA12A59cSezgwwgMo&usqp=CAU" },
{ name: "Dune", year: "2021", price: 29, quantity: 1, type: "Action", descript_eng: "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.", descript_thai: "ครอบครัวชั้นสูงกลายเป็นส่วนหนึ่งของสงครามสำหรับการควบคุมทรัพย์สินมีค่าที่สุดในจักรวาล ในระหว่างนี้สามีชายของครอบครัวกลายเป็นคนที่ได้รับมุมมองที่ซับซ้อนเกี่ยวกับมุมหน้าที่มืดมนในอนาคต", imdb: "8/10", time: "2h 35m", director: "Denis Villeneuve", athor: "'Jon Spaihts' 'Denis Villeneuve' 'Eric Roth'", actor: "'Timothée Chalamet' 'Rebecca Ferguson' 'Zendaya'", reviwe1: "This movie is big. It's meant to be on the big screen. The visuals are captivating, the music is mesmerizing and the actors are convincing.", reviwe2: "The cinematography and Hans Zimmer music. An experience that should be obtained by all.", reviwe3: "Yes books are read but this movie gives a good impression of the worlds created in our minds.", img: "https://i.redd.it/3fl2s0q1ug661.jpg" },
{ name: "Oscar Nominated Short Films", year: "2020", price: 29, quantity: 1, type: "Documentary", descript_eng: "2020 Oscar Nominated of Short Films Documentary: * Learning to Skateboard in a Warzone (If you're a Girl) * Life Overtakes Me * In The Absence * St. Louis Superman * Walk Run CHA-CHA", descript_thai: "ผลงานสั้นเรื่องสารคดีที่ได้รับการเสนอชื่อเข้าชิงรางวัลออสการ์ปี 2020 ครอบครัวด้วยเรื่องดีๆ ได้แก่: 'Learning to Skateboard in a Warzone (If you're a Girl)' - เรียนรู้เล่นสเก็ตบอร์ดในเขตรบที่มีการสงคราม (หากคุณเป็นผู้หญิง) 'Life Overtakes Me' - ชีวิตกินโดยเหลือเป็นอันขาด 'In The Absence' - ในความขาดแคลน 'St. Louis Superman' - ซูเปอร์แมนจากเซนต์ลูอิส 'Walk Run CHA-CHA' - เดินวิ่งชะช่า", imdb: "7.9/10", time: "2h 40m", director: "Canada, United States", athor: "'Canada' 'United States'", actor: "'King Bruce Franks III' 'Bruce Franks Jr.'", reviwe1: ".The show is a documentary of USA invations to countries where the authorities interfere with the USA governments interests", reviwe2: "A biased look at the story. A narcissist enabled by her father. I believe she did it with no doubt in my mind. The documentary lacks other points of view.", reviwe3: "It seems like she has a similar personality to Casey Anthony, kinda disgusting, thinking she can flirt her way out of everything. Well at least this one got jailed.", img: "https://static.toiimg.com/thumb/74593242.cms?width=170&height=240&imgsize=35212" },

])

</script>

<template>
  <RouterView></RouterView>
  <headermuf class="fixed-top"></headermuf>
  <div style="margin-top: 200px;"></div>
  <h1 class="text-center fw-bold m-3">Poppular Movie</h1>
  <div class="container-fluid ">
    <div class="row m-3 g-5 justify-content-around">
      <div class="card-group col-6">
      <div class="card h-100" >
          <img :src="product[0].img" class="card-img-top m-3 rounded-4" alt="..." style="max-width: 150px;">
          <div class="card-body">
            <div class="card-text">{{ product[0].year }}</div>
            <h5 class="card-title">{{ product[0].name }}</h5>
            <p class="card-text overflow-auto mb-5">
              {{ product[0].imdb }}<i class="fa-solid fa-star" style="color: #F9EEB6;"></i><br>
              Time : {{ product[0].time }} <br>
              Director : {{ product[0].director }}</p>
          </div>
        </div>
          <div class="card text-center ">
          <div class="card-title m-3"><img src="https://cdn-icons-png.flaticon.com/128/4140/4140047.png" class="img">IMDb comment</div>
            <div class="card-body">
              <div
                id="carouselExampleAutoplaying"
                class="carousel slide"
                data-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    {{ product[0].reviwe1 }}
                  </div>
                  <div class="carousel-item">
                    {{ product[0].reviwe2 }}
                  </div>
                  <div class="carousel-item">
                    {{ product[0].reviwe3 }}
                  </div>
                </div>
              </div>
              <div class="card-text"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i><i class="fa-regular fa-star"></i></div>

            </div>
          </div>
        </div>
        <div class="card-group col-6">
      <div class="card h-100" >
          <img :src="product[1].img" class="card-img-top m-3 rounded-4" alt="..." style="max-width: 150px;">
          <div class="card-body">
            <div class="card-text">{{ product[1].year }}</div>
            <h5 class="card-title">{{ product[1].name }}</h5>
            <p class="card-text overflow-auto mb-5">
              {{ product[1].imdb }}<i class="fa-solid fa-star" style="color: #F9EEB6;"></i><br>
              Time : {{ product[1].time }} <br>
              Director : {{ product[1].director }}</p>
          </div>
        </div>
          <div class="card text-center">
            <div class="card-title m-3"><img src="https://cdn-icons-png.flaticon.com/128/4140/4140037.png" class="img">IMDb comment</div>
            <div class="card-body">
              <div
                id="carouselExampleAutoplaying"
                class="carousel slide"
                data-ride="carousel"
              >
              <div class="carousel-inner">
                  <div class="carousel-item active">
                    {{ product[1].reviwe1 }}
                  </div>
                  <div class="carousel-item">
                    {{ product[1].reviwe2 }}
                  </div>
                  <div class="carousel-item">
                    {{ product[1].reviwe3 }}
                  </div>
                </div>
              </div>
              <div class="card-text"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i><i class="fa-regular fa-star"></i></div>
            </div>
          </div>
        </div>
        <div class="card-group col-6">
      <div class="card h-100">
          <img :src="product[2].img" class="card-img-top m-3 rounded-4" alt="..." style="max-width: 150px;">
          <div class="card-body">
            <div class="card-text">{{ product[2].year }}</div>
            <h5 class="card-title">{{ product[2].name }}</h5>
            <p class="card-text overflow-auto mb-5">
              {{ product[2].imdb }}<i class="fa-solid fa-star" style="color: #F9EEB6;"></i><br>
              Time : {{ product[2].time }} <br>
              Director : {{ product[2].director }}</p>
          </div>
        </div>
          <div class="card text-center">
            <div class="card-title m-3"><img src="https://cdn-icons-png.flaticon.com/128/4140/4140048.png" class="img">IMDb comment</div>
            <div class="card-body">
              <div
                id="carouselExampleAutoplaying"
                class="carousel slide"
                data-ride="carousel"
              >
              <div class="carousel-inner">
                  <div class="carousel-item active">
                    {{ product[2].reviwe1 }}
                  </div>
                  <div class="carousel-item">
                    {{ product[2].reviwe2 }}
                  </div>
                  <div class="carousel-item">
                    {{ product[2].reviwe3 }}
                  </div>
                </div>
              </div>
              <div class="card-text"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-solid"></i><i class="fa-regular fa-star"></i></div>     
            </div>
          </div>
        </div>
        <div class="card-group col-6">
      <div class="card h-100" >
          <img :src="product[3].img" class="card-img-top m-3 rounded-4" alt="..." style="max-width: 150px;">
          <div class="card-body">
            <div class="card-text">{{ product[3].year }}</div>
            <h5 class="card-title">{{ product[3].name }}</h5>
            <p class="card-text overflow-auto mb-5">
              {{ product[3].imdb }}<i class="fa-solid fa-star" style="color: #F9EEB6;"></i><br>
              Time : {{ product[3].time }} <br>
              Director : {{ product[3].director }}</p>
          </div>
        </div>
          <div class="card text-center">
            <div class="card-title m-3"><img src="https://cdn-icons-png.flaticon.com/128/6997/6997662.png" class="img">IMDb comment</div>
            <div class="card-body">
              <div
                id="carouselExampleAutoplaying"
                class="carousel slide"
                data-ride="carousel"
              >
              <div class="carousel-inner">
                  <div class="carousel-item active">
                    {{ product[3].reviwe1 }}
                  </div>
                  <div class="carousel-item">
                    {{ product[3].reviwe2 }}
                  </div>
                  <div class="carousel-item">
                    {{ product[3].reviwe3 }}
                  </div>
                </div>
              </div>
              <div class="card-text"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i><i class="fa-regular fa-star"></i></div>
            </div>
          </div>
        </div>
            </div>
  </div>
  <Footer class="container-fluid"></Footer>
</template>

<style scoped>
.h-100{
  background-color: #B6DEF9;
}
.img{
  max-width: 50px;
  margin: 20px;
}
</style>
