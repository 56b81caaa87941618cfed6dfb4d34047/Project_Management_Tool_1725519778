<template>
  <main class="flex justify-center align-center p-10 bg-gradient-to-br from-purple-900 to-pink-600 min-h-screen">
    <div class="w-fit max-w-lg p-8 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg border border-purple-300 border-opacity-30">
      <div>
        <h3 class="text-white font-semibold text-xl">Let's Bring Your Project to Life</h3>
        <p class="mt-3 text-pink-200 w-fit">Tell us about your vision, and we'll help you make it a reality</p>
      </div>
      <form @submit.prevent class="space-y-5 mt-5">
        <div>
          <label class="font-medium text-white">Your Name</label>
          <input
            type="text"
            required
            class="w-full mt-2 px-3 py-2 text-white bg-purple-800 bg-opacity-50 border border-pink-300 focus:border-pink-500 shadow-sm rounded-lg placeholder-pink-200"
          />
        </div>
        <div>
          <label class="font-medium text-white">Email Address</label>
          <input
            type="email"
            required
            class="w-full mt-2 px-3 py-2 text-white bg-purple-800 bg-opacity-50 border border-pink-300 focus:border-pink-500 shadow-sm rounded-lg placeholder-pink-200"
          />
        </div>
        <div>
          <label class="font-medium text-white">Phone Number (Optional)</label>
          <div class="relative mt-2">
            <select v-model="countryCode" class="text-sm bg-purple-800 bg-opacity-50 outline-none rounded-lg h-full text-white border border-pink-300">
              <option value="US">US</option>
              <option value="ES">ES</option>
              <option value="MR">MR</option>
            </select>
            <input
              type="number"
              :placeholder="getPhoneNumberPlaceholder(countryCode)"
              required
              class="w-full pl-4 pr-3 py-2 appearance-none bg-purple-800 bg-opacity-50 border border-pink-300 focus:border-pink-500 shadow-sm rounded-lg text-white placeholder-pink-200"
            />
          </div>
        </div>
        <div>
          <label class="font-medium text-white">Project Title</label>
          <ul class="grid gap-y-2 gap-x-6 flex-wrap grid-cols-2 mt-3">
            <li
              v-for="(item, idx) in servicesItems"
              :key="idx"
              class="flex gap-x-3 text-xs justify-between space-between"
            >
              <div>
                <input
                  :id="'service-' + idx"
                  type="checkbox"
                  class="relative flex w-5 h-5 bg-purple-800 bg-opacity-50 rounded-md border border-pink-300 ring-offset-2 ring-pink-600 duration-150 checkbox-item peer cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45 text-white"
                />
              </div>
              <label :for="'service-' + idx" class="cursor-pointer text-pink-200">{{ item }}</label>
            </li>
          </ul>
        </div>
        <div>
          <label class="font-medium text-white">Describe Your Project Idea</label>
          <textarea
            required
            class="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-purple-800 bg-opacity-50 border border-pink-300 focus:border-pink-500 shadow-sm rounded-lg text-white placeholder-pink-200"
          ></textarea>
        </div>
        <button class="w-full px-4 py-2 text-white font-medium bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 active:from-pink-700 active:to-purple-700 rounded-lg duration-150 shadow-lg">
          Estimated Project Timeline
        </button>
      </form>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      expanded: false,
      data: null,
      servicesItems: [
        'Project Planning',
        'Design & Prototyping',
        'Development & Implementation',
        'Project Management',
      ],
      countryCode: 'US',
    };
  },
  methods: {
    getPhoneNumberPlaceholder(countryCode) {
      switch (countryCode) {
        case 'US':
          return '+1 (555) 000-0000';
        case 'ES':
          return '+34 000 000 000';
        case 'MR':
          return '+222 000 0000';
        default:
          return '+1 (555) 000-0000';
      }
    },
  },
};
</script>

<style scoped>
</style>
