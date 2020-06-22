
<template>
  <header class="hero">
    <img src="/kb/images/telework.png" alt="hero" />
    <h1>定义新时代的工作方式</h1>
    
    <Features />
  </header>
</template >

<script>
import RoleLinks from "./RoleLinks";
import Features from "./Features";
export default {
  components: {
    RoleLinks,
    Features
  }
};
</script>