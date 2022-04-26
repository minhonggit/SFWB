<template>
  <footer class="footer px-4">
    <div class="row align-items-center justify-content-lg-between">
      <div class="col-lg-6">
        <div class="copyright text-center text-lg-left text-muted">
          © {{ year }}
          <a
            href="https://www.creative-tim.com"
            class="font-weight-bold ml-1"
            target="_blank"
            >삼성전자제품개발팀</a
          >
        </div>
      </div>
      <div class="col-lg-6">
        <ul
          class="nav nav-footer justify-content-center justify-content-lg-end"
        >
          <li class="nav-item">
            <a
              href="https://www.creative-tim.com"
              class="nav-link"
              target="_blank"
              >노형준</a
            >
          </li>
          <li class="nav-item">
            <a
              href="https://www.creative-tim.com/presentation"
              class="nav-link"
              target="_blank"
              >이영준</a
            >
          </li>
          <li class="nav-item">
            <a
              href="https://www.creative-tim.com/blog"
              class="nav-link"
              target="_blank"
              >김민수</a
            >
          </li>
          <li class="nav-item">
            <a
              href="https://www.creative-tim.com/license"
              class="nav-link"
              target="_blank"
              >방종호</a
            >
          </li>
          <li class="nav-item">
            <a
              href="https://www.creative-tim.com/license"
              class="nav-link"
              target="_blank"
              >민홍기</a
            >
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
<style></style>
