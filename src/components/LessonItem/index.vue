<template>
    <ol class="mt-4 pb-6 border-b border-ocean-300">
        <div class="flex justify-between mb-4">
            <h3 class="font-bold capitalize text-gray-100">{{ weekday }}</h3>
            <time class="text-gray-200">{{ date }}</time>
        </div>
        <div
            class="relative circle-decoration cursor-pointer bg-ocean-800 p-4 rounded-md border border-gray-600 hover:border-ocean-300"
            @click="emit('change-lesson', id, idx)"
        >
            <time class="text-ocean-300 mr-2"> {{ hour }} </time>
            <span>{{ title }}</span>
        </div>
    </ol>
</template>
<script>
import { splitedAndFormattedDate } from '../../utils/date';
export default {
    props: {
        lecture: { type: Object, required: true },
        index: { type: Number, required: true }
    },
    setup(props, { emit }) {
        const [weekday, date, hour] = splitedAndFormattedDate(props.lecture.release_date);

        return {
            weekday,
            date,
            hour,
            title: props.lecture.title,
            id: props.lecture.id,
            emit,
            idx: props.index
        };
    }
};
</script>
<style lang="postcss" scoped>
ol.active > .circle-decoration {
    @apply border-ocean-300;
}

.circle-decoration::before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    left: -5.5px;
    transform: translateY(-50%);
    background-color: #031326;
    border: 1px solid #4b5563;
}

ol.active > .circle-decoration::before,
.circle-decoration:hover::before {
    border-color: #167bf7;
}
</style>
