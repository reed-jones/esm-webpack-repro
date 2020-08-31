async function say(msg) {
    return () => import('./external.js').then(a => a.default)(msg)
}

export default () => say("Hello, World!")
