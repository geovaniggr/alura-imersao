<template>
    <alura-header />
    <lecture-container />
</template>

<script>
// @ is an alias to /src
import AluraHeader from '@/components/AluraHeader';
import LectureContainer from '@/components/LectureContainer';

export default {
    name: 'Home',
    components: {
        AluraHeader,
        LectureContainer
    }
};
</script>
