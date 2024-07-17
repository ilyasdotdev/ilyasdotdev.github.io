<script lang="ts" setup>
import { ref } from 'vue'
import Menubar from 'primevue/menubar'
import Badge from 'primevue/badge'
import Avatar from 'primevue/avatar'
import { useRouter } from 'vue-router'

const router = useRouter()

const items = ref([
  {
    label: 'Libraries',
    icon: 'pi pi-book',
    items: [
      {
        label: 'Spring JWT Auth',
        command: () => router.push('/os/lib/spring-jwt-auth')
      }
    ]
  },
  {
    label: 'Projects',
    icon: 'pi pi-search',
    items: [
      {
        label: 'Coming soon'
      }
    ]
  }
])
</script>

<template>
  <Menubar :model="items">
    <template #start>
      <RouterLink to="/" class="flex items-center">
        <Avatar image="/favicon.ico" shape="circle" class="mr-2" />
        <h1 class="font-bold text-green-700">IlyasDotDev</h1>
      </RouterLink>
    </template>
    <template #item="{ item, props, hasSubmenu, root }">
      <a v-ripple class="flex items-center" v-bind="props.action">
        <span :class="item.icon" />
        <span class="ml-2">{{ item.label }}</span>
        <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
        <span v-if="item.shortcut"
              class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{ item.shortcut
          }}</span>
        <i v-if="hasSubmenu"
           :class="['pi pi-angle-down', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"></i>
      </a>
    </template>
    <template #end>
      <a href="https://www.linkedin.com/in/muhammad-ilyas-2012/" target="_blank"><i
        class="pi pi-linkedin text-blue-600"></i></a>
    </template>
  </Menubar>
</template>

<style scoped>
</style>