<template>
  <ul>
    <li
      v-for="(nav, index) in navs"
      :key="index"
      :class="{ 'mb-4': index !== navs.length - 1 }"
    >
      <LayoutNavItem
        :link="nav.link"
        :icon="nav.icon"
        :label="nav.label"
        :is-active="isActive(nav.routeName)"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
interface Nav {
  icon: string;
  link: string;
  label: string;
  routeName: string;
}

const navs: Nav[] = [
  {
    icon: "i-heroicons-home",
    link: "/",
    label: "Dashboard",
    routeName: "index",
  },
  {
    icon: "i-heroicons-window",
    link: "/competences",
    label: "Competences",
    routeName: "competences",
  },
];

const route = useRoute();

const isActive = (navRoutename: string) => {
  const name = (route.name || "") as string;

  return name.startsWith(navRoutename);
};
</script>
