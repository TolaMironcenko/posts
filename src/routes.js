const host = 'https://jsonplaceholder.typicode.com'

const routes = {
    posts: () => [host, 'posts'].join('/'),
}

export default routes;