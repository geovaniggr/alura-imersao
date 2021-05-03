<template>
    <main class="max-w-6xl m-auto p-8 h-4/6 text-white lg:flex lg:items-start lg:flex-wrap lg:gap-x-8">
        <div class="lg:flex-grow lg:order-1">
            <iframe
                width="560"
                height="410"
                :src="urlToEmbeded(state.actual.video_url)"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                class="w-full lg:min-h[410px]"
            ></iframe>
        </div>
        <article class="mt-8 w-full lg:order-3">
            <h1 class="text-3xl font-bold tracking-wider my-10">{{ state.actual.title }}</h1>
            <p class="max-w-2xl mb-8 md:text-lg">{{ state.actual.description }}</p>
        </article>
        <aside
            class="bg-ocean-700 rounded-md bg-ocean p-6 lg:w-72 md:p-8 lg:order-2 lg:h-[410px] overflow-y-scroll shadow-lg"
        >
            <div class="flex justify-evenly mb-8">
                <span class="button" :class="{ 'border border-ocean-300': state.isLecture }" @click="handleChangeType()"
                    >Aulas</span
                >
                <span
                    class="button"
                    :class="{ 'border border-ocean-300': !state.isLecture }"
                    @click="handleChangeType()"
                    >Lives</span
                >
            </div>
            <ul v-if="state.isLecture">
                <lesson-item
                    v-for="(lesson, index) of state.lectures"
                    :key="index"
                    :lecture="lesson"
                    @change-lesson="handleChangeLesson"
                    class="last:border-0"
                    :active="lesson.isActive || lesson.id === state.actual.id"
                />
            </ul>
            <ul v-else>
                <lesson-item
                    v-for="(lesson, index) of state.lives"
                    :key="index"
                    :lecture="lesson"
                    @change-lesson="handleChangeLesson"
                    class="last:border-0"
                />
            </ul>
        </aside>
        <div class="mt-8 lg:flex lg:gap-x-4 lg:order-4">
            <extra-content-card v-for="(card, index) of cards" :key="index" />
        </div>
    </main>
</template>

<script>
import LessonItem from '../LessonItem';
import ExtraContentCard from '../ExtraContentCard';
import { reactive } from 'vue';

export default {
    components: {
        LessonItem,
        ExtraContentCard
    },
    setup() {
        const cards = [1, 2, 3];
        const lectures = [
            {
                id: 8,
                immersion_id: 8,
                title: 'Aula 1: Colocando nossa roupa',
                release_date: '2021-05-03T22:05:00.540Z',
                video_url: 'https://www.youtube.com/watch?v=_Mx64Rkv92c',
                type: 'VIDEO'
            },
            {
                id: 9,
                immersion_id: 8,
                position: 2,
                title: 'Aula 2: Entrando na Agua',
                release_date: '2021-05-04T22:08:00.540Z',
                description: 'Nessa segunda aula iremos dar nosso primeiro passo nesse oceano',
                video_url: 'https://www.youtube.com/watch?v=6OHWgGWFoAU',
                type: 'VIDEO'
            },
            {
                id: 10,
                immersion_id: 8,
                position: 3,
                title: 'Aula 3: Primeiro Mergulho',
                release_date: '2021-05-05T22:14:00.540Z',
                description: 'Iremos começar a aprofundar nessa tecnologia',
                video_url: 'https://www.youtube.com/watch?v=imB0QVoNrGc',
                type: 'VIDEO'
            },
            {
                id: 11,
                immersion_id: 8,
                position: 4,
                title: 'Aula 4: Explorando o Oceano',
                release_date: '2021-05-06T22:16:00.540Z',
                description: 'Iremos encontrar os tesouros perdidos no fundo do mar',
                video_url: 'https://www.youtube.com/watch?v=31ljFqO6kZQ',
                type: 'VIDEO'
            },
            {
                id: 12,
                immersion_id: 8,
                position: 4,
                title: 'Aula 5: Voltando a Superfície',
                release_date: '2021-05-07T22:21:00.540Z',
                description: 'Hora de voltar a superficie para guardar todo nosso aprendizado',
                video_url: 'https://www.youtube.com/watch?v=f46tw7lOt_0',
                type: 'VIDEO'
            }
        ];

        const lives = [
            {
                id: 8,
                immersion_id: 8,
                title: 'Live de Abertura',
                release_date: '2021-05-03T22:05:00.540Z',
                video_url: 'https://www.youtube.com/watch?v=_Mx64Rkv92c',
                type: 'VIDEO'
            },
            {
                id: 9,
                immersion_id: 8,
                position: 2,
                title: 'Live de Encerramento',
                release_date: '2021-05-04T22:08:00.540Z',
                description: 'Nessa segunda aula iremos dar nosso primeiro passo nesse oceano',
                video_url: 'https://www.youtube.com/watch?v=6OHWgGWFoAU',
                type: 'VIDEO'
            }
        ];

        const state = reactive({
            actual: {
                id: 8,
                immersion_id: 8,
                position: 1,
                title: 'Aula 1: Colocando nossa roupa',
                release_date: '2021-05-03T22:19:03.540Z',
                description: 'Iremos compreender os desafios que iremos enfrentar nessa imersão',
                video_url: 'https://www.youtube.com/watch?v=_Mx64Rkv92c',
                type: 'VIDEO'
            },
            lectures: lectures,
            lives: lives,
            isLecture: true
        });

        function urlToEmbeded(rawURL) {
            const [_, url] = rawURL.match(/watch\?v=(\w+)$/);

            return `https://www.youtube.com/embed/${url}`;
        }

        function handleChangeType() {
            state.isLecture = !state.isLecture;
        }

        function handleChangeLesson(id) {
            if (state.isLecture) {
                const nextLecture = state.lectures.find(lecture => lecture.id === id);

                state.actual = nextLecture;
            } else {
                const nextLive = state.lives.find(live => live.id === id);
                state.actual = nextLive;
            }
        }

        return {
            cards,
            state,
            lectures,
            handleChangeLesson,
            handleChangeType,
            urlToEmbeded
        };
    }
};
</script>

<style lang="postcss">
.button {
    @apply bg-ocean-800 cursor-pointer py-2 mr-2 px-8 rounded-md font-bold text-base text-center uppercase w-32;
}
</style>
