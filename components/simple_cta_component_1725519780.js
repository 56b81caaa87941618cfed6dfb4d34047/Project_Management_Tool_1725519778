<!-- 
INSTRUCTION: Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
-->
<template>
    <section id="cta-component" style="min-height: 430px" class="bg-gradient-to-br from-purple-900 to-pink-600 flex-1 p-8">
        <div id="cta-inner-container" class="max-w-screen-xl mx-auto bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-8">
            <div id="cta-content" class="max-w-screen-sm mx-auto text-center">
                <div id="cta-title-container" class="flex">
                    <h2 id="cta-title" class="flex-1 mb-4 text-3xl font-extrabold leading-tight tracking-tight text-white">
                        Turn Your Ideas into Cosmic Reality
                    </h2>
                </div>

                <div id="cta-subtitle-container" class="flex">
                    <p id="cta-subtitle" class="flex-1 mb-6 font-light text-pink-200 md:text-lg">
                        Effortlessly create, manage, and track your projects in a surreal, otherworldly landscape
                    </p>
                </div>

                <div id="cta-button-container" class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <a id="cta-button" href="#" class="flex-1 text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 transition duration-300 ease-in-out transform hover:scale-105">
                        <i class='bx bx-rocket mr-2'></i>
                        Launch Your Cosmic Project
                    </a>
                    <a id="free-developer-button" href="#" class="flex-1 text-pink-200 bg-transparent border border-pink-300 hover:bg-pink-900 hover:bg-opacity-30 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 transition duration-300 ease-in-out transform hover:scale-105">
                        <i class='bx bx-code-alt mr-2'></i>
                        Free for Developers
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            expanded: false,
            tab: null
        };
    }
};
</script>
