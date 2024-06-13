document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
     
var totalCodes = 10; // Total number of code snippets
        for (var i = 1; i <= totalCodes; i++) {
            var textareaId = "code" + i;
            var editor = CodeMirror.fromTextArea(document.getElementById(textareaId), {
                mode: "jsx",
                theme: "dracula",  // Optional theme
                lineNumbers: true,
                keyMap: "sublime" // Optional keymap
            });
        }


        function renderBlogs(blogs, containerId, paginationId) {
            const container = $(`#${containerId}`);
            const pagination = $(`#${paginationId}`);
            const maxBlogsPerPage = 6;
            const totalPages = Math.ceil(blogs.length / maxBlogsPerPage);

            function displayPage(page) {
                container.empty();
                const start = (page - 1) * maxBlogsPerPage;
                const end = start + maxBlogsPerPage;
                const pageBlogs = blogs.slice(start, end);

                pageBlogs.forEach(blog => {
                    const blogCard = `
                        <div class="card mt-3">
                            <a href="${blog.link}">
                                <img src="${blog.img}" alt="Blog Post Image">
                            </a>
                            <div class="card-content">
                                <h5>${blog.title}</h5>
                                <p class="date">${blog.date} <span class="read-time">${blog.readTime}</span></p>
                            </div>
                        </div>
                    `;
                    container.append(blogCard);
                });

                pagination.empty();
                for (let i = 1; i <= totalPages; i++) {
                    const pageButton = `<button class="page-btn" data-page="${i}">${i}</button>`;
                    pagination.append(pageButton);
                }

                $(`.page-btn[data-page=${page}]`).addClass('active');
                $('.page-btn').on('click', function() {
                    const page = $(this).data('page');
                    displayPage(page);
                });
            }

            displayPage(1);
        }

        $(document).ready(function() {
            renderBlogs(allBlogs, 'all-blogs', 'all-pagination');
            renderBlogs(systemDesignBlogs, 'system-design-blogs', 'system-design-pagination');
            renderBlogs(devBlogs, 'dev-blogs', 'dev-pagination');
            renderBlogs(dsaBlogs, 'dsa-blogs', 'dsa-pagination');
        });