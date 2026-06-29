export default {
  name: 'navbar-component',
  template: /* html */ `
    <nav class="navbar sticky-top border-bottom px-3">
      <span class="navbar-brand mb-0 h1"><i class="bi bi-book-half me-2"></i>Story Circle</span>

      <div class="ms-auto d-flex gap-2">
        <router-link class="btn btn-outline-primary btn-sm" to="/">
          <i class="bi bi-house me-1"></i>Home
        </router-link>
        <router-link class="btn btn-outline-primary btn-sm d-flex align-items-center" to="/items">
          <i class="bi bi-journal-bookmark me-1"></i>Reviews
        </router-link>
        <router-link class="btn btn-outline-primary btn-sm" to="/about">
          <i class="bi bi-info-circle me-1"></i>About
        </router-link>
      </div>
    </nav>
  `,
};
