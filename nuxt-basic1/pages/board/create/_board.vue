<template>
  <div class="container">
    <!-- $route은 개발자 도구로 확인 -->
    <!-- http://localhost:3000/board/create/user -->
    <div>{{ $route.params.board }}게시판</div>
    <MainButton @click="movePage">이동</MainButton>
  </div>
</template>

<script>
export default {
  methods: {
    movePage() {
      this.$router.push({
        name: "board-create-board",
        params: {
          board: "long-board-name",
        },
        query: {
          page: 5,
        },
      });
    },
  },
};
</script>
