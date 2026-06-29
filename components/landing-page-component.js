export default {
  name: 'landing-page-component',
  template: /* html */ `
    <div class="container py-4">
      <h1 class="mb-3">Story Circle</h1>
      <p class="lead">Discover short reviews for books and movies, then open each detail page to read the full notes.</p>
      <router-link to="/items" class="btn btn-primary mb-4"><i class="bi bi-journal-bookmark-fill me-1"></i>Browse Reviews</router-link>

      <h2 class="h4 mt-3">What this app does</h2>
      <p>
        Story Circle is a simple review collection for readers and viewers. It shows a small list of books and films with a calm dark style, so visitors can quickly scan titles, see category labels, and open the detail page for more information.
      </p>
      <p>
        The app keeps the same page structure as the starter template, with a home page, a review collection page, item detail pages, and an about page. The review items load from the CSV data file and display in cards for easy browsing.
      </p>
    </div>
  `,
};
