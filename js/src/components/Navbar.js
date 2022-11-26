export default {
  props: ["mirror", "connected"],

  template: `
    <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand d-flex align-items-center" href="#">
                <h6 class="ms-2 mb-0">Trabajo final</h6>
            </a>
            <div class="form-check form-switch">
            <label class="form-check-label text-white small"><b>Integrantes: </label><br>
            <label class="form-check-label text-white small">Morales, Elvis</label><br>
            <label class="form-check-label text-white small">Gómez, Aldo</label>
        </div>
        </div>
    </nav>
    `,
};
