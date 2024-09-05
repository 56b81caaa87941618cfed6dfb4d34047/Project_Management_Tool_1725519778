<!--
INSTRUCTION: Summary: This component contains the app's logo and name in a large, bold font, and on the same line.
INSTRUCTION: There is an additional line of subtext underneath the first line.
INSTRUCTION: Both of these lines are center aligned.
-->

<template>
    <footer id="footer-section" style="min-height: 350px"         class="flex-1 bg-gradient-to-r from-purple-900 to-pink-600 bg-opacity-50 backdrop-filter backdrop-blur-lg">
        <div id="footer-container" class="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
            <hr id="footer-divider" class="my-6 border-pink-300 sm:mx-auto lg:my-8">
            <div id="footer-content" class="text-center">
                <div class="flex">
                    <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-5 text-2xl font-semibold text-white hover:text-pink-200 transition-colors duration-300">
                        <img id="footer-logo" src="https://makeinfinite-mentat-dev.azurewebsites.net/get_image/Project_Management_Tool_1725519778/logo.svg" class="h-6 mr-3 sm:h-9 filter invert" alt="Landwind Logo" />
                        ProjectCraft
                    </a>
                </div>
            </div>
            <div class="flex">
                <div id="footer-text" class="flex-1 block text-sm text-center text-pink-200">
                    © 2023 ProjectCraft. Empowering your project management journey.
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'SimpleFooterComponent',
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
}
</script>
