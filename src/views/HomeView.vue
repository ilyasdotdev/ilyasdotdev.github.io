<script setup lang="ts">
const email = 'm.ilyas@live.com'
const whatsappUrl = 'https://wa.me/923218916364'
const linkedinUrl = 'https://www.linkedin.com/in/muhammad-ilyas-2012/'
const githubUrl = 'https://github.com/ilyasdotdev'

// Plain #anchors would be read as routes by the hash router, so scroll by hand
const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

const stack = ['Java', 'Spring Boot', 'Vue 3', 'TypeScript', 'MongoDB', 'PrimeVue', 'Docker', 'Lucene']

const projects = [
  {
    to: '/projects/restaurant-management-system',
    title: 'Restaurant Management System',
    tag: 'Restaurants',
    image: '/images/rms/pos-floor.webp',
    text: 'Point of sale, waiter phones, kitchen screens, delivery, reservations, inventory, accounting and reports for multi-branch restaurants.',
    points: ['Order to kitchen in under a second', 'Each branch keeps working offline', 'Optional cloud head office']
  },
  {
    to: '/projects/generic-pos',
    title: 'Generic POS',
    tag: 'Retail shops',
    image: null,
    text: 'A fast point of sale for small shops: kiryana, hardware, electrical, cosmetics, mobile accessories, auto parts, garments and more.',
    points: ['Scan to screen in under 50 ms', 'Khata, stock and suppliers built in', 'Nine shop types, one product']
  }
]

const principles = [
  {
    icon: 'pi pi-wifi',
    title: 'Offline first',
    text: 'The software runs on the shop or restaurant network, so a lost internet connection never stops a sale.'
  },
  {
    icon: 'pi pi-check-square',
    title: 'Numbers that agree',
    text: 'Sales, stock and cash are written together in one step, so the till and the reports never tell different stories.'
  },
  {
    icon: 'pi pi-bolt',
    title: 'Fast at the counter',
    text: 'Every screen is built for a queue of customers: barcode first, keyboard shortcuts, receipts in under a second.'
  },
  {
    icon: 'pi pi-cog',
    title: 'Simple to run',
    text: 'One server, ready-made install, backup and upgrade scripts, and fair file-based licensing.'
  }
]
</script>

