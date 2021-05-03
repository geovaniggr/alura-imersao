<template>
    <article
        class="bg-ocean-700 rounded-md shadow-lg drop-shadow-md mb-5 hover:transform duration-200 hover:scale-105 hover:border hover:border-ocean-300"
    >
        <header class="relative border-b px-4 py-3 border-gray-600">
            <span class="text-gray-400 tex-sm font-bold"> 01 </span>
        </header>
        <div class="pb-10 px-6">
            <h3 class="mt-8 mb-4 text-2xl text-gray-200 font-bold">Código da Aula</h3>
            <p class="text-base text-gray-300">Acesse o link do github para obter o código produzido durante a aula</p>
        </div>
    </article>
</template>
<style lang="postcss" scoped>
article header::before {
    content: '';
    display: block;
    position: absolute;
    height: 0.85rem;
    width: 0.85rem;
    background-image: url('../../assets/images/arrow-right.svg');
    background-size: contain;
    background-repeat: no-repeat;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
}
</style>
