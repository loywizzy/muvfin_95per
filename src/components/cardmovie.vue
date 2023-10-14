<script setup>
import { ref } from 'vue' 
const listrecomment1 = ref([
{name:"Spider-Man: Beyond the Spider-Verse",year:"2023",link :"https://m.media-amazon.com/images/M/MV5BYWJlNThmNWMtZWE5Zi00YWJiLWJiOTQtZWY1Y2I3ZmNhMDYwXkEyXkFqcGdeQXVyMTk2OTAzNTI@._V1_.jpg",category:"Animation"},
{name:"Dungeons & Dragons: Honor Among Thieves",year:"2023",link :"https://static.displate.com/857x1200/displate/2023-04-28/dd2c5d12bc5c640c1375fd132f225679_842ac8baa3fed855e44caccaf7714d6c.jpg",category:"Fantasy"},
{name:"Blue's Big City Adventure",year:"2022",link :"https://imgsrc.cineserie.com/2023/06/2423989.jpg?ver=1",category:"Adventure"}])

const listrecomment2 = ref([
{name:"A través del mar",year:"2023",link :"https://cdn.binalogue.com/atdm-ka-responsive.png?tr=w-500,dpr-2.625&lazyOriginal",category:"action"},
{name:"One Ranger",year:"2023",link :"https://m.media-amazon.com/images/I/71PfhiAKbUL._AC_UF894,1000_QL80_.jpg", category:"Thriller"},
{name:"The Out-Laws",year:"2022",link :"https://m.media-amazon.com/images/M/MV5BNWUwOTk2MGQtODgwYS00ZjA1LWI4OWQtZmUxNTdlYzJiOGNiXkEyXkFqcGdeQXVyMTUzOTczNzYx._V1_.jpg",category:"action"}])

const listrecomment3 = ref([
{name:"Who Done It: The Clue Documentary",year:"2022",link :"https://images.sr.roku.com/idType/roku/context/global/id/bde953ef74d752f3b6922c8a43122cdd/rokuFeed/assets/02e180f84f7a5a06ac05ef08d9ef5852.jpg/magic/396x0/filters:quality(70)",category:"Adventure"},
{name:"An Action Hero",year:"2022",link :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnUryz2we0N7WrqraIPruDhIz9gPJBzRd9d7jDZlcswDyokvr9DdkA12A59cSezgwwgMo&usqp=CAU",category:"Action"},
{name:"Stasikomödie",year:"2022",link :"https://m.media-amazon.com/images/I/513RF3DUhSL._UXNaN_FMjpg_QL85_.jpg",category:"Comedy"}])
</script>

<template>
    <div id="carouselId" class="carousel slide p-4" data-bs-ride="carousel">
        <div class="carousel-inner" role="listbox">
            <div class="carousel-item active">
        <div class="row justify-content-center">
        <div class="card mb-3 col m-3" style="max-width: 400px;" v-for="i in listrecomment1">
            <div class="row g-0">
                <div class="col-md-8 align-self-center">
                    <div class="card-body">
                        <h5 class="card-title">{{ i.name }}</h5>
                        <p class="card-text">{{ i.category }}</p>

                    </div>
                </div>
                <div class="col-md-4">
                    <img :src="i.link" class="img-fluid p-2 rounded-4" alt="...">
                </div>
            </div>   
        </div>
        </div>
            </div>
            <div class="carousel-item">
        <div class="row justify-content-center">
        <div class="card mb-3 col m-3" style="max-width: 400px;" v-for="i in listrecomment2">
            <div class="row g-0">
                <div class="col-md-8 align-self-center">
                    <div class="card-body">
                        <h5 class="card-title">{{ i.name }}</h5>
                        <p class="card-text">CATEGORY : {{ i.category }}</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <img :src="i.link" class="img-fluid p-2 rounded-4" alt="..." >
                </div>
            </div>   
        </div>
        </div>
            </div>
            <div class="carousel-item">
        <div class="row justify-content-center">
        <div class="card mb-3 col m-3" style="max-width: 400px;" v-for="i in listrecomment3">
            <div class="row g-0">
                <div class="col-md-8 align-self-center">
                    <div class="card-body">
                        <h5 class="card-title">{{ i.name }}</h5>
                        <p class="card-text">CATEGORY : {{ i.category }}</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <img :src="i.link" class="img-fluid p-2 rounded-4" alt="...">
                </div>
            </div>   
        </div>
        </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<style scoped>
.card{
    background-color: #F9EEB6;
}
</style>