<template>
  <div class="w-full">
    <!-- Hero -->
    <section class="relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-green-950 text-white">
      <div class="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-green-500/20 blur-3xl" />
      <div class="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />
      <div class="container mx-auto px-4 py-20 lg:py-28 relative">
        <p class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-green-200">
          <span class="h-2 w-2 rounded-full bg-green-400" /> Open to new projects
        </p>
        <h1 class="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl">
          Hi, I'm Muhammad Ilyas.
          <span class="block bg-gradient-to-r from-green-300 to-emerald-200 bg-clip-text text-transparent">
            I build software businesses run on.
          </span>
        </h1>
        <p class="mt-6 max-w-2xl text-lg text-gray-300">
          Point of sale, inventory, accounting and reports for restaurants and retail shops.
          Built to be fast at the counter and to keep working when the internet does not.
        </p>
        <div class="mt-8 flex flex-wrap gap-3">
          <button type="button" @click="scrollTo('projects')"
                  class="inline-flex items-center gap-2 rounded-lg bg-green-500 px-5 py-3 font-bold text-gray-950 hover:bg-green-400 transition">
            <i class="pi pi-arrow-down" /> See my projects
          </button>
          <a :href="`mailto:${email}`"
             class="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 font-bold hover:bg-white/10 transition">
            <i class="pi pi-envelope" /> Get in touch
          </a>
        </div>
        <ul class="mt-12 flex flex-wrap gap-2">
          <li v-for="s in stack" :key="s"
              class="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-sm text-gray-300">{{ s }}</li>
        </ul>
      </div>
    </section>

    <div class="container mx-auto px-4">
      <!-- Projects -->
      <section id="projects" class="py-16 scroll-mt-16">
        <p class="text-sm font-bold uppercase tracking-wider text-green-700">Projects</p>
        <h2 class="mt-2 text-3xl lg:text-4xl font-bold">Products I have built</h2>
        <div class="mt-10 grid gap-8 lg:grid-cols-2">
          <RouterLink v-for="p in projects" :key="p.to" :to="p.to"
                      class="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <div class="relative aspect-[16/9] overflow-hidden bg-gray-100">
              <img v-if="p.image" :src="p.image" :alt="p.title"
                   class="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105" />
              <!-- Generic POS has no screenshots yet, so draw a small till instead -->
              <div v-else
                   class="flex h-full w-full items-center justify-center bg-gradient-to-br from-green-700 to-emerald-900 p-6">
                <div class="w-full max-w-sm rounded-xl bg-white/95 p-4 text-gray-800 shadow-2xl font-mono text-xs transition duration-500 group-hover:scale-105">
                  <div class="flex justify-between border-b border-dashed border-gray-300 pb-2 font-bold">
                    <span>Counter 1</span><span>F9 Pay</span>
                  </div>
                  <div class="flex justify-between py-1"><span>Basmati rice 5 kg</span><span>1,850</span></div>
                  <div class="flex justify-between py-1"><span>Cooking oil 1 L × 2</span><span>1,180</span></div>
                  <div class="flex justify-between py-1"><span>Tea 475 g</span><span>1,095</span></div>
                  <div class="flex justify-between border-t border-dashed border-gray-300 pt-2 text-sm font-bold">
                    <span>Total</span><span class="text-green-700">Rs 4,125</span>
                  </div>
                </div>
              </div>
              <span class="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-green-800 shadow">{{ p.tag }}</span>
            </div>
            <div class="flex flex-1 flex-col p-6">
              <h3 class="text-2xl font-bold">{{ p.title }}</h3>
              <p class="mt-2 text-gray-600">{{ p.text }}</p>
              <ul class="mt-4 space-y-1">
                <li v-for="pt in p.points" :key="pt" class="flex gap-2 text-gray-700">
                  <i class="pi pi-check-circle text-green-700 mt-1" />{{ pt }}
                </li>
              </ul>
              <span class="mt-auto pt-6 inline-flex items-center gap-2 font-bold text-green-700">
                View project <i class="pi pi-arrow-right transition group-hover:translate-x-1" />
              </span>
            </div>
          </RouterLink>
        </div>
      </section>

      <!-- Principles -->
      <section class="py-16 border-t border-gray-200">
        <p class="text-sm font-bold uppercase tracking-wider text-green-700">How I build</p>
        <h2 class="mt-2 text-3xl lg:text-4xl font-bold">What every product gets</h2>
        <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="pr in principles" :key="pr.title" class="rounded-2xl bg-gray-50 p-6">
            <span class="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-700">
              <i :class="[pr.icon, 'text-xl']" />
            </span>
            <h3 class="mt-4 text-lg font-bold">{{ pr.title }}</h3>
            <p class="mt-2 text-gray-600">{{ pr.text }}</p>
          </div>
        </div>
      </section>

      <!-- Open source -->
      <section class="py-16 border-t border-gray-200">
        <p class="text-sm font-bold uppercase tracking-wider text-green-700">Open source</p>
        <h2 class="mt-2 text-3xl lg:text-4xl font-bold">Libraries</h2>
        <RouterLink to="/os/lib/spring-boot-microservice-security-jwt"
                    class="group mt-8 flex flex-col sm:flex-row sm:items-center gap-5 rounded-2xl border border-gray-200 p-6 transition hover:border-green-600 hover:shadow-lg">
          <span class="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gray-900 text-green-400">
            <i class="pi pi-shield text-2xl" />
          </span>
          <div class="flex-1">
            <h3 class="text-xl font-bold">Spring Boot Microservice Security JWT</h3>
            <p class="mt-1 text-gray-600">
              Set up JWT authentication in a Spring Boot service with RSA keys, scopes and custom claims.
            </p>
          </div>
          <span class="inline-flex items-center gap-2 font-bold text-green-700">
            Docs <i class="pi pi-arrow-right transition group-hover:translate-x-1" />
          </span>
        </RouterLink>
      </section>
    </div>

    <!-- Contact -->
    <section class="bg-gray-950 text-white">
      <div class="container mx-auto px-4 py-16 flex flex-col lg:flex-row lg:items-center gap-8 justify-between">
        <div>
          <h2 class="text-3xl font-bold">Have a business that needs software?</h2>
          <p class="mt-2 text-gray-400">Ask for a demo of either product, or tell me what you need.</p>
        </div>
        <div class="flex flex-wrap gap-3">
          <a :href="whatsappUrl" target="_blank"
             class="inline-flex items-center gap-2 rounded-lg bg-green-500 px-5 py-3 font-bold text-gray-950 hover:bg-green-400 transition">
            <i class="pi pi-whatsapp" /> WhatsApp
          </a>
          <a :href="`mailto:${email}`"
             class="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 font-bold hover:bg-white/10 transition">
            <i class="pi pi-envelope" /> Email
          </a>
          <a :href="linkedinUrl" target="_blank"
             class="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 font-bold hover:bg-white/10 transition">
            <i class="pi pi-linkedin" /> LinkedIn
          </a>
          <a :href="githubUrl" target="_blank"
             class="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 font-bold hover:bg-white/10 transition">
            <i class="pi pi-github" /> GitHub
          </a>
        </div>
      </div>
      <p class="pb-8 text-center text-sm text-gray-500">© {{ new Date().getFullYear() }} IlyasDotDev</p>
    </section>
  </div>
</template>
