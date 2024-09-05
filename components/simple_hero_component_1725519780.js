<!--
INSTRUCTION: Summary: The hero component contains the following two parts:
INSTRUCTION: - To the left: There is a hero title text in h1 heading. Underneath it, a hero subtitle line of text. All this text is left-aligned. Underneath this, there are two white buttons in the same line, both justified in alignment.
INSTRUCTION: - To the right: There is an image relevant to the app.
-->

<template>
    <section id="hero-section" style="min-height: 190px"  class="bg-gradient-to-br from-purple-900 via-pink-800 to-indigo-900 flex-1">
        <div id="hero-container" class="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
            <!-- Left section containing title and buttons -->
            <div id="hero-text-container" class="mr-auto place-self-center lg:col-span-7 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-8 shadow-lg">
                <div id="hero-title-container-text" class="flex">
                    <h1 id="hero-title" class="flex-1 max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-pink-200">Transform Ideas into Cosmic Reality</h1>
                </div>
                <div id="hero-subtitle-container" class="flex">
                    <p id="hero-subtitle" class="flex-1 max-w-2xl mb-6 font-light text-purple-200 lg:mb-8 md:text-lg lg:text-xl">Your Ultimate Celestial Project Creation Platform</p>
                </div>
                <div id="hero-buttons-container" class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                    <div id="hero-button-1-container" class="flex">
                        <a id="hero-button-1" href="https://github.com/themesberg/landwind" class="flex-1 items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-white bg-pink-600 bg-opacity-70 rounded-lg sm:w-auto hover:bg-pink-500 focus:ring-4 focus:ring-pink-300 transition duration-300 ease-in-out">Start Your Cosmic Journey</a>
                    </div>
                    <div id="hero-button-2-container" class="flex">
                        <a id="hero-button-2" href="https://www.figma.com/community/file/1125744163617429490" class="flex-1 items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-white bg-purple-600 bg-opacity-70 rounded-lg sm:w-auto hover:bg-purple-500 focus:ring-4 focus:ring-purple-300 transition duration-300 ease-in-out">Explore Celestial Features</a>
                    </div>
                </div>
            </div>
            <!-- Right section containing image -->
            <div id="hero-image-container" class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img id="hero-image" src="https://makeinfinite-mentat-dev.azurewebsites.net/get_image/Project_Management_Tool_1725519778/hero.png" alt="hero image" class="rounded-lg shadow-lg">
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "SimpleHeroComponent",
    data() {
        return {
            expanded: false,
            tab: null
        };
    }
};
</script>
