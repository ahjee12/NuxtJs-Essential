<template>
  <div>
    <!-- <Tutorial /> -->
    <NuxtLogo />
    {{ $store.state.user.email }}
  </div>
</template>

<script>
// nuxt.config.js components true설정하면
// import하지 않아도 파일 이름을 가진 컴포넌트 자동으로 가져옴
// but, directory 구조로 돼 있는 건 자동 추적 못 함!
// import NuxtLogo from "~/components/NuxtLogo";
export default {
  // components: { Logo },
  // name: "IndexPage",
};
</script>
