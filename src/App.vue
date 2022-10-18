<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition || 'top-slide'">
      <component :is="Component" :key="route.path" />
    </transition>
  </router-view>
</template>
